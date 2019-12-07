import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  managePost(title: string, content: string) {
    const postData: Post = {title, content};

    this.http
      .post<{ name: string }>('https://ng-angular-complete-5d80a.firebaseio.com/posts.json', postData, {
        observe: 'response'
      })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http.get<{ [key: string]: Post }>('https://ng-angular-complete-5d80a.firebaseio.com/posts.json', {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      params: searchParams,
      responseType: 'json'
    })
      .pipe(map(resData => {
          const postsArray: Post[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postsArray.push({...resData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errRes => {
          return throwError(errRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-angular-complete-5d80a.firebaseio.com/posts.json', {
      observe: 'events',
      responseType: 'text'
    }).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // 000
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}

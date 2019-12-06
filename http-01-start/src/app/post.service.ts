import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  managePost(title: string, content: string) {
    const postData: Post = {title, content};

    this.http
      .post<{ name: string }>('https://ng-angular-complete-5d80a.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPost() {
    return this.http.get<{ [key: string]: Post }>('https://ng-angular-complete-5d80a.firebaseio.com/posts.json')
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
    return this.http.delete('https://ng-angular-complete-5d80a.firebaseio.com/posts.json');
  }
}

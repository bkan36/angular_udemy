import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstOsbSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    /* this.firstOsbSub = interval(1000).subscribe(count => {
       console.log(count);
     });*/
    const customIntervalObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstOsbSub = customIntervalObs.pipe(filter(data => {
      return  data === 1;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.firstOsbSub.unsubscribe();
  }
}

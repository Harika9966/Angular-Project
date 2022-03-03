import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription }  from 'rxjs'
import { map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.css']
})
export class ObsHomeComponent implements OnInit {

  private firstObsSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription = interval(1000).subscribe(count => {
  //     console.log(count);
  //   });
  const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      if (count === 5) {
        observer.complete();
      }
      if (count > 3) {
        observer.error(new Error('Count is greater 3!'));
      }
      count++;
    }, 1000);
  });
  
  this.firstObsSubscription = customIntervalObservable.pipe(filter(data =>{
    return true;
  }),map((data:number)=> {
    return 'Round:'+ (data+1);
    
  }))
  .subscribe((data: any) => {
    console.log(data);
  }, (error: { message: any; }) => {
    console.log(error);
    alert(error.message);
  }, () => {
    console.log('Completed!');
  });
}


  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}



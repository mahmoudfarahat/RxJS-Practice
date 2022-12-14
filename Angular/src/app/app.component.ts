import { Component, OnInit } from '@angular/core';
import { concat, concatMap, delay, fromEvent, interval, map, merge, mergeMap, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rxjsPractice';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))
    );
    result.subscribe(x => console.log(x));
//3-swichMap 
// const click =fromEvent(document,'click')
// click.pipe(
//   switchMap(() => {
//     return interval(1000)
//   })
// )
// .subscribe(x  => {
//   console.log(x)
// })


const series1$ = interval(1000).pipe(map(val => val*10));

const series2$ = interval(1000).pipe(map(val => val*100));

const result$ = merge(series1$, series2$);

result$.subscribe(console.log);
// const letters$ = of ('a','c','b')
// const numbers$ = of (1,2,3)

// const combined = letters$.pipe(
//   mergeMap(letter => {
//     return  numbers$.pipe(map(numberEl => letter + numberEl))
//   })
// )
// combined.subscribe(console.log)


   // 1- concat
  //   const obs1$ = of('a','b','c').pipe(delay(3000));
  //   const obs2$ = of('1','2','3').pipe(
  //     tap(()=>{
  //       throw new Error('Something went wrong')
  //     })
  //   );
  //   const concatData = concat(obs1$,obs2$,obs1$)
  // concatData.subscribe(
  //   value => console.log('value is', value),
  //   err => console.log('err is', err),
  //   () => console.log('complete')
    
  // )
  }


}

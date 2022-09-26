# RxjsPractice

 
1- concate:
take an array of observables and susbscribe at first and when it completes, it delivers the second and so on

const obs1$ = of('a','b','c').pipe(delay(3000));
    const obs2$ = of('1','2','3').pipe(
      tap(()=>{
        throw new Error('Something went wrong')
      })
    );
    const concatData = concat(obs1$,obs2$,obs1$)
  concatData.subscribe(
    value => console.log('value is', value),
    err => console.log('err is', err),
    () => console.log('complete')
  )
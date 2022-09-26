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


  2- megre Map , flatMap
  megre two observables with nested loop / loop on first observable then an equation on the sceond observable then flat all and return one observable 
 
const letters$ = of ('a','c','b')
const numbers$ = of (1,2,3)

const combined = letters$.pipe(
  mergeMap(letter => {
    return  numbers$.pipe(map(numberEl => letter + numberEl))
  })
)
combined.subscribe(console.log)

3-swtichMap 
swtich between observables and use the latest observable and unsubscribe the old
 
  const click =fromEvent(document,'click')
  click.pipe(
   switchMap(() => {
     return interval(1000)
    })
  )
  .subscribe(x  => {
   console.log(x)
  })
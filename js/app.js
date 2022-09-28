// megreMap and SwitchMap





/// merge and concat 
    
    // Rx.Observable.of('hello')   
    //     .merge(Rx.Observable.of('Everyone'))
    //         .subscribe(x => console.log(x))
 
//  const source1$ = Rx.Observable.interval(2000).map(v => 'Merge 1 ' +v)
//  const source2$ = Rx.Observable.interval(500).map(v => 'Merge 2 ' +v)

//  Rx.Observable.merge(source1$,source2$)
//  .take(15)
//  .subscribe(x => console.log(x  ))

// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge 1 ' +v)
// const source2$ = Rx.Observable.interval(500).map(v => 'Merge 2 ' +v)

// Rx.Observable.concat(source1$,source2$)
// .take(15)
// .subscribe(x => console.log(x  ))


    ///// Map and pluck
 
//   const source$ = Rx.Observable.interval(1000)
//   .take(5)
// .map( v => v*v)
//  source$.subscribe(
//     x => console.log(x)
//  )
 
//    const source$ = Rx.Observable.from( ['alex','tom','shawn'])
//   .take(5)
// .map( v => v.toUpperCase())
// .map(v => 'I am ' + v)
//  source$.subscribe(
//     x => console.log(x)
//  )
 
//  const  users = [ 
//     {name: 'will', age:'25'},
//     {name: 'Mike', age:'21'},
//     {name: 'Mahmoud', age:'25'},
//  ]

//  const users$ =  Rx.Observable.from(users)
//     .pluck('name')
 
 
//  users$.subscribe(x => console.log(x))
 ///////interval  ///// timer //// range

//  const source$ = Rx.Observable.interval(1000).take(5)

//  source$.subscribe(
//     x => console.log(x)
//  )


// //timer(time to start,time between them)
//  const source$ = Rx.Observable.timer(1000, 100).take(5)

//  source$.subscribe(
//     x => console.log(x)
//  )

//  const source$ = Rx.Observable.range(25, 100) 
//  source$.subscribe(
//     x => console.log(x)
//  )









///////Observable From A Promise//////////
// const myPromise = new Promise((resolve,reject) => {
//     console.log('Creating Promise')
//     setTimeout(() => {
//         resolve('Hello from Promise')
//     }, 3000);
// })

// myPromise.then(x => {
//     console.log(x)
// })

// const source$ = Rx.Observable.fromPromise(myPromise)

// source$.subscribe(x => {
//     console.log(x)
// })

// function getUser(username){
//     return $.ajax({
//         url: 'https://api.github.com/users/'+username,
//         dataType: 'jsonp'
//     }).promise()
// }

// const inputSource$ = Rx.Observable.fromEvent($('#input'),'keyup')

// inputSource$.subscribe(e => {
//     Rx.Observable.fromPromise(getUser(e.target.value ))
//     .subscribe(x => {
//         console.log(x)
//         $('#name').text(x.data.name)
//         $('#blog').text(x.data.blog)
//         $('#repos').text('Public Repos: '+x.data.public_repos)

//     })


// })





///////Observable From Scratch//////////
// const  source$  = new Rx.Observable(observer => {
//     console.log('create Observable')
//     observer.next('hello world')
//     observer.error(new Error('Error: something went wrong'))
//    setTimeout(() => {
//     observer.next('wait')
//     observer.complete()
//    }, 3000);

// })
// source$
// .catch(err => Rx.Observable.of(err))
// .subscribe(
//     v => {
//         console.log(v)
//     },
//     err => {
//         console.log(err)
//     },
//     complete => {
//         console.log('Completed')
//     }
// )
///////Observable From Array//////////

// const numbers = [33,22,51,12,23]

// const numbers$ = Rx.Observable.from(numbers)

// numbers$.subscribe(
//     v => {
//         console.log(v)
//     },
//     err => {
//         console.log(err)
//     },
//     complete => {
//         console.log('Completed')
//     }
// )
// const posts  = [ 
//     {title: 'post one' , body: 'this is the body'},
//     {title: 'post two' , body: 'this is the body'},
//     {title: 'post three' , body: 'this is the body'}
// ]
// const posts$ = Rx.Observable.from(posts)

// posts$.subscribe(
//     v => {
//         console.log(v)
//         $('#posts').append('<li>'+v.title+' '+v.body+'</li>')
//     },
//     err => {
//         console.log(err)
//     },
//     complete => {
//         console.log('Completed')
//     }
// )
// const set = new Set(['hello',44,{title:'my title'}])

// const set$ = Rx.Observable.from(set)

// set$.subscribe(
//     v => {
//         console.log(v)
      
//     },
//     err => {
//         console.log(err)
//     },
//     complete => {
//         console.log('Completed')
//     }
// )
// const map = new Map([[1,2],[3,4],[5,6]])

// const map$ = Rx.Observable.from(map)

// map$.subscribe(
//     v => {
//         console.log(v)
      
//     },
//     err => {
//         console.log(err)
//     },
//     complete => {
//         console.log('Completed')
//     }
// )

///////Observable From Events//////////

// const btn = $('#btn')
// const input = $('#input')
// const output = $('#output')


// const btnSteam$ = Rx.Observable.fromEvent(btn, 'click')
// btnSteam$.subscribe(
//     function (e) {
//         console.log('clicked')
//     },
//     function (err) {
//         console.log(err)
//     },
//     function () {
//         console.log('Completed')
//     }
// )

// const inputSteam$ = Rx.Observable.fromEvent(input, 'keyup')
// inputSteam$.subscribe(
//     function (e) {
//         console.log(e.target.value)
//         output.append(e.target.value)
//     },
//     function (err) {
//         console.log(err)
//     },
//     function () {
//         console.log('Completed')
//     }
// )

// const mouseSteam$ = Rx.Observable.fromEvent(document, 'mousemove')
// mouseSteam$.subscribe(
//     function (e) {
//         console.log(e.target.value)
//         output.html('<h1>X : ' + e.clientX +'Y: ' + e.clientY +'</h1>')
//     },
//     function (err) {
//         console.log(err)
//     },
//     function () {
//         console.log('Completed')
//     }
// )
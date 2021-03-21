
console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let prom = new Promise((resolve, reject) => {
//     // some code
//     let a = 10;
//     let b = 15;
//     let c = a + b;
//     setTimeout(resolve, 1000, 5, 10, 5);
//     //reject(0);
// });

// prom.then(res => {
//     console.log(res);
//     throw new Error('Error');
//     return 50;
// }, err => {
//     console.log('err ', err);
//     //throw new Error('Error');
//     return 80;
// }).then(res2 => {
//     console.log('res2 ', res2)
// }, err2 => {
//     console.log('err2 ', err2)
// }).then(res2 => {
//     console.log('res2 ', res2)
// }, err2 => {
//     console.log('err2 ', err2)
// }).then(res2 => {
//     console.log('res2 ', res2)
// }, err2 => {
//     console.log('err2 ', err2)
// }).then(res2 => {
//     console.log('res2 ', res2)
// }, err2 => {
//     console.log('err2 ', err2)
// })

// prom
//     .then(res => {
//     console.log('res', res);
//
//     throw -10;
//     //@ts-ignore
//     return res + 50;
// })
//     .finally()
//     .then(res2 => {
//     console.log('res2', res2);
//     //@ts-ignore
//     return res2 + 50;
// })
//     .then(res3 => {
//     console.log('res3', res3);
// })
//     .catch(err => {
//         console.log('err ', err)
//         return 10
//     })
//     .finally()

// prom
//     .then(res => {
//         console.log('res', res);
//         return 50;
//     })
//     //@ts-ignore
//     .finally(res => {
//         console.log('finally ', res);
//         return 100;
//     })
//     .then(res2 => {
//         console.log('res2', res2);
//     })


// just a plug
export default ()=>{};
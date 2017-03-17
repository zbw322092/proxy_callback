// let myFirstPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('Success!');
// 		reject(new Error('fail'));
// 	}, 1000);
// });

// myFirstPromise
// 	.then((successMessage) => {
// 		console.log('Yay! ' + successMessage);
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

// var immediateResolvedPromise = Promise.resolve('Done');
// immediateResolvedPromise
// 	.then((res) => {
// 		console.log(res);
// 	});

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 2000, 'foo');
// });

// Promise.all([p1, p2, p3])
// 	.then(values => {
// 		console.log(values);
// 	});

// var pp1 = new Promise((resolve, reject) => { 
//   setTimeout(resolve, 1000, 'one'); 
// }); 
// var pp2 = new Promise((resolve, reject) => { 
//   setTimeout(resolve, 2000, 'two'); 
// });
// var pp3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'three');
// });
// var pp4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 4000, 'four');
// });
// var pp5 = new Promise((resolve, reject) => {
//   reject('reject');
// });

// var pp6 = new Promise((resolve, reject) => {
// 	setTimeout(reject('reject late'), 5000);
// });

// Promise.all([pp1, pp2, pp3, pp4, pp5]).then(values => { 
//   console.log(values);
// }).catch(reason => { 
//   console.log(reason)
// });

// Promise.all([pp1, pp2, pp3, pp4, pp6]).then(values => { 
//   console.log(values);
// }).catch(reason => { 
//   console.log(reason)
// });

var p7 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 2000, 'one'); 
});
var p8 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, 'two'); 
});

// p7 will also be resolve, but it's value will not be processed
Promise.race([p7, p8]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p8 is faster
});

var p9 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, 'three');
});
var p10 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, 'four'); 
});

Promise.race([p9, p10]).then(function(value) {
  console.log(value); // "three"
  // p9 is faster, so it resolves
}, function(reason) {
  // Not called
});


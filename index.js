// fn - the callback function to proxy
// p - A custom promise constructor (default: the built-in `Promise`).
var sliced = require('sliced');

module.exports = function proxyCb(fn, p) {
	p = p || Promise;

	var res = function(err) {
			if (err) {
				fn(err);
				res.proxyCbReject(err);
			} else {
				fn.apply(res, arguments);
				res.proxyCbResolve.apply(res, sliced(arguments, 1));
			}
			return res._;
	};

	res.resolver = function(resolve, reject) {
		res.proxyCbResolve = resolve;
		res.proxyCbReject = reject;
	};

	res._ = new p(res.resolver);
	return res;
};

// function EasyPromise(err, data) {
// 	return new Promise((resolve, reject) => {
// 		if (err) {
// 			reject(err);
// 		} else {
// 			resolve(data);
// 		}
// 	});
// }

// var easyPromise = new EasyPromise(null, 'That is ok');
// 	easyPromise
// 		.then(function(data) {
// 			console.log(data);
// 		})
// 		.catch(function(err) {
// 			console.log(err.message);
// 		});
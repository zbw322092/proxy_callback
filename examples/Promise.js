let myFirstPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('Success!');
		reject(new Error('fail'));
	}, 1000);
});

myFirstPromise
	.then((successMessage) => {
		console.log('Yay! ' + successMessage);
	})
	.catch((err) => {
		console.log(err.message);
	});
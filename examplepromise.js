function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if (typeof a == 'number' && typeof b == 'number') {
			resolve(a+b);
		}else{
			reject('a & b need to be numbers');
		}
	});
}

addPromise(2, 3).then(function(sum){
	console.log('success', sum);
}, function(err){
	console.log('error', err);
})

addPromise('andrew', 9).then(function(){
	console.log('this should NOT appear');
}, function(err){
	console.log('error', err);
})


let myPromise = new Promise(function (myResolve, myReject) {
    let x = 10;

    // The producing code (this may take some time)
    setTimeout(() => {
        if (x == 0) {
            myResolve("OK");
        } else {
            myReject("Error");
        }
    }, 5000);

});

myPromise.then(
    function (abcd) {
        console.log('async code success');
        console.log(abcd);
    },
    function (efg) {
        console.log('async code error');
        console.log(efg);
    }
);

console.log('end of sycn code....');
setTimeout(() => {
    console.log('timeout from sync code');
}, 3000);


axios.get(config, function (data) {
    //success
}, function (error) {
    //error
});


axios.get(config).then(success_func, error_func);
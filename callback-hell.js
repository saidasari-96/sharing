
/*

let getBeef = function (user, nextStep) {
    console.log(`Retrieving beef from ${user}`);
    nextStep("raw beef",cookBeef); //
};

let sliceBeef = function (rawBeef, nextStep) {
    console.log(`Slicing ${rawBeef}`); 
    nextStep("sliced beef",serveBeef);
};

let cookBeef = function (slicedBeef, nextStep) {
    console.log(`Cooking ${slicedBeef}`); 
    nextStep("cooked beef");
};
let serveBeef = function (cookedBeef, nextStep) {
    console.log(`Putting ${cookedBeef} on the plate`); 
    //nextStep("Beef on plate");
    console.log('Beef on plate');
};

getBeef({name:"Raj"}, sliceBeef);

*/

//===============================
let prom = new Promise((resolve, reject) => {

    //{name:"Khan Beef Shop"} //TODO...

    setTimeout(() => {
        resolve("Khan Beef Shop");
    }, 3 * 100);
});

prom.then(function (user) {
    console.log(`Retrieving beef from ${user}`);
    return "raw beef";
}).then(function (rawBeef) {
    console.log(`Slicing ${rawBeef}`);
    return Promise.resolve("sliced beef");
}).then(function (slicedBeef) {
    console.log(`Cooking ${slicedBeef}`);
    //return "cooked beef";
    return Promise.reject(); //TODO error handling in promise..
}).then(function (cookedBeef) {
    console.log(`Putting ${cookedBeef} on the plate`);
    console.log('Beef on plate');
}, function(err){
    console.log('got you in reject callback..');
}).catch(function(err){
    console.log('got you in catch block..');
});







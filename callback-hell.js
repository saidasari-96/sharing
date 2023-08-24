
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
    return "cooked beef";
    //return Promise.resolve("cooked beef");
    //x=y-z; // exception.
    //throw "cooking error.."; //exception
    //Promise.reject('xyz'); //TODO
   // return Promise.reject(); //
   //no return statement //equivalent to below.
   //return; // equalent to below
   //return Promise.resolve(); //implicit when there is no error..
}).catch(function(err){
    console.log('got you in catch block for Cooking..');
    console.error(err);
}).then(function (cookedBeef) {
    console.log(`Putting ${cookedBeef} on the plate`);
    console.log('Beef on plate');
}).catch(function(err){
    console.log('got you in catch block..');
    console.error(err);
});

// , function(err){
//     console.log('got you in reject callback..');
// }







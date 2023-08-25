Callback hell
Promice
Promice chain
Async & await..




Qualitest

https://blog.quastor.org/p/architecture-web-browsers
    https://medium.com/@duartekevin91/basics-of-understanding-chromes-v8-engine-c5c8ec61fa6b

JIT


Q)Is JavaScript is Synchronous or Asynchronous 
A)
Q)What is EventLoop
"Event Loop" adds the call to "Event Que"/"Callback Que"
"Event Loop" monitors "Call Stack"
"Event Loop" removes the call from "Event Que" and moves it to Call Stack.


What is the output of below code
console.log(‘hi’)

setTimeout(() => {

console.log(‘user’);

},100);

console.log(‘bye’);



How many ways you can Create an Object - Write the code
There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().var x=Object.create();


Input: 
		var array = [1,2,3]

		var array1 = [4,5,6]


		output = [1,2,3,4,5,6]



	How to write a function to accept n number of parameters, and gives	the output as sum of the numbers

	sum(1,2) = output - 3

	sum(4,5,7,9) = output - 25 

    function sum(){
        //add all of the args.
        //arguments[] 
    }

How Can you create an object with Key value Pairs - Show the code 
    Look up...
    obj={};
    obj[prop1]=val1;

How can you Destructure an Object - take the previous created object and destructure  from that
... operator.
const {var1,var2}=obj;

How can you change the Name of the Key while Destructuring
const abs = { name:"Jhon", age:"40", country:'IND' };
const { name:sname,...otherDetails } = abs;
console.log(sname)
console.log(name);
console.log(otherDetails);


Tech Mahindra
JavaScript
What is ES6 and its Features 
-https://www.boardinfinity.com/blog/top-10-features-of-es6/


Output of the code
console.log(isInt(4)); // true
console.log(isInt(12.2)); // flase
console.log(isInt(0.3)); // false
IND..


CSS
What is Selectors in CSS -  (ID, Class)
What is Pseudo Class in CSS - (:hover, :active)
https://www.w3schools.com/css/css_pseudo_classes.asp


What is CSS Preprocessor and Uses - (SCSS)


HTML



What is Features of HTML5
https://www.geeksforgeeks.org/top-10-new-features-of-html5/
JadeGlobal



Task

Create a component 



Take two input fields and one add Button



Enter the first name and last name and click add



The names should add below like a List



Coforge



function(add(2)(5)(8)(4)());


Write code for to accept n number of arguments and it should return sum of all the arguments
function sum(currentNumber) {
    var total = currentNumber;
    var func = function (nextNumber) {
        if (nextNumber) {
            total += nextNumber;
            return func;
        }
        else {
            return total;
        }
    };
    return func;
}

console.log(sum(2)(5)(2)(5)());




String = “Sasi”, with out using in built functions reverse a string
What is Reduce 
Have u used JWT tokens
What is Concurrent Batching

Goodwork Labs



String = “abc@hyd!ze@”,


Write code for Reverse the string and the special characters should be in the same positions



UST



HTML

What is Doctype and benefits of using Doctype?
If u write HTML5 like syntax like Video, is it work with out Doctype?
What is Meta data? and what are the benefits using metadata?
What are the Semantic Element? Why it has Introduced?
What is Web API in HTML5?
What is the diff btw Local Storage and Session Storage?
What is size of Cookies and Local Storage?
What is Async and Defer in Script Tag?
What is Block and Inline Elements?
How do you make a Table Responsive?


CSS

What is CSS Box-Model, and what is the Order of it?
What is positions in CSS and Explain where u can use those?
What is Pseudo class and What is Pseudo Elements
Do u face any Challenges on Cross Browser like something is working in Chrome(-webkit) and not working Firefox(-moz)? 
What is vendor Prefixes in CSS?
What is diff btw Flex and Grid?
What is pt, px, rem and em ?


JavaScript

What is JavaScript and what do u understand by JavaScript?
How Javascript executed multiple operations and multiple Requests from the user?
Where Web API’s will Execute in JS?
How many ways we can Create an Object in JS?
What is a Closure? and What are the benefits of using a Closure?
What are Primitive and Non Primitive Data Types in JS? What Data types added in Es6?
What is Callback?
What is Promise.all() and Promise.race()?
What mechanism you use to call an API? Are u used Axios?
What is Rest and Spread Operator?
What is Arrow Function?

PureSoftware



1. what is Hoisting

2. What is Call, apply and Bind

3. What is EventLoop

4. Diff btw Synchronous and Asynchronous

5. Var, let and Const

6. diff btw Higher Order functions vs Callback function

7. what is map, filter and Reduce

8. what is Splice and slice
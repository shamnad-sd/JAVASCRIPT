// function greet(){
//     return 'hello';
// }
// console.log(greet());


// sum

// function sum(a,b){
//     sum =a+b;
//     return sum 
// }
// console.log(sum(10,20));


// normal function
// const details = function(name){
//     return `hello,${name}`;
// }
// console.log(details("shamnad"));


// arrow function
// const arrow = (name2) => {
//     return `hello,${name2}!`
// }
// console.log(arrow("shamnad"));

// nested Function
// function greet(greeting) {
//     return function(name) {
//       return function(situation) {
//         return `${greeting}, ${name}! ${situation}!`;
//       };
//     };
//   }
  
//   const greetMorning = greet("Good morning")("Shamnad")("how are you!");
//   console.log(greetMorning); 


//   array
// let car =["Benz","BMW","Porche"];
// console.log(car);

// array push
// let car =["Benz","BMW","altis"];
// car.pop("altis");
// console.log(car);

// array pop
// let car =["Benz","BMW","altis"];
// car.pop("altis");
// console.log(car);

// Array shift()
// let car =["Benz","BMW","altis"];
// let firstcar = car.shift();
// console.log(car);

// array unshift
// let car =["Benz","BMW","altis"];
// let firstcar = car.shift("");
// console.log(car);




// ---------------------------------------------rest parameters----------------------------------------------

function add(...values){
    let sum =0
    for(let i=0; i<values.length; i++){
        sum += values[i]
    }
    console.log(sum)
    
}
add(10,20,30)


// -----------------------------------Destructuring arrys---------------------------------


const fruits =["apple","banana","mango"];
// assign variable
const [aa,bb,cc]= fruits;
console.log(aa,bb,cc)


// -----------------------------------Destructuring obj---------------------------------

// new way of using an object inside a function
const student = {
    name:"shamnad",
    age:21,
    gender:"male"
    }
    mydetails(student);

    function mydetails({name,age,gender}){
        const message= 'my name is' + name +'im just'+ age +'old,my gender is'+ gender ;
        console.log(message)
    }


    // -----------------------------------Speard operators---------------------------------

    const MernBatch =["shamnad","asger","ansaf","habeeb"]
    const DatascienceBatch =["faadhi","zayd","ashique"]

    const allstudents =[...MernBatch,...DatascienceBatch]
    console.log(allstudents)


    // ---------------------------Javascript Short Circuiting Operators----------------------

    function gfg() {
        // AND short circuit
        console.log(false && true)
        console.log(true && true)
        // OR short circuit
        console.log(true || false)
        console.log(false || true)
    }
    gfg();
    
    // -----------------------------------JavaScript Nullish Coalescing(??) Operator

    const foo = { 
        bar: 0 
    } 
    
    const valueBar = foo.bar ?? 42; 
    const valueBaz = foo.baz ?? 42; 
    
    // Value of bar: 0 
    console.log("Value of bar: ", valueBar); 
    
    // Value of bar: 42 
    console.log("Value of baz: ", valueBaz); 

    

    




  
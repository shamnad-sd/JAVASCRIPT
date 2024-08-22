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

// function add(...values){
//     let sum =0
//     for(let i=0; i<values.length; i++){
//         sum += values[i]
//     }
//     console.log(sum)
    
// }
// add(10,20,30)


// -----------------------------------Destructuring arrys---------------------------------


// const fruits =["apple","banana","mango"];
// // assign variable
// const [aa,bb,cc]= fruits;
// console.log(aa,bb,cc)


// -----------------------------------Destructuring obj---------------------------------

// new way of using an object inside a function
// const student = {
//     name:"shamnad",
//     age:21,
//     gender:"male"
//     }
//     mydetails(student);

//     function mydetails({name,age,gender}){
//         const message= 'my name is' + name +'im just'+ age +'old,my gender is'+ gender ;
//         console.log(message)
//     }


    // -----------------------------------Speard operators---------------------------------

    // const MernBatch =["shamnad","asger","ansaf","habeeb"]
    // const DatascienceBatch =["faadhi","zayd","ashique"]

    // const allstudents =[...MernBatch,...DatascienceBatch]
    // console.log(allstudents)


    // ---------------------------Javascript Short Circuiting Operators----------------------

    // function gfg() {
    //     // AND short circuit
    //     console.log(false && true)
    //     console.log(true && true)
    //     // OR short circuit
    //     console.log(true || false)
    //     console.log(false || true)
    // }
    // gfg();
    
    // -----------------------------------JavaScript Nullish Coalescing(??) Operator

    // const foo = { 
    //     bar: 0 
    // } 
    
    // const valueBar = foo.bar ?? 42; 
    // const valueBaz = foo.baz ?? 42; 
    
    // // Value of bar: 0 
    // console.log("Value of bar: ", valueBar); 
    
    // // Value of bar: 42 
    // console.log("Value of baz: ", valueBaz); 

    // ======================================================assignment=================================
    // 1
    // const books=[
    //     {
    //         title :'the Great gatsby',
    //         author :'f.scott',

    //     },
    //     {
    //         title :'kill',
    //         author:'harper lee',
    //         publication:'1997'

    //     },
    //     {
    //         title :'the lord of the rings',
    //         author :'j.r.r.tolkien',
    //     },

    // ]

    // const[book1,book2,book3] =books;

    // // 2
    // let {publication:publication}=book2
    // console.log(`book :2 is the ${book2.title}author is ${book2.author} pb is ${publication}`)

    // // 3
    // const book4 =[
    //     {
    //         title:'harry potter',
    //         author:'j.k.rowling',

    //     }
    // ]
    // console.log(book4);

    // 4
    // const bookss =[...books,...book4]
    // console.log(bookss);

    // const copiedBooks =[...books]
    // console.log(copiedBooks);

// task1
    // ============================================================for off (using for array)=================================
    // function add(...values){
    //         let sum =0
    //         for(let x of values){
    //             sum =x+sum
    //         }
    //         console.log(sum)
            
    //     }
    //     add(10,20,30)


    // task2
        //=========================================================== for in (using for object)==================================
        // const number ={
        //     num1:10,
        //     num2:20,
        //     num3:30,
        //     num4:40,
        //     num5:50,
        // }

        // let sum = 0
        // for(let x in number){
        //     sum+=number[x]
            
        // }
        // console.log(sum);


    // task3
    // ================================================================forEach====================================
    // let sum =0
    //   const number =[10,20,30,40]
    // //   for each
    //     number.forEach(add);

    //     function add(Value){
    //         sum +=Value
    
    //     }
    //     console.log(sum);

    // task4
        // ===================================================================reduce===============================
        // const numbers = [10, 20, 30, 40, 50];
        // s=numbers.reduce(add)

        // function add(sum, value) {
        //     return sum + value;
            
        // }
        // console.log(s);



        // task 5
        // map
        // const fruits =["apple","banana","orange","avacado","grape"]
        // const Fruits1 = fruits.map(fruit => fruit + "s");

        // console.log(Fruits1);

        







    // task 6
    //     const friends =[{
    //         name:"ansaf",
    //         age:29,
    //         gander:"male",
    //         city:"thanuppadam",
    //         mobile:123456,

    //     },
    //     {
    //         name:"asger",
    //         age:20,
    //         gander:"male",
    //         city:"kochi",
    //         mobile:654324,
    //     },
    //     {
    //         name:"habeeb",
    //         age:30,
    //         gander:"male",
    //         city:"malappram",
    //         mobile:63453,
    //     },
    //     {
    //         name:"lakshmi",
    //         age:21,
    //         gander:"female",
    //         city:"kochi",
    //         mobile:498789,
    //     },
    //     {
    //         name:"meenakshi",
    //         age:22,
    //         gander:"female",
    //         city:"kochi",
    //         mobile:498789,
    //     }

    // ]

    // const malefriends =friends.filter(friends => friends.gander ==="male");
    // const femalefriends =friends.filter(friends => friends.gander ==="female");

    // console.log("malefriends:",malefriends);
    // console.log("femalefriends:",femalefriends);

    // =======================================error handling====================
    // trycatch

    try {
        const x=1+1
        console.log(x);
      } catch (error) {
        console.log('Failed');
      }



    //=============================================== json syn==============================


    fetch('https://jsonplceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json[0].email))
    .catch(error => console.error('Error:', error.message));



    // ===================================json asyn======================

    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const Data = await response.json();
        console.log(Data);
    }
    getData();
    

  // ==========================codding challange




















    
   
   


    

    




  


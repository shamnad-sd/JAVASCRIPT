// this is doing for i already create li tags in html file, then i create array and values , then i passing this array values from html file
// this is not to right way we can choose forloop

// let cars =["bmw","porshe","Toyoto","Kia","landRover"]

// let carDetails= document.querySelectorAll('li')
// carDetails[0].innerHTML=cars[1];
// carDetails[1].innerHTML=cars[3]
// carDetails[2].innerHTML=cars[2]
// carDetails[3].innerHTML=cars[0] 
// carDetails[4].innerHTML=cars[4] 
// console.log(cars);


// this is the other way to passing value but this have not need to html li this have already li
// let cars =["bmw","porshe","Toyoto","Kia","landRover"];

// for(let Carcollections of cars){
//     console.log(Carcollections);

// }






/* METHOD 1 */
// this way doing for we can create html elements in javascript

// let carcoll = document.getElementById("carsId")
// let cars =["bmw","porshe","Toyoto","Kia","landRover","Tata"];


// this for loop working :first this carcollection pick cars's data's 
// the we have to create lis tag 
// the clg that So 
// carcollections pick cars first bmw then they create one list tag then that console 
// carcollection pick second porshe then.......
// and last total four li they having create


// for(let Carcollections of cars){
//     let li =document.createElement('li')
//     li.innerHTML= Carcollections;
// appendchild was ul tag child component
//     carcoll.appendChild(li);
//     console.log(li);

// }

/*METHOD 2*/
// THIS WAY WE ARE USING FUNCTION FOR passing data's
// forEach
let carcoll = document.getElementById("carsId")
let cars =["bmw","porshe","Toyoto","Kia","landRover","Tata"];

cars.forEach(function (carcollection){
    let li =document.createElement('li')
    li.innerHTML= carcollection;
    carcoll.appendChild(li);
});




// ----------------------------------------------------spread Operator

// const studentDetails = {
//     id :1,
//     name : "shamnad",
//     age : 21,
// }

// // this have generate copy , if i not using speread operator you can see ansfa data value both object in console time
// const student1 = {...studentDetails}

// student1.name= "Ansaf"

// console.log(student1);
// console.log(studentDetails);

// example 2

// const studentDetails = ["shamnad","ansaf","Steel"];
// const studentDetails2 = ["askar","ansaf","Steel"];

// // this add two array and doing push for each values
// const details = [...studentDetails , "abi" ,studentDetails2 ,"sreevishnu"]
// console.log(details);

// -------------------------------------REST--------------------------------

/*array destructuring*/
// const studentDetails = ["shamnad", "ansaf", "Steel", "askar"];

// const [first, second, third, fourth] = studentDetails;
// // this is destructuring you can call any word , that time that words assigning array values
// console.log(third);
// console.log(first);
// console.log(second);
// console.log(first);

// object Destructuring
// const studentDetails = {
//     id: 1,
//     Name: "ansaf",
//     Age: 21,
//     Place: "ktk"
// };

// this case object have key and value so we can't change, but array case it is not worried key it have index value
// const { id, Name, Age, Place } = studentDetails;
// console.log(id,Name);

// rest using method in this example
// const studentDetails = {
//   id: 1,
//   Name: "ansaf",
//   Age: 21,
//   Place: "ktk",
// };
// // in this time rest operator not showing name value this only showing balanced object values, this similar to spread op ,but the change is you can pick balanced values
// const { Name, ...rest } = studentDetails;
// console.log(Name);
// console.log(rest);

// --------------------------------------------ForEach----------------------
// forEach using same array not using separate array
// const studentDetails = [
//   {
//     id: 1,
//     Name: "shamnad",
//     Age: 21,
//     Place: "ktk",
//   },
//   {
//     id: 2,
//     Name: "ansaf",
//     Age: 21,
//     Place: "ktk",
//   },
//   {
//     id: 3,
//     Name: "askar",
//     Age: 21,
//     Place: "ktk",
//   },
// ];

// for Method
// for(i=0; i < studentDetails.length ; i++){
//     console.log(studentDetails[i].Name);
// }

// ForEach Method ,all array of object passing value then we can pick any elements
// studentDetails.forEach((value,index,array)=>{
//     console.log(value);
// })

// --------------------------------------------------MAP---------------------
// map using seperate array ,return separate array , so we need separate storing variable
// const studentDetails = [
//     {
//       id: 1,
//       Name: "shamnad",
//       Age: 21,
//       Place: "ktk",
//     },
//     {
//       id: 2,
//       Name: "ansaf",
//       Age: 21,
//       Place: "ktk",
//     },
//     {
//       id: 3,
//       Name: "askar",
//       Age: 21,
//       Place: "ktk",
//     },
//   ];

// for Method
// for(i=0; i < studentDetails.length ; i++){
//     console.log(studentDetails[i].Name);
// }
// map method
//   const NewArray = studentDetails.map((value)=> value.Name)
//   console.log(NewArray);

//   -------------------------filter method-----------------------
// const studentDetails = [
//   {
//     id: 1,
//     Name: "shamnad",
//     Age: 21,
//     Place: "ktk",
//   },
//   {
//     id: 2,
//     Name: "ansaf",
//     Age: 21,
//     Place: "mlp",
//   },
//   {
//     id: 3,
//     Name: "askar",
//     Age: 22,
//     Place: "ktk",
//   },
// ];
// map method
// const NewArray = studentDetails.map((value) => value.Name);

// filter
// we can easly filter any value for using this  just enter the condition of value section

// const NewArray = studentDetails.filter((value) => value.Place ==="ktk");
// console.log(NewArray);


//---------------------------------------------Reduce Method--------------------------------

// reduce method
// reduce maintly doing calculation

// const Numbers =[222,333,444,555,666,777]
// let total=0
// if i use ForLoop
// for(i=0 ; i<Numbers.length ; i++){
//     total += Numbers[i]
    
// }
// console.log(total);


// if i use reduce method
// reduce pick 4items total,value,index,array
// 0 is the when the time we setting total=0 setting forloop area, in reduce case you can see the 0 , that initial state value, total =0

// const Numbers =[222,333,444,555,666,777]
// const NewArray = Numbers.reduce((total,value) =>total + value,0);
// console.log(NewArray);

//---------------------------------------------Find Method--------------------------------
// find method
// this method using we can pick object ,example i choose any data from in object that time we got that data object fully,fiter method case you can only pick that object
// const studentDetails = [
//   {
//     id: 1,
//     Name: "shamnad",
//     Age: 21,
//     Place: "ktk",
//   },
//   {
//     id: 2,
//     Name: "ansaf",
//     Age: 21,
//     Place: "mlp",
//   },
//   {
//     id: 3,
//     Name: "askar",
//     Age: 22,
//     Place: "ktk",
//   },
// ];

// const newObj =studentDetails.find((value)=> value.Age===22)
// console.log(newObj);

//---------------------------------------------Sort Method--------------------------------
// sort using for, we can set numbers in currect order

// const Numbers =[522,516,511,633,144,255,666,777]

// const sortedNumber= Numbers.sort((a,b)=>a - b);
// console.log(Numbers);

//---------------------------------------------flat Method--------------------------------
// this can do for all nested array in one array, 
// array case
// const Numbers =[522,[516,511],[633,144,[255,666]],777]

// console.log(Numbers.flat(Infinity));

// -----------------------------------------js Chaining--------------------------
// const player ={
//     id:2,
//     name:"shamnad",
//     place:"okl",
//     company:{
//         com_name:"google",
//         com_place:"kochi",
//     },
// }
// this is old way and risck way
// if(player&&player.company&&player.company.com_name){
//     console.log(player.company.com_name);
// }
// this is new way and safe way (ES10)new syntax this call "chaining"
// if(player?.company?.com_place){
//     console.log(player.company.com_place);
// }

// example 2
// i want upto 144 all values and calculate that values, and sort the values?
// you can set chaining easly inside the map
// const NumbersArray =[522,516,511,633,144,255,666,777]

// this time filter upto 523 all values
// const NewArray =NumbersArray
// .map((value)=>  value)
// .filter((data)=> data>144)
// .sort((a,b)=> a-b)
// .reduce((total,value)=> total +value ,0)
// console.log(NewArray);


// --------------------------------------------------DoM selectors---------------------------------------------------------
// this old method
// document.getElementById("Header").innerHTML="helloo"
// new way if you choose this way you can use classname(.header) , or Id(#Header) from query selectors
// document.querySelector("#Header").style.color="red"
// [1] this one is using selecting index value , if i set queryselector only not queryselectorAll that time only showing first elements
// document.querySelectorAll("#Header")[1].style.color="blue"

// for each using

// const Header =document.querySelectorAll("#Header")

// Header.forEach((value)=> value.style.color = "green")
// console.log(Header);
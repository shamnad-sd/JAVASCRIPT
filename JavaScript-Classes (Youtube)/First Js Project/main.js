let carInput = document.getElementById("car-input");
let Button = document.getElementById("btn");
let ListItems = document.getElementById("carcollection-list");
// create empty array
// let carCollection1 =[];



// step 2
function btnHandle() {
  let carInputData = carInput.value;
  // create DOM Elements Now
  let carList = document.createElement("li");

  /* this span creating for . if your edit any value that time carlist totally replace that time also remove delete btn ,
 so we create span element inside li, so we can only replace span inside data's */
  let spanEl =document.createElement("span")
  carList.appendChild(spanEl)
  spanEl.innerText = carInputData;
  
  // we can set style inside the javascript
  carList.style.cssText =
    "list-style: none; background-color: #f69d3c; color: white; padding: 10px 20px; margin: 3px 32rem; text-decoration: none;animation: 0.3s ease;";
  ListItems.appendChild(carList);
  // this clear current inputdata
  carInput.value = "";
  // this is using more when ever you enter data then we can use suddently input area
  carInput.focus();
  console.log(carList);



  // // step 3 this doing push input data's from empty array
  // carCollection1.push(carInputData);
  // console.log(carCollection1);



  // ---create Trash button---
  let trashButton = document.createElement("i");
  // this create class
  trashButton.className = "fa-solid  fa-trash";
  carList.appendChild(trashButton);
  console.log(trashButton);
  trashButton.addEventListener("click", removeItem);


//   create edit button
    let Editbtn =document.createElement("i")
    Editbtn.className = "fa-solid fa-pen-to-square"
    carList.appendChild(Editbtn)
    Editbtn.addEventListener("click", editItem)
}




// delete item from car data
function removeItem(event) {
    // check event object in console, then understand
  console.log(event.target.classList[0]);
  if(event.target.classList[0]==="fa-solid"){
    // the parent element is list
    let item = event.target.parentElement;
    item.remove()
  }
}

// edit kitchen item
function editItem(event){
if(event.target.classList[1]==="fa-pen-to-square"){
  let editValue = prompt("add new text")
  let item = event.target.parentElement;
  let spanEl = item.querySelector("span")
  spanEl.innerText =editValue

}
}

// step-1
// add event lister to the button
Button.addEventListener("click", btnHandle);

// btnHandle.push()

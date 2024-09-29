// 1.push()
// 2.pop()
// 3.unshift()
// 4.shift()

// Step-1 find all the list items here
let allListItem = document.querySelectorAll('li')
let CarArray =[];

//step-2 iterate all items(using forEach)
allListItem.forEach(function(Cars){
    let carCollections = Cars.innerHTML
    //step-3 push all the list item content to a new Array
    CarArray.push(carCollections)
    
})
CarArray.unshift("hello","hii")
CarArray.shift()
console.log(CarArray);

 
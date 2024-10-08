// if you are console this you can see it is pure object
// object case you can easly pick any key values so this not string
const strObject = {
    id:1,
    name:"Shamnad",
    age:25,
}

// json case you can see this key have double quotes , and `` this key
// if you have this code build in jasonScript.json , not need to `` this 
// jason case you can't pick key values , the reason is these jason script are already string values
// but you can convert into object using "parse"
// you don't setting double qoutes in integer values and boolean values

const  strJson = `{
    "id":0,
    "name":"Shamnad",
    "age":25
}`
// json string to object convert , and i picked name
const parsedJSON = JSON.parse(strJson).name;
// json object to string convert
const stringyJSON = JSON.stringify(strObject)

console.log(stringyJSON);
console.log(parsedJSON);
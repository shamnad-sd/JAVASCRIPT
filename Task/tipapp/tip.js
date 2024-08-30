const calcTip =(billvalue) =>{
    return billvalue < 300 ? billvalue/100*15: billvalue/100*20
}

const bills =[125,555,44]
console.log(bills)


const tips= [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tips)

console.log(`the total amount\n bill 1 ${bills[0]+tips[0]}\n bill 2 ${bills[1]+tips[1]}\n bill 3 ${bills[2]+tips[2]}`)
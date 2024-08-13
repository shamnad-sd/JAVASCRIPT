const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


function calcTip(bill) {
    return bill < 300 ? bill/100*15: bill/100*20
}
for (let i = 0; i < bills.length; i++) {
    console.log(`total = ${bills[i]+(calcTip(bills[i]))}`);

}


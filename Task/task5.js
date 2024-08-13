const calcAverage =(a,b,c) =>{
    return(a+b+c)/3;
         
}

const scoreDolphins = calcAverage(44,23,71);
console.log(`the average is ${scoreDolphins}`);


const scoreKoalas = calcAverage(65,54,49);
console.log(`the average is ${scoreKoalas}`);


const checkWinner =(avgDolphins,avgKoalas)=>{
    if (avgDolphins >= avgKoalas){
        console.log(`kolas win ${avgDolphins} vs ${avgKoalas}`)
    }
    else if (avgKoalas >= avgDolphins){
        console.log(`Dolphin win ${avgKoalas} vs ${avgDolphins}`)
    }
    else{
        console.log(' No team wins...')
    }

}
checkWinner(scoreDolphins,scoreDolphins);
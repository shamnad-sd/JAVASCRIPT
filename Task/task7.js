const mark ={
    fullName :"Mark Miller",
    mass :78,
    height :1.69,
    calcBMI :function(){
        markBMI = mark.mass/(mark.height *mark.height)
        return markBMI 
    }
}



const john ={
    fullName :" John Smith",
    mass :92,
    height :1.95,
    calcBMI :function(){
        johnBMI = john.mass/(john.height *john.height)
        return johnBMI
    }
}


mark.calcBMI()
john.calcBMI()

if(markBMI > johnBMI){
    console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}`)
}
else{
    console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}`)
}
let Number =1234543333333333335980
let reNumber =0
while(Number>0){
    let lastDigit =Number%10
    reNumber= reNumber*10+ lastDigit
    Number = parseInt(Number/10)
}
console.log(reNumber)
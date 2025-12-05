let userInput =Number(prompt("Enter the Number"))
let midvalue = parseInt (userInput/2) 
console.log( "ParseInt Number ",midvalue)


isPrime = true

for(let s=2; s<=midvalue; s++){
    if(userInput%s==0){
        console.log(userInput , s)

    }
}

if(isPrime){
    console.log("prime Number")
    
} else {
    console.log("Not an prime Number")
    
}
// mathematical operations 

// let n =23;
// let m = 34;

// console.log(m+n)
// console.log(m-n)
// console.log('n-m')


//models
// console.log(m%4)


// n++,n++
// n--
// n=n+1

// console.log('n is' , n)

// console.log(5**3)

//

// Assignment Operators

// let n =10
// console.log(n)
// n=n+5

// n+=5
// console.log(n)


// Qus
// let a=10
// let b=20

// let temb1 = a

// a=b
// b=temb1

// [a, b] = [b, a]


// console.log(`a is ${a} and b is ${b}`)

// comparison operators



// let a= 10
// let b =20
// ==
// console.log(a==b)
// console.log(a=="10")

// ===
// console.log(a===b)
//  console.log(20!=a)
//  console.log(20!=20)
//  console.log(1!==b)

// console.log(n<m)

// console.log(30>=60)




// console.log( (30>50) +5
//   )


//   let a = 23
//   let b =20
//   let c=45

//   console.log(a<b<c)


  // Logical Operators ----------------^

//   let username = "code"
//   let password = 2345

//   console.log(username== "code" && password=="2345")

//   // 
//   console.log(10==20 || 10> 20)

//   console.log( !20 !=20)

//   console.log( ! true)


  // String operators 

//   let str1 ="Ws"
//   let str2 =" Welcome"
//   console.log(str1+str2)

// // Ternary Operator 

// let age = 18
// let result =(age >=18  ) ? "Adult" : "Minor"
// console.log(result)


// let age =Number(prompt ("Enter Your age"))


// // let result=age>=18 ? "Yes"   :  "False"
// console.log(result)


// let num1 = Number(prompt ('Enter the first Number'))
// let num2 = Number(prompt ('Enter the first Second'))

// let result = num1>num2 ? `num1 is ${num1} is greater then num2 ${num2} ` : `num2 is ${num2} is greater then num1 ${num1}`







// Conditional Statement z


if(true){
    console.log("hello")

}
 let score1 =80
if(score1>60){
    console.log("You passed")
}

console.log("Welcome")





let score =90

if (score>50) {
    console.log("passed")
    
} else {
    console.log("Fail")
    
}

// Task 1

// let num1 =Number(prompt('Enter the value'))
// if(num1%2==0){
//     console.log("Even Number")
// }
// else{
//     console.log(num1 ,"odd Number")
// }


// if else if else ladder

// let marks =Number(prompt("Enter Your Number"))
// if (marks>=90) {
//     console.log(marks, "wow you got A")
    
// } else if(marks>80) {
    
//     console.log(marks, "wow you got B ")

    
// }
// else{
//     console.log(" Oh No! try Again ")
// }


// Nested if Else 

// let userName ="admin"
// let password =2456
// let =UserNameInput =prompt("enter the username")
// if(UserNameInput == userName){
//     // console.log("Nice UserName toh Sahi ha bhai")
//     let passwordInput =prompt("enter the password")
//     {
//         console.log("Login Done")
//     }

// } else{
//     console.log("UserNmae Sahi nhi baba")
// }


// Switch case

// let Lights ="Yellow"

// switch(Lights){
//     case "red":
//     console.log("stop");
//     break

//     case "Yellow":
//         console.log("reday");
//         break

//     case "Green":
//         console.log("Go");
//         break

//         default:
//             console.log("Invalid Light")
//             break


// }

let num1 =Number(prompt("Enter the Value One"))
let num2 =Number(prompt ("Enter the Value Two"))
let opr =prompt (`
    1 Add (+)
    2 Min (-)
    3 mul (*)

    
    `)
    switch(opr){
        case  "+":
            console.log(num1+num2)
            break
        case  "-":
            console.log(num1-num2)
            break
        case  "*":
            console.log(num1*num2)
            break
    }







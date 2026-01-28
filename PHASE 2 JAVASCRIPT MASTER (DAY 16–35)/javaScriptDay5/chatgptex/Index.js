// 
// let i=1;
// while(i<=5){
//     console.log("Count",i);

//     i++;
// }

// let l = 1;
// do {
//     console.log("Number", l);

//     l++
// } while (l <= 3);

// let prices = [100, 200, 300, 400]
// let total = 0

// for (let i = 0; i < prices.length; i++) {
//     total += prices[i]
// }
// console.log(total);


// let presentCount = 0;
// let absentCount = 0;

// let students = ['A', 'A', 'A', 'P', 'A', 'P', 'A', 'P']

// for (let i = 0; i < students.length; i++) {
//     if (students[i] === "P") presentCount++;
//     else absentCount++;

// }
// console.log("Present", presentCount);
// console.log("Absent", absentCount);


// for (let i = 1; i <= 10; i++) {
//     console.log('l', i);

// }

// let time = 5;
// while (time > 0) {

//     console.log('Time', time);
//     time--;

// }
// let fruits = ["Apple","Banana","Orange"]

// for(let i=0;i<fruits.length; i++){
//     console.log(fruits[i]);

// }


// let fruits = ["Apple", "Banana", "Orange"] 
// for (let i = 0; i < fruits.length; i++)  {
//      console.log(fruits[i])
//      }

// let i=1

// do {
//     console.log(i);
//     i++;
    
// } while (i<=3);

// let card=['Milk',"Bread"]
// card.push("Butter")
// console.log(card);

// card.pop()

// console.log(card);


// // 1
// let carItem =['Shoes',"T-Shirt"]
// carItem.push("Jeans")
// console.log("CardItem",carItem);
// //2 
// // Shoes T-Shirt Jeans
// let notifacaation = ["Meg1","msg2","Meg3"]
// notifacaation.pop()
// console.log(notifacaation);
// // 3
// // Meg1, meg2
// let tasks = ["Study" ,"Workout"]
// tasks.unshift("Wake Up")
// console.log("Task",tasks);
// // 4
// // wake Up Study Workout

// let queue = ["User1" ,"User2","User3"]
// queue.shift()

// // User2, User3
// let courses = ["Java","javaScript","React"]
// let hasReact = courses.includes('React')
// console.log("HasReact",hasReact);

// // Yes

// let cityies=["Delhi","Mumbai","Pure"]
// let cityIndex=cityies.indexOf("pune")
// console.log("CityIndex",cityIndex);

//2

// 8. splice() – Array me se items delete ya replace
// 9. join() – Array ko string banata hai

// 10. map() – Har item ko modify karke new array banata hai
// 11. filter() – Specific condition ke based items choose karta hai
// 12. reduce() – Array ko ek value me convert (total, sum)
// let number = [10,20,30,40,50,]
// let result = number.slice(1,4)
// console.log("Result",result);
// //10,50

// let studentss = ["Amit","Rahul","Neha"]
// studentss.splice(1,1,"Suman")

// // Not Now


// let skills = ["HTML","CSS","JS"]
// let skillsString = skills.join(" ,")
// console.log("SkillsString",skillsString);
// // HTML CSS JS

// let ages = [12,18,25,14,30]
// let adults = ages.filter(age=>age=>18)
// console.log("Adults",adults);
// // 18,25,30
// let pricess=[100, 200,300]
// let totalBils = pricess.reduce((sum,price)=>sum+price,0)
// // 600






// // 1
// let techStack = ["HTML","CSS","JavaScript"]
// techStack.push("React")
// console.log("TeachStack",techStack);

// // 2
// techStack.pop()
// console.log("Remove",techStack);

// // 3
// let fruitsList = ["Banana","Orange"]
// fruitsList.unshift("Apple")
// console.log("FruitsList",fruitsList);

// // 4
// // fruitsList.includes("Apple")
// // console.log("Check Apple",fruitsList);

// let hasApple = fruitsList.includes("Apple")
// console.log("Check Apple",hasApple);


// // 5
// fruitsList.indexOf("Banana")
// console.log("Index Of ",fruitsList);

// let bananaIndex = fruitsList.indexOf("Banana")
// console.log("Index Of ",bananaIndex);


// // 6
// let scoreList = [10,20, 30,40,50]
// let scoreListt=scoreList.slice(1,3)
// console.log("ScoreList",scoreListt);

// let sliceScore = scoreList.slice(1,3)
// console.log("ScoreList",sliceScore);


// // 7
// let studentsQueue = ["Amit","Rahul","Neha"]
// studentsQueue.splice(1,1,"Suman")
// console.log("StudentsQueue",studentsQueue);

// // 8
// let skillsSet =["HTML","CSS","React"]
// let skillsString=skillsSet.join(" - ")
// console.log("skillsSet",skillsString);


// // 9
// let ageList = [12,18,25,14,30]
// let afterages = ageList.filter(age=>age>=18)
// console.log("afterages",afterages);

// // 10
// let productPrices = [100,200,300]
// let totalAmount = productPrices.reduce((sum,price)=>sum+price,0)
// console.log("Total_Amount",totalAmount);







// // 1
// let notificationList = ["Msg1","Msg2"]
// notificationList.push("Msg3")
// console.log("notificationList",notificationList);
// console.log("notificationList",notificationList.length); // length 3


// // 2
// let recentFiles =["file1.pdf","file2.pdf","file3.pdf"]
// let deleteFile =recentFiles.pop()
// console.log("deleteFile",deleteFile);

// // 3

// let taskQueue = ["Task2","Task3"]
// taskQueue.unshift("Task1")
// console.log("taskQueue",taskQueue);
// taskQueue.shift()
// console.log("taskQueue",taskQueue);

// // 4
// let allowedRoles = ["Admin","Editor"]
// let chackUserRole = allowedRoles.includes("user")
// console.log("chackUserRole",chackUserRole);

// // 5
// let cityList = ["Delhi","Mumbai","Pune"]
// let chackCity = cityList.indexOf("Bangalore")
// console.log("chackCity",chackCity);


// // 6
// let productList = ["P1","P2","P3","P4","P5","P6","P7"]
// let productListSlice = productList.slice(0,2)
// console.log("productListSlice",productList);

// // 7
// let employeeList = ["E1","E2","E3","E4"]
// let removeemployeeList=employeeList.slice(1,1)
// console.log("removeemployeeList",removeemployeeList);

// // 8
// let selectedFilters = ["Price","Rating","Brand"]
// let selectedFiltersString = selectedFilters.join("-")
// console.log("selectedFiltersString",selectedFiltersString);

// // 9
// let marksList = [35,78,90,42,60]
// let markspass = marksList.filter(r=> r=>40)
// console.log("markspass",marksList);

// // 10
// let dailySales = [1200,800,950]
// let totalDailySales = dailySales.reduce((sum, index)=>sum+index,0)
// console.log("totalDailySales",totalDailySales);




























let cardItems =[
    {name: "Shoes",price:2000},
    {name: "T-Shirt",price:800},
    {name: "Jeans",price:1500}

]
cardItems.push({name: "Cap",price:400})
console.log("cardItems",cardItems);

cardItems.pop()
console.log("RemoveCardItem",cardItems);

let finddata = cardItems.includes("Jeans")
console.log("finddata",finddata);


// finddata.indexOf("T-Shirt")
// console.log(finddata);

let cardItemsTotal = cardItems.filter(sum=>sum.price>=1500)
console.log(cardItemsTotal);

let totalAmount=cardItems.reduce((sum,index)=>sum+index.price,0)
console.log("TotalAmont",totalAmount);




// HIGHER ORDER ARRAY METHODS

let students =["Aman","Rohna","Neha"]

students.forEach(function(students){
    console.log(students);
    
})

let marks = [50,40,50]
let addMarks =marks.map(function(m){
    return m+5

})
console.log(addMarks);

let markss =[34,56,78,89,97]
let pass =markss.filter(function(d){
    return d>=50
})
console.log(pass);

// 1
let scores = [5,10,15,20]
let addthreevalue = scores.map((m)=>{
    return m*3
})
console.log(addthreevalue);

// 2
let marksList=[32,48,50,67,29,80]
let passMarks = marksList.filter((d)=>d>=40)
console.log(passMarks);


// 3
let cardPrices = [250,400,150,200]
let addTotalBils = cardPrices.reduce((sum,price) => sum+price,0)

console.log(addTotalBils);

// 4
let employeeName = ["rahul","Amit","Neha"]
employeeName.forEach((i)=>{
    console.log(i);
    
})
// 5
let cityName =["delhi","mumbal","pune"]

// 6
let ageList= [12,19,17,25,30,14]
// let ageFinde = ageList.filter((r)=>{
//     return r=>18
// })
let ageFinde=ageList.filter((c)=>c>=18)
console.log(ageFinde);

// 7 ,8,9,10
// Solve you 
cohort
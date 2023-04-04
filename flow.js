
// Arrays3
// Write a function that accepts an array of strings and console.logs each element using a for loop.

function acceptArrays(name){
    
    for (let i=0; i<name.length; i++){
        console.log(i);
        console.log(name[i]);
    }
}
let name=["Mercy","Ann","Mary","Sara"] 
acceptArrays(name);

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let num=[2,4,7,9,1,3]
num.forEach(numberArrays)
function numberArrays(num){
    console.log(num*2);
}

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function newValues(num1){
 for(let i=0;i<num1.length; i++){
    console.log({i});
if(i<=3){
   console.log(num1[i]*8);
}
else{
    console.log(num1[i]+5);
}                       
 }
}
let num1=[4,5,6,7,8,1,2,3,4 ]
newValues(num1);


// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function arryArea(arrNum){
    
   
   let i=0
   while(i ===3) {
    console.log(i);
    
    break;
    
   }
    
}
arryArea (arrNum)


// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits=['apple','plum','banana','strawberries','kiwi']

function fruitsString(fruits){

let i=0

console.log(fruits);
console.log(i);
for(let i=0;i<fruits.length; i++){
    
    if(i === 2){
        continue;
    }
    console.log({"continue":i});

    
}


}

fruitsString(fruits)
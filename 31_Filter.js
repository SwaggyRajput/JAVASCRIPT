//----------------------------FILTER------------------------------------

/*

const number=[13,8,16,2,24]

//Filter is a method of array  to loop the array fo filter queries from return statement
//Filter takes a callback function as argument
//Callback function takes currentValue,index and array as argument
//returns an array for every loop and return statement as filter query

const numArray=number.filter((num,index,array)=>{   //returns an array
   return num>10  //if not returned then automatic an array of undefined values each time is stored else return number greater than 10
})

console.log(numArray)

*/


/*
const users=[
    {name:"Harsh",age:18},
    {name:"Vikash",age:12},
    {name:"Ram",age:22},
    {name:"Neelabh",age:26}
]

//FilterQuery-->Find all user's name who can vote(A person with age more than or equal to 18 can vote)

const username=users.filter((user)=>user.age>=18).map((user)=>user.name)
console.log(username)

*/
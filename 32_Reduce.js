//----------------------------Reduce------------------------------------


/*
//Reduce is a method of array  to loop the array to reduce to one value
//Reduce takes a callback function as first argument and initial value of accumulator as second argument
//Callback function takes accumulator,currentValue,index and array as argument

const num=[1,2,3,4,5]
const reducedValue=num.reduce((accumulator,currentValue,index,array)=>{
     //  console.log(index,currentValue)
     accumulator+=currentValue
     return accumulator     ///returns sum of each element of array
},0)
console.log(reducedValue)

//Note-->When initial value of accumulator is not passed index starts from 1 else start from 0


*/
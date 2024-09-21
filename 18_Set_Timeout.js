// ---------------------------------SET-TIMEOUT IN NODEJS RUNTIME------------ 

/*

// setTimeout is an asynchronous code

setTimeout(`console.log(true)`)     //returns error as it expects callback as first argument
setTimeout(`Hii`)                  //returns error as it expects callback as first argument




const timer=setTimeout(()=>console.log('Harsh'),1000)     //returns an object {_idleTimeout,_ontTimeout()}
console.log(timer)  
  

*/




// ---------------------------------SET-TIMEOUT IN BROWSER RUNTIME------------ 

/*
//In browser it creates a file started with 'VM' name and run the first argument as string and treat as a js statements
setTimeout(`console.log(true)`)       //returns log statement true
setTimeout(`Hii`)                 //returns error as it expects 'Hii' as variable and it says  'Hii' is not defined   
//if const Hii='Harsh' then above statement returns 'Harsh'


//setTimeout expects callbackfunction as first argument and timeout as second argument and runs callback after timeout time in millisecond
const timer=setTimeout(()=>console.log('Harsh'),1000)   //returns timer id of last statement of timeout
console.log(timer)  


//Note--->
setTimeout(fun(),1000)  //if first argument is function call the its returned value will be run so only function name is to be passes to run function
setTimeout(fun,100,'Harsh',1)  //all arguments except callback and timeout will be stored in 'arguments array' and can be accessed in fun function
//All consoles except callbacks will run first then consoles of callbacks will run
*/


// ---------------------------------CLEAR-TIMEOUT IN BROWSER RUNTIME------------ 

/*
clearTimeout(4)  //where 4 as argument is id of setTimeout

*/



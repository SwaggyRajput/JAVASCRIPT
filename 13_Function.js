// ---------------------------------FUNCTION DEFINITION ------------

//Method--1--->
/*
        function add(a,b){
            return a+b
        }

        console.log(add(5,6))
*/

//Method--2--->
/*
        const product=function(a,b){
            return a*b
        }

        console.log(product(2,6))

*/

//Method--3---> Arrow Function


/*

            const add=(a,b)=>a+b    //Single line function need not to write return keyword
            console.log(add(5,6))

*/

/*
            const mul=(a,b)=>{     //Multiline function need to write return keyword
                let product=a*b;
                return product;
            }
                
*/

/*
    const obj=(name,age)=>{     //Function can return an object
    // return {name:name,age:age}
    return {name,age}
    }
    console.log(obj("harsh",18))

*/

/*

        const arr=()=>{         //Function can return an array
            return [1,2,4,5]
        }
        console.log((arr()))

*/

/*

        const fun=()=>{     //Function can return another function
            function sum(){
                return 6;
            }
            return sum;
        }

        console.log(fun()())

*/


// ---------------------------------NOTE ------------

/*
//Function can be called before defining as function definition is totally stored during memory execution phase

*/
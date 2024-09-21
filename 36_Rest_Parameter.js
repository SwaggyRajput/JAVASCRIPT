//----------------------------REST PARAMETERS-----------------------------------


//Rest parameters is passed same as spread operator but in function definition but it is array unlike Arguments Keyword

/*

    function add(...nums){    //Rest Operator collects all values
        let  reducedValue=nums.reduce((accumulator,currentValue)=>{
            accumulator+=currentValue
            return accumulator     ///returns sum of each element of array
    },0)
    return reducedValue

    }
    console.log(add(1,2,3,4,5)
    console.log(add(...nums))  //Spread Operator spread all values
    )

*/

/*
    function add(a,b,...nums){    //first to arguments will be stored in a and  b respectively and rest are in rest params
        let  reducedValue=nums.reduce((accumulator,currentValue)=>{
            accumulator+=currentValue
            return accumulator     ///returns sum of each element of array
    },0)
    return reducedValue

    }
    console.log(add(1,2,3,4,5)
    // console.log(add(...nums))  //Spread Operator spread all values
    )

*/

//----------------------------NOTES----------------------------------

/*
Note-->Rest params can be used as last parameter means it cannot be used after a parameter or in-between two parameters
Ex--> add(a,...params) or add(a,...params,b) will return error
*/
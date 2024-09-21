//-----------------------Data Types------------------

// There are two types of Data Type in Javascript


// Check data type by   //typeof(variable)

//--------------------------------------------------------------------------------------
//                                   PRIMITIVE DATA TYPE
//--------------------------------------------------------------------------------------

//-----------------------1-->Number------------------

/*
    console.log(typeof(8))
    console.log(typeof(NaN))  //retuns number
    console.log(parseInt('10abc')) //return 10
    console.log(parseInt('a10abc')) //return NaN
    console.log(typeof(10+''))  //return string and value is '10'
*/

//-----------------------2-->String------------------

/*
    console.log(typeof("Harsh"))
    console.log(typeof(+'60')) //Type is number if Operator before string is + and  - else shpws error //string '60' expects some number to add so JS automatically converts it into a number
    console.log(typeof(+'Harsh')) // returns  number data type and value is NaN
    console.log('30'+'40')     //returns 3040
*/

//-----------------------3-->boolean------------------

/*
    console.log(typeof(true))
*/

//-----------------------4-->undefined------------------

/*
    console.log(typeof(undefined))
*/

//----------------------5-->null-----------------

/*
    const val=null
    console.log(null)    //returns null
    console.log(typeof null)  //returns object
*/
//----------------------6-->bigint-----------------

//----------------------7-->Symbol-----------------



//--------------------------------------------------------------------------------------
//                                   NON PRIMITIVE DATA TYPE
//--------------------------------------------------------------------------------------



//----------------------OBJECT-----------------

/*
const obj={
    name:"harsh",
    age:18
}

console.log(obj)

*/


//----------------------NOTES-----------------

/*

        console.log('Harsh    //This will return error as quotes string doesnt support multiline
            Singh')

        console.log(`Harsh    //Backtick(``) is called template literals and supports multiline and return string as it is
        Singh`)

        `Harhs      //This returns 'Harhs\nSingh' in console in browser directly
        Singh`
            

*/
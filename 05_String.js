// ---------------------------------STRING---------------

// let msg="   Welcome Back Harsh     "
// console.log(msg)


// ---------------------------------ACCESS EACH INDEX VALUES--------------

/*
Can be accessed by using square bracket
console.log(msg[0],msg[1],msg[2])  //return W,e,l

*/

// ---------------------------------METHODS WITHOUT ARGUMENT--------------
/*
console.table([
    msg.length,             //returns length of string ---26
    msg.toLowerCase(),      //return string in lowercase --- '   welcome back harsh     '
    msg.toUpperCase(),      //returns string in uppercase
    msg.trim(),             //return string with removed empty space at both end from original string
    msg.trimStart(),        //return string with removed empty space at start from original string  
    msg.trimEnd(),          //return string with removed empty space at end from original string

])

*/


// ---------------------------------METHODS WITH ARGUMENT--------------

/*
let msg="Hi from Javascript"
console.table([
    msg.includes('fr'),                          //returns true if argument as substring present in original string else return false
    msg.indexOf('f'),                            //returns first index of argument as character else return -1
    msg.replace('Javascript','NodeJs'),          //replaces only first occurence first argument as string with second argument as string
    msg.replaceAll('Javascript','NodeJs'),       //replaces all occurence first argument as string with second argument as string
    msg.concat(" Language"),                     //concat argument as string to original string
    msg.padStart(20,'*'),                        //returns string with first argument as length of new string and second argument as string to be paaded at start
    msg.padEnd(20,'*'),                           //returns string with first argument as length of new string and second argument as string to be paaded at end
    msg.charAt(0),                                 //returns character at argument as index
    msg.charCodeAt('h'),                            //returns ASCII code of argument as character
    msg.split(' ')                                    //returns array of splitted string with argument as character
])

*/


// ---------------------------------TEMPLATE LITERALS--------------

/*

let language="Javascript"
let msg=`Hello from ${language}`
console.log(msg)

*/
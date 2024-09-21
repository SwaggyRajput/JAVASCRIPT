
// ---------------------------------ARRAY-------------

/*
            //Array is internally an object
            const arr=[1,"harsh",{name:'Harsh',age:15}]
            // console.log(arr[2].name)
            // console.log(typeof arr)     //Type of array is object


            arr[0] = 2    //Array created with const keyword can be can be updated
            // console.log(arr[0])
            arr[3]="Vikash"   //Added element to array
            // console.log(arr)

            //arr=[]    //Array created with const keyword cannot be reassigned
            // console.log(arr[5])   //Accessing array element out of bound returns undefined

            // arr[10]=6
            // console.log(arr)   //returns 4 element and <6 empty items> and 10 indexed element


*/

// ---------------------------------ARRAY METHODS-------------

/*

            console.table([
                arr.length,    //returns length of an array
                arr.push(5,6,3),     //push element to an array and returns the new length
                arr.pop(),  //pop the last element  and returns the popped element
                arr.shift(),  //Removes the first element from an array and returns it
                arr.unshift(8),  //Inserts new elements at the start of an array, and returns the new length of the array.
                arr.concat(['ram','neelabh']),   //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
                arr.indexOf(2),   //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
                arr.includes(2),   //Determines whether an array includes a certain element, returning true or false as appropriat
                arr.reverse(),   //Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
                arr.sort(),    //Sorts an array in place alphabetically by utf- code . This method mutates the array and returns a reference to the same array.
                arr.sort((a,b)=>a-b),  //sorts 
                arr.slice(1,4), //returns new array from index start to end-1
                arr.splice(2,1)  //retuns an array of deleted elements from array from start index as first argument and count of element to be deleted as second argument and pushes element to array as third argument

            ])

*/

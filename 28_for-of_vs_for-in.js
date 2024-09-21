
//----------------------------for-of-------------------------------------

/*

const fruits=['Apple','Banana','Grapes','Mango']


for(fruit of fruits){      //fruit is stored in global so fruits will not destroy after for-of
    console.log(fruit)
}

for(var fruit of fruits){     //fruit is stored in global so fruits will not destroy after for-of
    console.log(fruit)
}

for(const fruit of fruits){     //fruit is stored in block so fruits will destroy after for-of
    console.log(fruit)
}
//Note--> for of loop will iterate over each element in array and not over index
//Note--> use-strict mode can be used to not store fruit in global

*/


//----------------------------for-in-------------------------------------

/*

//Object is not iterable so we cannot use for-of but we can use for-in

const person={
    name:'Harsh SIngh',
    age:18,
    city:'Pune'
}

for(const key in person){
    console.log(key)    //return all keys
}


for(const key in person){
    console.log(person.key)    //return undefined as not key named as 'key' present

}


for(const key in person){
    console.log(`${key} --> ${person[key]}`)    //use person[key] not person.key to return all values
}

*/
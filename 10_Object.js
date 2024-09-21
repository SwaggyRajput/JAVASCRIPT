
// ---------------------------------OBJECT-------------

/*
//Object is a non-primitive data type and called refernce type because comparison is done by refernce not values
//An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
//Object is mutable, it can be changed after creation

*/

// ---------------------------------OBJECT CREATION-------------

/*
//Object can be created by two ways
//1.let user = {};  // "object literal" syntax
//2.let user = new Object(); // "object constructor" syntax

*/


// ---------------------------------OBJECT CREATION EXAMPLE -------------

/*
let admin=true
let weight="WeightCount"
const user={
    firstName:"Harsh",
    lastName:"Singh",
    fullName: function(){return this.firstName+" "+this.lastName},     //returns [Function: fullName]
    age:18,
    friends:["Ram","Vikash","Neelabh"],
    socialMediaFollowers:{
         "facebook" :465,
         "instagram":'505'
    },
    isAdmin:admin,
    'pin-code':275204,     //pin-code which is a multiword property should be in quotes and cannot be accessed by dot operator
    address: function(){
          return this.fullAddress.split(',')
    },
    name:undefined,   //property which is not assigned any value will have value as undefined
    [weight] : 12     // the name of the property is taken from the variable fruit
}

user.fullAddress='19,Raipur,Ghazipur' //can create a key-value pair in object from outside of object

const {firstName,lastName,fullName,age,friends,socialMediaFollowers,isAdmin,address} =user  //Destructure the user which returns an object
let [houseNumber,village,city] = user.address()    //Destructure the user.address() which returns an array


console.log(user.address())
console.log(houseNumber)  //returns 19

console.log(user)   
console.log(user.firstName,user['firstName'])   //Both user.firstName and user['firstName'] will return same
console.log(user['pin-code'])   //returns 275204
console.log(user.fullName())   //returns "Harsh Singh"
console.log(user.name)  //returns undefined as name is not a key 





const user2={
    firstName:"Harsh",
    lastName:"Singh",
    fullName: function(){return this.firstName+" "+this.lastName},     //returns [Function: fullName]
    age:18,
    friends:["Ram","Vikash","Neelabh"],
    socialMediaFollowers:{
         "facebook" :465,
         "instagram":'505'
    },
    isAdmin:admin,
    'pin-code':275204,     //pin-code should be in quotes and cannot be accessed by dot operator
    address: function(){
          return this.fullAddress.split(',')
    },
     name:undefined,   //property which is not assigned any value will have value as undefined
    [weight] : 12     // the name of the property is taken from the variable fruit
}
    
}

console.log(user==user2)   //return false
console.log(user===user2)   //return false

// user and user2 has different adress so they are not equal


*/


// ---------------------------------ADD PROPERTIES TO OBJECT-------------

//user.key=value

// ---------------------------------REMOVE PROPERTIES TO OBJECT-------------

//delete user.key

// ---------------------------------OBJECT CONSTRUCTOR-------------

/*

// When the Object() constructor itself is called or constructed, its return value is an object:
// If the value is null or undefined, it creates and returns an empty object.
// If the value is an object already, it returns the value.
// Otherwise, it returns an object of a type that corresponds to the given value. For example, passing a BigInt primitive returns a BigInt wrapper object.
let obj=new Object({
    name:"Harsh",
    age:16
})

// console.log(obj)



let obj1=new Object(null)       //return empty object
let obj2=new Object(undefined)  //return empty object
let obj3=new Object()            //return empty object
console.log(obj1)  //retuns empty object
obj1.name="Vikash"
console.log(obj1)


*/


// ---------------------------------OBJECT METHODS-------------

/*
            let obj=new Object({
                name:"Harsh",
                age:16
            })
            console.table([
                Object.keys(obj),  //return keys of object 'obj'
                Object.values(obj), //return values of object 'obj'
                Object.entries(obj), //returns array of array containing each properties of object
                obj.hasOwnProperty('name'), //return true if object has 'name' property, false otherwise
                Object.freeze(obj),      //Makes object 'obj' immutable and cannot be changed anything
                Object.seal(obj),       //Makes object 'obj' immutable and prevents adding or deleting properties
                Object.isExtensible(obj),  //The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).
                Object.preventExtensions(obj),   //Prevents extension of object
                Object.isFrozen(obj),     //Checks if object 'obj' is frozen, i.e., it is immutable
                Object.isSealed(obj), //check if object is sealed or not
                Object.getOwnPropertyNames(obj),
                'name' in obj    //returns true if 'name' is present as a key else return false
            ])

*/

/*
Object.defineProperties(obj,{
    class: {
        value:10,
        configurable:false,//true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.
        writable: false,    //        true if and only if the value associated with the property may be changed with an assignment operator. Defaults to false.
        enumerable: true,  //true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.
     },
        isAdmin: {
        value:true,
        writable: false,
         enumerable: true
        }
})
console.log(obj)

*/

/*
        const inventory = [
            { name: "asparagus", type: "vegetables", quantity: 5 },
            { name: "bananas", type: "fruit", quantity: 0 },
            { name: "goat", type: "meat", quantity: 23 },
            { name: "cherries", type: "fruit", quantity: 5 },
            { name: "fish", type: "meat", quantity: 22 },
        ];
        const result = Object.groupBy(inventory, ({ type }) => type);
        console.log(result)

*/



// ---------------------------------NOTE-------------

/*
            Instead of writing an object like-->
                {
                    name:name,
                    age:age
                }
            We can write  as -->
                {
                    name,
                    age
                }
            This is called "property shorthand" and it is more concise and readable.

*/

// ---------------------------------NOTE-------------

/*
            As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

            But for an object property, there’s no such restriction:
                let obj = {
                                for: 1,
                                let: 2,
                                return: 3
                         };
*/


// ---------------------------------NOTE-------------------

/*
            
           //Object.freeze() method freezes an object. Any attempt to change its properties, add new properties, or delete existing properties will result in a TypeError.

            const object1={       //object create with const keyword cannot be redeclared
                name:"Harsh",
                age:18
            }

            object1.name="Vikash"       //object1 is declared with const still it is mutable
            console.log(object1.name) 

            Object.freeze(object1)     //Object.freeze(object_name) freezes object means it makes object immutable
            object1.age=16
            console.log(object1.age,object1.name)  


*/























// ---------------------------------COPY STRING------------ 

const str="Harsh"
let copystr=str
console.log(copystr==str)   //str and copystr have initially same address and pointing to same memory location
copystr=str+" Singh"        //str and copystr now have different address
console.log(copystr)



// ---------------------------------COPY OBJECT ------------
/*
                const obj={
                    firstname:"Harsh",
                    age:18
                }

                const obj2=obj     //Reference of obj assigned  to obj2 and both object point to same memory location
                console.log(obj,obj2)    //Both object returns same
                console.log(obj==obj2)   //return true

                obj2.lastname="Singh"  //Obj2 is modified but obj will also be modified similarly because they point to same memory location
                console.log(obj,obj2)   //Both object returns same
                console.log(obj==obj2)   //return true

                //Note-->Both object has same address

*/

// ---------------------------------METHODS TO AVOID COPY OF OBJECT------------

                /*
                obj={}
                Object.assign(obj2,obj)    //obj object assigned to obj2 and new object 'obj2' is created with different address

                obj2={...obj}       //Using spread operator


*/


// ---------------------------------SHALLOW COPY------------

/*
        //A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 
        //Spread and assign or Array.from() makes shallow copy as nested objects or array are pointed by both objects
        const obj={
            name:"Harsh",
            address:{
                    village:"raipur",
                    city:"ghazipur"
            },
            subject:['maths','physics']
        }

        const obj2={...obj}
        console.log(obj,obj2)   //Both return same
        obj2.address.village='bahariyabad'
        obj2.name="VIkku"
        console.log(obj.name)      //returns 'Harsh'
        console.log(obj.address.village)    //returns "bahariyabad"
        obj2.subject.push("biology")
        console.log(obj.subject)  //returns [ 'maths', 'physics', 'biology' ]

*/


// ---------------------------------DEEP COPY------------

/*
        //A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too
        //Because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.
        const obj={
            name:"Harsh",
            address:{
                    village:"raipur",
                    city:"ghazipur"
            },
            subject:['maths','physics']
        }

        const obj2=JSON.parse(JSON.stringify(obj))
        obj2.address.village='bahariyabad'
        console.log(obj.address.village)    //returns "raipur"
        obj2.subject.push("biology")
        console.log(obj.subject)  //returns [ 'maths', 'physics']

*/

// ---------------------------------NOTE------------

/*
            Object and array works similarly as array is also an object

*/
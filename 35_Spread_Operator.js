
//----------------------------JOIN TWO ARRAY-----------------------------------

/*

    const nums1=[1,2,3,4]
    const nums2=[5,6,7,8]
    const joinNums1AndNums2=[...nums1,...nums2]
    console.log(joinNums1AndNums2)

*/


//----------------------------JOIN TWO OBJECT----------------------------------

/*
    const user1={
        name:"John",
        age:25
    }
    const user2={
    class:10,
    city:"New York"
    }

    const mergedUser={...user1,...user2}
    console.log(mergedUser)

*/

//----------------------------ADD A KEY VALUE PAIR TO OBJECT-----------------------------------

/*
    let user={
        name:"John",
        age:25
    }
    user={...user,city:"Bangalore"}
    console.log(user)

*/

//----------------------------ADD OBJECT IN AN ARRAY----------------------------------

/*
    let users=[{
        name:"John",
        age:25
    },
    {
        name:"Vishal",
        age:27
    }
    ]
    const user2={
    name:"Rohan",
    age:22
    }

    users=[...users,user2]
    console.log(users)

*/


//----------------------------SPREAD OPERATOR IN FUNCTION CALL TO PASS ARGUMENTS FROM ARRAY----------------------------------

/*

const num=[1,2,3,4,5]
function add(){
    let sum=0
  for(let i=0;i<arguments.length;i++){
    sum+=arguments[i]
  }
  return sum
}
const sum=add(...num)
console.log(sum)

*/

//Note-->Spread Operator can be used for arrays and strings

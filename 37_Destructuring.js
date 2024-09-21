//----------------------------DESTRUCTURING ARRAY-----------------------------------

/*

    const user=['Harsh',18,"Bangalore"]
    const [name,age,city] = user
    console.log(name,age,city)

*/

/*

    const city=['Bengaluru','Delhi',"Gurugram",'Lucknow','Kanpur']
    use comma to skip array elements
    const [,,city3,,city4] =city   //Two comma to skip first two elements
    const {1:capitalCity} =city  //Make city indexed at 1 named as capitalCity 
    console.log(capitalCity)
    console.log(city3,city4)  //returns Gurugram and Kanpur

*/

//----------------------------DESTRUCTURING OBJECT-----------------------------------

/*
    const user={
        name:"Harsh",
        age:22,
        address:{
            city:'Bangalore',
            state:{
                statename:"Karnataka",
                statelanguage:'Kannada'
            }
        }
    }

    // const {address:{city,state}} =user
    const {name:username,age,address:{city,state:{statename,statelanguage}}} = user
    console.log(username,age,city,statename,statelanguage)  //Now name is created as username variable

*/
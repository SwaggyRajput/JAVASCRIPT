
//---------------------------------Variables---------------
// A Variable is a name of memory location which can store data
// We can create variable using three keywords



// ---------------------------------LET KEYWORD---------------

/*
        Varibales created by let is mutable
        let userName="Harsh Singh"    
        let age=18
        let isAdmin=true
        let num=undefined
        let null_val=null
        console.table([userName,age,isAdmin,num,null_val])

        let userIntro="I am "+userName    //userIntro memory location is created and copies data from userName
        console.log(userIntro)
        let a     //Only Declared variable value is undefined and type is undefined

        function fun(){
            console.log(age)
            age=16
            console.log(age)  //returns 16
        }
        fun()
        console.log(age)   //returns 16

*/


// ---------------------------------CONST KEYWORD---------------

/*
        Varibales created by const  is immutable
        const myName="Harsh Singh"
        myName='Vikash'    //Error

*/


// ---------------------------------VAR KEYWORD---------------
/*
        var myAge=20
        function fun(){
            console.log(myAge)
            myAge=16
            console.log(myAge)  //returns 16
        }
        fun()
        console.log(myAge)   //returns 16

*/


// ---------------------------------NOTES---------------


// Note--->Difference between let and var keywords

/*
                variables with var keyword can be accessed before initialisation
                variables with let keyword cannot be accessed before initialisation

                console.log(check_var)       //returns undefined
                console.log(check_let)       //retuns error "access before initialisation"
                let check_let
                var check_var=10

*/


// Note--->Naming Conventions
                // 1.CamelCase----   userName
                // 2.PascalCase---   UserName
                // 3.KebabeCase---    user-name


//Note-->Temporal DeadZone
// Period Of Time during which the let and const declarations cannot be accessed

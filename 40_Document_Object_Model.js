// function DocumentObjectModel(){
//     let x=document
//     // console.dir(document)
//     // console.table([
//     //    // x.location //same as location in BOM
//     //   x.all
//     // ])


//     console.log(document.children)
// }


// console.log(document.children)        //returns an array of HTMLCollection type 
// console.log(typeof(document.children)) //Type is object
// let child=document.children[0]   //returns HTML Code
// console.log(child)
// let htmlCHild=document.children[0].children  //returns children head and body in an array like structure
// console.log(htmlCHild)
// let body=document.children[0].children[1]   //can also use document.body
// console.log(body)

// let bodyChild=document.body.children
// console.log(bodyChild)
// let h1tag=bodyChild[0]
// console.log(h1tag)
// h1tag.innerHTML='<h1>Edited Document Object Model</h1>'  //InnerHTML can insert html tags
// h1tag.innerText='<h1>hh</h1>'  //insert as a string but not tags


let bodyChild=document.body.children
let atag=bodyChild[2]
console.log(atag)
atag.href=''

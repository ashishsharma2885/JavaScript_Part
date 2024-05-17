// scope start hi hoti hai 3 cizo set let, var, const 


let a = 300   // This is golobal scope 
if (true) {   // This is block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a)
}

 console.log(a)
// console.log(b)
// console.log(c)
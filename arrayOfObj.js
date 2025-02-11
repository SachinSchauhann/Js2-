let emp =[

    {name:"sachin", age:23, contect:123, id:101},
    {name:"rohit", age:22, contect:153, id:102},
    {name:"anjesh", age:25, contect:523, id:103}
]
console.log(emp);

let newob ={name:"kumar", age:23, contect:123, id:104}
//emp.push(newob)
emp.splice(1,0,newob)
//emp.pop(newob)



//emp.shift()


// console.log(emp);

// emp.unshift("manish")
// console.log(emp);

// ar.shift()
// console.log(emp);
    
//arrow  functiion  use for reduce line of code


// ()=>{return}

// ()=>()

// ()=>

// =>()

    // let fun =() => {return alert("heloo inside in function")}
    // fun();

    let add =(a,b) =>{return a+b}
    console.log(add(45,55));
    let sub =(a,b) =>{return a-b}
    console.log(sub(45,55));
    let mul =(a,b) =>{return a*b}
    console.log(mul(45,55));
    let div =(a,b) =>{return a/b}
    console.log(div(45/14));
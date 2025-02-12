// fetch(URL,{methode})

// => methode -> get , post , delete ,put/patch 
// Http method/request 
// Promise 
// -Reject -Pending -Fullfill 
// -- asyn,  await 
//map data fetch in array  

// async function Demo(){
//     let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")
//     let fdata = await apidata.json()
//     let api  = document.querySelector('#apidata')
//     let dt = fdata.map((e)=>{return e.name + e.id + e.email})
//     api.innerHTML=dt
//    // console.log(fdata)
// }
// Demo()


async function datafeching() {
    let data = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let resdata =await data.json()
    let fdata = resdata.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.title}</td>
    <td>${e.body}</td>
   
    </tr>`
).join("")
document.querySelector('#showdata').innerHTML=fdata
}
datafeching()



async function datafeching() {
    let data = await fetch ('http://localhost:3000/student')
    let resdata =await data.json()
    let fdata = resdata.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contect}</td>
     <td>${e.city}</td>
     <td><button onclick="mydel('${e.id}')">Delete</button></td>
    </tr>`
).join("")
document.querySelector('#showdata').innerHTML=fdata
}
datafeching()

function mydel(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })
    .then(r=>alert("Delete Successfully.....!!!!"))
}



function insertdata(){
    let frmdata = {
        name: document.querySelector('#name').Value,
        age: document.querySelector('#age').Value,
        contect: document.querySelector('#contect').Value,
        city: document.querySelector('#city').Value,
    }
    fetch('http://localhost:3000/student',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert("Data inserted"))
}

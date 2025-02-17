
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
     <td><button onclick="myedit(${e.id})">Edit</button></td>
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
        name: document.querySelector('#name').value,
        age: document.querySelector('#age').value,
        contect: document.querySelector('#contect').value,
        city: document.querySelector('#city').value,
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


async function myedit(id){
let edata=await fetch(`http://localhost:3000/student/${id}`)
let fdata = await edata.json()
let frm =`
<input type="text" value="${fdata.name}" id="name1"><br><br>
<input type="text" value="${fdata.age}" id="age1"><br><br>
<input type="text" value="${fdata.contect}" id="contect"><br><br>
<input type="text" value="${fdata.city}" id="city1"><br><br>
<input type="submit" onclick="finalupdate('${fdata.id}')">
`
document.querySelector('#showfrm').innerHTML=frm
}
    
function finalupdate(id){
    let final = {
        id:document.querySelector('#id1').value,
        name:document.querySelector('#name1').value,
        contect:document.querySelector('#contect1').value,
        age:document.querySelector('#age1').value,
        city:document.querySelector('#city1').value,
    }
    fetch(`http://localhost:3000/student/${id}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(final)
    })
    .then(r=>alert("update successfull"))
}


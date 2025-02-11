const multi = () =>{
    let userdata ={
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value,
    }
    localStorage.setItem("userdata", JSON.stringify(userdata))
}
// retrive same formate
let data =JSON.parse(localStorage.getItem('userdata'))
console.log(data); 

function loginform(){
    let logindata = {
        loginemail: document.querySelector('#loginemail').value,
        loginpassword :document.querySelector('#loginpassword').value,

    }
    if(data.email != logindata.loginemail || data.password != logindata.loginpassword){
        alert("user data not found")
        return false
        
    }
}
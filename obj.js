let person_student={
    Name : "Sachin Singh",
    Father_Name: "SB Chauhan",
    Village: "Ahirauli",
    Pin:272150,
    acount_stt:{
        Ac_No: 161200,
             Ac_Bale: 454,

    },

    personal_details:{
        dob: "12-jan-2010"
    },

    documents:[2822719,"CKKPP860h"],
    fun:function(name){
        alert("inside object "+name)
    }
}

console.log(person_student.Name);
console.log(person_student.documents[1]);
person_student.fun("Sachin");


//==============================================


// let shop={
//     name: "Rahul Kirana ",
//     city: "Basti",
//     pin: 272150,

//     fun:function(){
//         console.log(this.city);
//         // **this refer same object data 

//     }
// }

// shop.fun()


//=========================================================================================

// let ob = {
//     name:"sachin ", age:23, contact:74528541

// }
// for (let ky in ob){
//  //   console.log(ky);

//  // we can print key and value both in terminal 
//     console.log(ob[ky]);
// }
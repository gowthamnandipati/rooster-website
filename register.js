document.getElementById("submit").addEventListener("click",function(){

    let userName = document.getElementById("username").value
    let Number = document.getElementById("number").value
    let Password = document.getElementById("password").value

    if (userName && Number && Password){ 

         let users = JSON.parse(localStorage.getItem("users")) || [];

        let userexists = users.some(user => user.name === username)
        
        if (userexists){
            alert("user already exists ! ")
        }else{
            let userdetails ={name:userName,number:Number,password:Password,role:null,isadminapproved:false}
            users.push(userdetails)
            localStorage.setItem("users",JSON.stringify(users))
            alert("user registration is sucessful")
            window.location.href="index.html"
        }
    
    }else{
        alert("enter credentials!")
    }
    
})
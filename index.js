
document.getElementById("submit").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
      
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.name === username && user.password === password);

        if (user) {
            window.location.href = "home.html";
        } else {
            alert("Username or password is incorrect!");
        }
        
    } else {
        alert("Enter all the credentials!");
    }
});




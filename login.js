const storedUser = sessionStorage.getItem('loged_user');  
if (storedUser) {
    window.location.href = "home.html";
}
document.getElementById("submit").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
      
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.name === username && user.password === password);

        if (user) {
            //session store
            sessionStorage.setItem('loged_user', JSON.stringify(user));

            // Getting session data
            // const value = sessionStorage.getItem('key');
            window.location.href = "super_admin/super_admin.html";
        } else {
            alert("Username or password is incorrect!");
        }
        
    } else {
        alert("Enter all the credentials!");
    }
});




document.getElementById("button").addEventListener("click",function(){
    sessionStorage.removeItem('loged_user');
    window.location.href="index.html"
})
const storedUser = sessionStorage.getItem('loged_user');
if (!storedUser) {
    window.location.href = "login.html";
}

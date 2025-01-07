document.getElementById("submit").addEventListener("click",function(){
    sessionStorage.removeItem('loged_user');
    window.location.href="../login.html"
})
//  sessionStorage.removeItem('loged_user');
const storedUser = sessionStorage.getItem('loged_user');
if (!storedUser) {
    window.location.href = "../login.html";
}



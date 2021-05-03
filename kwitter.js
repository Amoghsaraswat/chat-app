function adduser() {
 username=document.getElementById("am").value ;
    localStorage.setItem("username",username);
    window.location="kr.html";
}
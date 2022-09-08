var wrong= document.querySelector(".danger");
var myBtn= document.querySelector(".mybtn");
myBtn.addEventListener("click", function(){
   var userName= document.querySelector("#name").value;
var passWord= document.querySelector(".pass").value; 
    if(userName =="rifat" && passWord =="jayed"){
        document.querySelector(".none").style.display= "block";
        document.querySelector(".welcm").style.display= "none";
        // document.querySelector(".login-area").style.display= "none";
    }
    else{
    wrong.innerHTML= "Your Information Is Wrong";
    wrong.style.color= "red";
    }
});
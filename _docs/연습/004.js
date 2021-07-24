const btns = document.querySelector(".btns");

btns.addEventListener("click",function(e){
    alert(e.target.name);
})
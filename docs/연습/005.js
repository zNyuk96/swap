const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const pwc= document.querySelector(".pwc");
const pwm= document.querySelector(".pwm");
const submit = document.querySelector(".submit");
const agree= document.querySelector(".agree");

submit.addEventListener("click",function(e){
    if(!id.value){
        alert("ID 를 입력해주세요");
    }
    else if(!pw.value){
        alert("PW 를 입력해주세요");
    }
    else if(pw.value!==pwc.value){
        alert("비밀번호가 서로 다릅니다");
    }
    else if(!agree.checked){
        alert("개인정보 수집에 동의해주세요");
    }
    else{
        alert("회원가입에 성공하였습니다.");
    }

})
pwc.addEventListener("keyup",function(e){
    if(pw.value===pwc.value){
        pwm.innerHTML = "비밀번호가 일치합니다!"
    }
    else{
        pwm.innerHTML = "비밀번호가 서로 다릅니다"
    }
})
const id=document.getElementById("id");
const pw=document.getElementById("pw");
const username=document.getElementById("username");
const phone=document.getElementById("phone");

function SignUp(){
    if(localStorage.getItem(id.value)!=null){
        alert("이미 존재하는 아이디 입니다");
        return;
    }

    if(id.value==""){
        alert("아이디를 입력해주세요");
        return;
    }
    else if(pw.value==""){
        alert("비밀번호를 입력해주세요")
        return;
    }
    else if(username.value==""){
        alert("이름을 입력해주세요")
        return;
    }
    else if(phone==""){
        alert("전화번호를 입력해주세요");
        return;
    }

    


    localStorage.setItem(id.value,pw.value);
    localStorage.setItem(id.value+"_name",username.value)
    localStorage.setItem(id.value+"_phone",phone.value);
    localStorage.setItem(phone.value,id.value);
    alert("회원가입 완료");
    location="index.html";
}
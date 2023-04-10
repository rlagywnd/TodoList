

const id_=document.getElementById("id");
const pw_=document.getElementById("pw");


function Login(){
    if(localStorage.getItem(id_.value)!=null){
        if(pw_.value==localStorage.getItem(id_.value)){
            alert("로그인 완료")
            localStorage.setItem("userId",id_.value)
            location="todoList.html"
            
        }
        else{
            alert("계정없음");
        }
    }
    else{
        alert("계정없음");
    }
}

 

function SignUp(){
    location="signup.html"
}
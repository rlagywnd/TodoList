const phone=document.getElementById("phone");


function FindAccount(){
    if(localStorage.getItem(phone.value)==null){
        alert("계정이 존재하지 않습니다");
        return;
    }
    
    alert(
        `id:${localStorage.getItem(phone.value)}\npw:${localStorage.getItem(localStorage.getItem(phone.value))}\n입니다`
    )
}
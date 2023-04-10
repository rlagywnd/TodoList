 



const input=document.getElementById("todo")
const toDoList = document.querySelector('#toDoList')
const userId=localStorage.getItem("userId");
let TodoList={
    item:[],
    checkBox:[]
     
}
 

 


Load();



function Save(){
    TodoList.item=[];
    TodoList.checkBox=[];
    const item=document.querySelectorAll("span")
    const checkBox=document.getElementsByName("checkBox")
    
     

    for(let i=0;i<item.length;i++){
        TodoList.item.push(item[i].textContent);
        TodoList.checkBox.push(checkBox[i].checked);
    }
    
    localStorage.setItem(userId+"_json",JSON.stringify(TodoList));
}

function Load(){
    if(localStorage.getItem(userId+"_json")!=null){
        TodoList=JSON.parse(localStorage.getItem(userId+"_json"));
    
        for(let i=0;i<TodoList.item.length;i++){
            CreateItem(TodoList.item[i],TodoList.checkBox[i]);
        }
    }
     
}

function Add(){

    if(input.value!=""){
        CreateItem(input.value,false);
    }
    
    
}

function CreateItem(text_,checked_){



    const item = document.createElement('div') // div
        item.id="todolistItem";
        const checkBox = document.createElement('input') 

         

        checkBox.setAttribute('type','checkbox')
         

        checkBox.id="checkBox";
        checkBox.name="checkBox";
        checkBox.checked=checked_;
        const text = document.createElement('span') // 내용
        text.textContent = " "+text_+" ";
        text.id="Text";
        text.name="Text";
        const removeButton = document.createElement('button') // 삭제
        removeButton.textContent = '삭제'
    
        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
        });
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)
        document.body.appendChild(item);
        item.align='center';
        input.value="";
         
         
}
window.addEventListener('beforeunload', function(event) {
    this.alert("ekegla")
  });
function Del(){
    const check=document.getElementsByName('checkBox');
    
     
    for(let i=0;i<check.length;i++){
        console.log(`${i}번:${check[i].checked}`);
        if(check[i].checked){
            check[i].parentElement.remove();
            i--;
            
        }
    }
}
function enterkey() {
	if (window.event.keyCode == 13) {
    	if(input.value!=""){
            CreateItem(input.value,false);
        }
    }
}
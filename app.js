let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let btnbox=document.createElement("div");

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    let editbtn=document.createElement("button");
    editbtn.innerText="Edit";
    editbtn.classList.add("edit");

    let donebtn=document.createElement("button");
    donebtn.innerText="Done";
    donebtn.classList.add("done");

    btnbox.appendChild(delbtn);
    btnbox.appendChild(editbtn);
    btnbox.appendChild(donebtn);

    item.appendChild(btnbox);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.classList.contains("done")){
        let listitem=event.target.parentElement.parentElement;
        listitem.style.textDecoration="line-through";
        let btnbox=event.target.parentElement;
        btnbox.remove();
    }

    if(event.target.classList.contains("delete")){
        let listitem=event.target.parentElement.parentElement;
        listitem.remove();
    }

    if(event.target.classList.contains("edit")){
        let listitem=event.target.parentElement.parentElement;
        let newTask=prompt("Edit task: ");
        if(newTask){
            listitem.firstChild.nodeValue=newTask;
        }
    }
});
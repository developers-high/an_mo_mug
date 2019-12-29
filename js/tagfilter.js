const table = document.querySelector(".filterTable"),
  input = check1.querySelector("input"),
  box = check1.querySelector(".js-box1");

function handleSubmit(){
  if(this.querySelector("input").checked){
    box.style.display = "";
  } else {
    box.style.display = "none";  
  }
}

function init(){
  table.addEventListener("click",handleSubmit);
}

init();
const inputFoodNameAll = table.querySelector(`th input[name=foodNameall]`),
  foodNames = table.querySelectorAll(`th input[name=foodName]`);

function handleCheckAll() {
  for (i = 0; i < foodNames.length; i++) {
    foodNames[i].checked = !this.checked;
    foodNames[i].click();
  }
}
function handleCheck() {
  if (this.checked == false && inputFoodNameAll.checked == true) {
    inputFoodNameAll.checked = false;
  }
}

function init() {
  inputFoodNameAll.addEventListener("click", handleCheckAll);
  for (i = 0; i < foodNames.length; i++) {
    foodNames[i].addEventListener("click", handleCheck);
  }
}

init();
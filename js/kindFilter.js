const inputKindAll = table.querySelector(`th input[name=kindall]`),
  kinds = table.querySelectorAll(`th input[name=kind`);

function handleCheckAll() {
  for (i = 0; i < kinds.length; i++) {
    kinds[i].checked = !this.checked;
    kinds[i].click();
  }
}
function handleCheck() {
  if (this.checked == false && inputKindAll.checked == true) {
    inputKindAll.checked = false;
  }
}

function init() {
  inputKindAll.addEventListener("click", handleCheckAll);
  for (i = 0; i < kinds.length; i++) {
    kinds[i].addEventListener("click", handleCheck);
  }
}

init();
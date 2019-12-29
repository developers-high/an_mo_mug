const inputServiceAll = table.querySelector(`th input[name=serviceall]`),
  services = table.querySelectorAll(`th input[name=service`);

function handleCheckAll() {
  for (i = 0; i < services.length; i++) {
    services[i].checked = !this.checked;
    services[i].click();
  }
}
function handleCheck() {
  if (this.checked == false && inputServiceAll.checked == true) {
    inputServiceAll.checked = false;
  }
}

function init() {
  inputServiceAll.addEventListener("click", handleCheckAll);
  for (i = 0; i < services.length; i++) {
    services[i].addEventListener("click", handleCheck);
  }
}

init();
const table = document.querySelector("table.filterTable"),
  inputPlaceAll = table.querySelector(`th input[name=placeall]`),
  places = table.querySelectorAll(`th input[name=place`);

function handleCheckAll() {
  for (i = 0; i < places.length; i++) {
    places[i].checked = !this.checked;
    places[i].click();
  }
}
function handleCheck() {
  if (this.checked == false && inputPlaceAll.checked == true) {
    inputPlaceAll.checked = false;
  }
}

function init() {
  inputPlaceAll.addEventListener("click", handleCheckAll);
  for (i = 0; i < places.length; i++) {
    places[i].addEventListener("click", handleCheck);
  }
}

init();
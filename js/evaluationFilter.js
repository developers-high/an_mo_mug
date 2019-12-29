const inputEvaluationAll = table.querySelector(`th input[name=evaluationall]`),
  evaluations = table.querySelectorAll(`th input[name=evaluation`);

function handleCheckAll() {
  for (i = 0; i < evaluations.length; i++) {
    evaluations[i].checked = !this.checked;
    evaluations[i].click();
  }
}
function handleCheck() {
  if (this.checked == false && inputEvaluationAll.checked == true) {
    inputEvaluationAll.checked = false;
  }
}

function init() {
  inputEvaluationAll.addEventListener("click", handleCheckAll);
  for (i = 0; i < evaluations.length; i++) {
    evaluations[i].addEventListener("click", handleCheck);
  }
}

init();
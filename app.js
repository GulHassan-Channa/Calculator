var inpField = document.getElementById("calcField")
function calculate(val) {
  inpField.value += val
}
function finalans(){
  inpField.value = eval(inpField.value)
}
function clearField(){
  inpField.value = " ";
}
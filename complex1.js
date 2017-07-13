function addTwoNumb() {
  var firstNum = 0;
  var secondNum = 1;
  var result;
  for (i = 0; i < 21; i++){
    console.log(result);
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }
}

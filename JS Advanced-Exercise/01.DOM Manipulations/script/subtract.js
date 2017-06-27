function subtract() {
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = Number(numberOne) - Number(numberTwo);
}

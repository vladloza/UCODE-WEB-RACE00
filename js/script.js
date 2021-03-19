const expressionText = document.getElementById('history');
const resultText = document.getElementById('result');
function input(str) {
    if(str === '') {
        expressionText.value = '0.0';
        resultText.value = '0.0';
    }
    else expressionText.value += str;
}
function countResult() {
    if(eval(expressionText.value) == undefined) expressionText.value = '0.00';
    resultText.value = eval(expressionText.value);
    expressionText.value = eval(expressionText.value);
}
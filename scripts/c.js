// Celcius to fahrenheit seperate script
// reset button does not work

"use strick";
window.onload = init

function init(){
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertCelciustoFarhrenheitBtnClicked;
    const resetBtn = document.getElementById(resetBtn)
    resetBtn.onclick = onResetBtnclicked;
}


function onConvertCelciustoFarhrenheitBtnClicked(){
    const celField = document.getElementById("celField");
    const answerC = document.getElementById("answerField");
    const answer = ((Number(celField.value)*(9/5)) + 32)
    answerC.value= answer;
}
function onResetBtnclicked(){
    document.getElementById("form").reset();
}
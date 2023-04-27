"use strick";
window.onload = init

function init(){
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertCelciustoFarhrenheitBtnClicked;
}


function onConvertCelciustoFarhrenheitBtnClicked(){
    const celField = document.getElementById("celField");
    const answerC = document.getElementById("answerField");
    const answer = ((Number(celField.value)*(9/5)) + 32)
    answerC.value= answer;
}
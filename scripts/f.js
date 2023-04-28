// Fahrenheit to celcius seperate scripts
// reset button does not work

"use strick";

window.onload = init

function init(){
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertFarhrenheittoCelciusBtnClicked;
    const resetBtn = document.getElementById(resetBtn)
    resetBtn.onclick = onResetBtnclicked;
}


function onConvertFarhrenheittoCelciusBtnClicked(){
    const fahrField = document.getElementById("fahrField");
    const answerC = document.getElementById("answerField");
    const answer = ((Number(fahrField.value) - 32) * (5/9));
    answerC.value= answer;
}

function onResetBtnclicked(){
    document.getElementById("form").reset()
}
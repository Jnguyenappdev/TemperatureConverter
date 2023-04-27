"use strick";

window.onload = init

function init(){
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertFarhrenheittoCelciusBtnClicked;
}


function onConvertFarhrenheittoCelciusBtnClicked(){
    const fahrField = document.getElementById("fahrField");
    const answerC = document.getElementById("answerField");
    const answer = ((Number(fahrField.value) - 32) * (5/9));
    answerC.value= answer;
}

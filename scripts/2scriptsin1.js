// This script is a displaying combining two scripts into one
// does not work
// use as refrence 

'use strict';

window.onload = init;

function init(){
    const convertBtnFEl = document.getElementById(convertBtnF);
    if ( convertBtnFEl != null){
        convertBtnFEl.onclick = 
        onConvertFarhrenheittoCelciusBtnClicked;
    }
    const convertBtnCEl = document.getElementById(convertBtnC);
    if (convertBtnCEl != null){
        convertBtnCEl.onclick = onConvertCelciustoFarhrenheitBtnClicked;
    }
}

function onConvertFarhrenheittoCelciusBtnClicked(){
    const fahrFieldEl = document.getElementById("fahrField");
    const answer = ((Number(fahrFieldEl.value) - 32) * (5/9));
    const answerEl = document.getElementById("answerField");
    answerEl.value= answer;
}

function onConvertCelciustoFarhrenheitBtnClicked(){
    const celFieldEl = document.getElementById("celField");
    const answer = ((Number(celFieldEl.value)*(9/5)) + 32);
    const answerEl = document.getElementById("answerField");
    answerEl.value= answer;
}
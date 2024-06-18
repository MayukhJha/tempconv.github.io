window.alert(`This TEMPERATURE CONVERSION PROGRAM is made by MAYUKH JHA`);

const textbox=document.getElementById("textbox");
const tofarhenhiet=document.getElementById("tofarhenhiet");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;let tempresult

function convert(){
    if(tofarhenhiet.checked){
        temp=Number(textbox.value);
        tempresult=(temp*(9/5))+32;
        result.textContent=`${temp}°C = ${tempresult.toFixed(1)}°F`
    }
    else if(tocelsius.checked){
        temp=Number(textbox.value);
        tempresult=(temp-32)*(5/9);
        result.textContent=`${temp}°F = ${tempresult.toFixed(1)}°C`
    }
    else{
        result.textContent=`SELECT THE UNIT 
        BEFORE SUBMITING`
    }

}

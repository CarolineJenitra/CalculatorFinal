let display=document.getElementById("display");

function clearDisplay(){
    display.value = ""; 
   

}
function calculate(val){
    display.value+=val;

}
function Equals(){
try{
    display.value=eval(display.value)
}
catch(e){
display.value='Enter Valid Input'
}
}
function clearLast (){
    display.value=display.value.slice(0,-1)
}

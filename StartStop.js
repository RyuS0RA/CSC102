function Start() {
    document.getElementById("start").disabled=true; 
    document.getElementById("stop").disabled=false;
    document.getElementById("timer").innerHTML="Don't Press the RED BUTTON!!!"

}
function Stop() {
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
    document.getElementById("timer").innerHTML="Phew... what a relief"

}
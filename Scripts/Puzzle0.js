// JavaScript source code
function mySum0() {

    var x = document.getElementById("S1").value;
    var y = document.getElementById("S2").value;
    if (x == 13 && y == 59) {
        alert("Congratulations! You got that right!")
    }
    else {
        alert("Try again!!")
    }
}
function myColor() {
    //document.body.style.backgroundColor = document.getElementById("color").value;
    document.getElementById("divMenu").style.backgroundColor = document.getElementById("color").value;

}
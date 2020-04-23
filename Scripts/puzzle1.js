// JavaScript source code
    function mySum() {

            var x = document.getElementById("S1").value;
            var y = document.getElementById("S2").value;
            var z = document.getElementById("S3").value;
            var a = document.getElementById("S4").value;
            if (x == 1.5 && y == 12.5 && z == 13.5 && a == 3.5) {
        alert("Congratulations! You got that right!")
    }
            else if (x == 1.5 && y == 12.5 && z == 13.5 || x == 1.5 && z == 13.5 && a == 3.5 || y == 12.5 && z == 13.5 && a == 3.5 || z == 13.5 && a == 3.5 && x == 1.5 || z == 13.5 && a == 3.5 && y == 12.5 || y == 12.5 && z == 13.5 && a == 3.5 || z == 13.5 && a == 3.5 && x == 1.5) {
        alert("Almost There!! Try again!!")
    }
            else if (x == 1.5 && y == 12.5 || x == 1.5 && z == 13.5 || x == 1.5 && a == 3.5 || y == 12.5 && z == 13.5 || y == 12.5 && a == 3.5 || z == 13.5 && a == 3.5 || z == 13.5 && y == 12.5)
            //  z == 13.5 && x == 1.5 ||
            {
        alert("Getting There!! Try sagin!!")
    }
            else {
        alert("Try again!!")
    }
}
function myColor() {
        //document.body.style.backgroundColor = document.getElementById("color").value;
    document.getElementById("divMenu").style.backgroundColor = document.getElementById("color").value;

}
function myHint(){
    alert("Why do wehave to think of only whole numbers all the time?! Can't we get something for $2 and 30 cents?")
}
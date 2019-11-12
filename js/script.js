var screen = document.getElementById("screen");
var calculator = document.getElementById("calculator");
var operators = document.getElementsByClassName("operator");


function input(i) {
    screen.value = screen.value + i;


    //Animate js
    calculator.style.width = "325px";
    setTimeout(function () {
        for (var y = 0; y < operators.length; y++) {
            operators[y].style.display = "block";


        }

    }, 700);

    setTimeout(function () {
        for (var y = 0; y < operators.length; y++) {
            operators[y].style.opacity = "1";
            operators[y].style.pointerEvents = "auto";



        }

    }, 800);


}


function result() {
    if (eval(screen.value) !=undefined){
        screen.value = eval(screen.value);

    }else{
        screen.value ='';
    }
}
function reset() {

    screen.value = "";

    //Animate js
    for (var y = 0; y < operators.length; y++) {
        operators[y].style.opacity = "0.4";
        operators[y].style.pointerEvents = "none";

    }



}


var screen = document.getElementById("screen");
screen.onkeyup = keyUp;

var endValue = "";

function keyUp(e) {
    var x = e.key;
    var regexNumbers = /[0-9\+\*\-\%\.\/]+/gm;

    if (x.match(regexNumbers) || x == "Backspace") {
        if (screen.value.length == 1) {
            if (x == "+" || x == "*" || x == "/" || x == ".") {
                screen.value = endValue;
            } else {
                screen.value = screen.value;
                endValue = screen.value;
            }
        }

        else if (x == "+" || x == "*" || x == "/" || x == "-" || x == ".") {
            var slice = screen.value.charAt(screen.value.length - 2);
            if (screen.value.length == 1 && screen.value == "-") {
                screen.value = "-";
            } else if (slice == "+" || slice == "*" || slice == "/" || slice == "-" || slice == ".") {
                screen.value = screen.value.substring(0, screen.value.length - 2) + x;
            } else {
                screen.value = screen.value;
                endValue = screen.value;
            }
        } else {
            screen.value = screen.value;
            endValue = screen.value;

        }

    } else if (x == "Enter" || x == "=") {
        screen.value = endValue;
        result()
    }
    else {
        screen.value = endValue;
        error("syntax");
    }
}





function input(i) {
    if (screen.value.length == 0) {
        if (i == "+" || i == "*" || i == "/" || i == ".") {
            screen.value = endValue;
        }
        screen.value = screen.value + i;
        endValue = screen.value;


    } else if (i == "+" || i == "*" || i == "/" || i == "-" || i == ".") {
        var slice = screen.value.slice(-1);
        if (screen.value.length == 1 && screen.value == "-") {
            screen.value = "-";
        } else if (slice == "+" || slice == "*" || slice == "/" || slice == "-" || slice == ".") {
            screen.value = screen.value.substring(0, screen.value.length - 1) + i;
        } else {
            screen.value = screen.value + i;
            endValue = screen.value;
        }
    } else {
        screen.value = screen.value + i;
        endValue = screen.value;
    }
}


function result() {
    if (eval(screen.value) == undefined ||
        isNaN(eval(screen.value)) ||
        eval(screen.value) == "-Infinity" ||
        eval(screen.value) == "Infinity") {
        error("validation")
    } else {

        history(screen.value, eval(screen.value))
        screen.value = eval(screen.value);
    }
}

function reset() {
    endValue = "";
    screen.value = "";
}

function error(error) {
    if (error == "syntax") {
        screen.value = endValue;
    } else if ((error == "validation")) {
        screen.value = "error";

    }
    screen.style.backgroundColor = "#9e4249"
    setTimeout(function () {
        screen.value = endValue;

        screen.style.backgroundColor = "#00000096";
    }, 500);
}

function history(a, b) {
    var para = document.createElement("P");
    para.innerHTML = a + " = " + b;
   var myTag= document.getElementById("history").appendChild(para);
    setTimeout(function () {
        myTag.classList.add("myStyle");

    }, 200);
}

function backSpace() {
    screen.value = screen.value.substring(0, screen.value.length - 1);

}




var text = document.getElementById("text");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var div9 = document.getElementById("div9");
var result = document.getElementById("result");
var parent = document.getElementById("ticTac");
var counter = 0;
var user1;
var user2;
var x = 0;
var o = 0;
var computer = false;


function cheking(a) {
    if (!computer) {
        if (counter % 2 == 0) {
            text.innerHTML = "player's move O";
            a.style.pointerEvents = "none";
            a.childNodes[0].innerHTML = "X";
            a.childNodes[0].style.color = "brown";
            counter = counter + 1;
            check("X");
        } else {
            text.innerHTML = "player's move X";
            a.style.pointerEvents = "none";
            a.childNodes[0].innerHTML = "O";
            a.childNodes[0].style.color = "darkcyan";
            counter = counter + 1;
            check("O");
        }
    } else {
        text.innerHTML = "player's move O";
        a.style.pointerEvents = "none";
        a.childNodes[0].innerHTML = "X";
        a.childNodes[0].style.color = "brown";
        counter = counter + 1;
        check("X");
        text.innerHTML = "player's move X";


    }


}

function check(y) {
    if (div1.childNodes[0].innerHTML == y && div2.childNodes[0].innerHTML == y && div3.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div2, div3, y);
    } else if (div4.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div6.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div4, div5, div6, y);

    } else if (div7.childNodes[0].innerHTML == y && div8.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div7, div8, div9, y);

    } else if (div1.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div5, div9, y);

    } else if (div7.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div3.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div7, div5, div3, y);

    } else if (div1.childNodes[0].innerHTML == y && div4.childNodes[0].innerHTML == y && div7.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div4, div7, y);

    } else if (div2.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div8.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div2, div5, div8, y);

    } else if (div3.childNodes[0].innerHTML == y && div6.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div3, div6, div9, y);

    }else if (computer && counter%2==1){
        setTimeout(function () {
            compCheck()

        }, 200);

    }

}

function won(z, q, c, y) {

    z.style.backgroundColor = "rgba(44,136,98,0.69)";
    q.style.backgroundColor = "rgba(44,136,98,0.69)";
    c.style.backgroundColor = "rgba(44,136,98,0.69)";
    if (y == "X") {
        x = x + 1;
        result.innerHTML = user1 +": "+ x + "<br>" + user2 +": " + o;

    } else {
        o = o + 1;
        result.innerHTML = user1 +": "+ x + "<br>" + user2 +": " + o;
    }

    parent.style.pointerEvents = "none";
    reset();

}

function reset(a) {
    if (a == "all") {
        x = 0;
        o = 0;
        result.innerHTML = user1 +": "+ x + "<br>" + user2 +": " + o;
    }
    setTimeout(function () {
        for (var i = 0; i < parent.childElementCount; i++) {
            parent.children[i].style.pointerEvents = "auto";
            parent.children[i].style.backgroundColor = "#228b2100";
            parent.children[i].children[0].innerHTML = "";
        }
        parent.style.pointerEvents = "auto";
        text.innerHTML = "Play Game"
        counter = 0;

    }, 2000);

}


function compCheck() {

        var random = Math.floor(Math.random() * parent.childElementCount);
        if (parent.children[random].children[0].innerText == "") {
            parent.children[random].style.pointerEvents = "none";
            parent.children[random].children[0].innerHTML = "O";
            parent.children[random].children[0].style.color = "darkcyan";
            counter = counter + 1;
            check("O");
        } else if (counter < parent.childElementCount) {
            compCheck();
        } else {
            text.innerHTML = "Game Over (";

            setTimeout(function () {
                reset()

            }, 2000);

        }


}

function getUser() {
    document.getElementById("setting").style.display="none";
    document.getElementById("head").style.display="block";
     user1 = document.forms["myForm"]["user1"].value;
    user2 = document.forms["myForm"]["user2"].value;
    result.innerHTML = user1 +": "+ x + "<br>" + user2 +": " + o;

    console.log(user2)

    if (document.getElementById("comp").checked==true) {
        computer = true;
    }


}
function inputDisable(a) {
var user2Input=document.getElementById("user2");

    if (a=="disable"){
        user2Input.style.opacity="0.4";
        user2Input.value="Computer";
        user2Input.disabled = true;
}else {
        user2Input.style.opacity="1";
        user2Input.value="User2";
        user2Input.disabled = false;

    }
}



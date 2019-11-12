var screen=document.getElementById("screen");
var numbers=document.getElementById("numbers");

function getAll() {
        var arr = [];
        for (i = 1; i <= screen.value; i++) {
            arr.push(i);
            numbers.innerHTML = arr;
        }

}
function getEvenNumbers() {
    var arr =[];
    for (i=1; i<=screen.value;i++){
        if (i%2==0){
            arr.push(i);
            numbers.innerHTML=arr;
        }

    }
}
function getOddNumbers() {
    var arr =[];
    for (i=1; i<=screen.value;i++){
        if (i%2==1){
            arr.push(i);
            numbers.innerHTML=arr;
        }

    }
}
function getMaxNumber() {
    var num=1;
    for (i=1; i<=screen.value;i++){
        if (i>num){
            num=i;
        }
        numbers.innerHTML=num;

    }

}
function getMinNumber() {
    var num=1;
    for (i=1; i<=screen.value;i++){
        if (i<num){
            num=i;
        }
        numbers.innerHTML=num;

    }

}
function getEvenNumbersQuantity() {
    var even=0;
    for (i=1; i<=screen.value;i++){
        if (i%2==0){
            even=even+1
            numbers.innerHTML=even;
        }

    }
}

function getOddNumbersQuantity() {
    var even=0;
    for (i=1; i<=screen.value;i++){
        if (i%2==1){
            even=even+1
            numbers.innerHTML=even;
        }

    }
}
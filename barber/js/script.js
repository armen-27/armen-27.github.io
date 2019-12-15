var nextClients = document.getElementById("nextClient");
// var selectTime = document.getElementById("selectTime");
var time = document.getElementsByName("time");
var form = document.forms.registerForm;
var clientList = document.getElementById("clientList");
var clientList2 = document.getElementById("registerToday");
var currentDate;


function startTime() {
    var now = moment();
    document.getElementById("clock").innerHTML = now.format('hh:mm <br>YYYY-MM-DD  ');
    currentDate = now.format('YYYY-MM-DD');

    setTimeout(startTime, 60000);
    document.getElementById("date").setAttribute("min", currentDate);
}

var clientArray = [
    user = new User("Armen", "094353732", "2019-12-18", "10:00"),
    user = new User("Artur", "094010307", "2019-12-16", "11:00"),
    user = new User("Arsen", "094398484", "2019-12-15", "13:30"),
    user = new User("Noro", "094010305", "2019-12-15", "15:00"),
    user = new User("petros", "094272725", "2019-12-18", "12:00"),


];
var busyDateArray = [
    busyDate = new BusyDate("2019-12-18", "10:00"),
    busyDate = new BusyDate("2019-12-16", "11:00"),
    busyDate = new BusyDate("2019-12-15", "13:30"),
    busyDate = new BusyDate("2019-12-15", "15:00"),
    busyDate = new BusyDate("2019-12-18", "12:00"),
];

function User(name, phoneNumber, date, time) {

    this.name = name;
    this.phoneNumber = phoneNumber;
    this.date = date;
    this.time = time;
}

function BusyDate(day, hour) {
    this.day = day;
    this.hour = hour;


}



function checkDate(checkDate) {

    for (i = 0; i < busyDateArray.length; i++) {
        if (busyDateArray[i].day == checkDate.value) {

            for (let y = 0; y < time.length; y++) {
                if (time[y].value == busyDateArray[i].hour) {
                    time[y].parentElement.style.display = "none";
                    continue;
                }
            }

        } else {
            for (let y = 0; y < time.length; y++) {
                if (time[y].value == busyDateArray[i].hour) {
                    time[y].parentElement.style.display = "inline-block";
                    continue;
                }
            }
        }


    }

}


function updateList() {
    while (clientList.firstChild) {
        clientList.removeChild(clientList.firstChild);
    }

    var table = document.createElement("table");
    var tr = document.createElement("tr");

    clientList.appendChild(table);
    table.appendChild(tr);

    var nameTh = document.createElement("th");
    var phoneNumberTh = document.createElement("th");
    var dateTh = document.createElement("th");
    var timeTh = document.createElement("th");
    var actionsTh = document.createElement("th");


    nameTh.innerHTML = "Name";
    phoneNumberTh.innerHTML = "Phone Number";
    dateTh.innerHTML = "Date";
    timeTh.innerHTML = "Time";


    tr.appendChild(nameTh);
    tr.appendChild(phoneNumberTh);
    tr.appendChild(dateTh);
    tr.appendChild(timeTh);


    clientArray.sort(function (a, b) {
        return moment(a.date) - moment(b.date)
    });


    for (var i = 0; i < clientArray.length; i++) {
        var newRow = table.insertRow(table.length);
        newRow.className = "actionUser";
        newRow.onclick = function () {
            clientActions(this)
        };
        var cellName = newRow.insertCell().innerHTML = clientArray[i].name;
        var cellPhone = newRow.insertCell().innerHTML = clientArray[i].phoneNumber;
        var cellDate = newRow.insertCell().innerHTML = clientArray[i].date;
        var cellTime = newRow.insertCell().innerHTML = clientArray[i].time;



    }


}

function todayClients() {
    while (clientList2.firstChild) {
        clientList2.removeChild(clientList2.firstChild);
    }

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    clientList2.appendChild(table);
    table.appendChild(tr);

    var nameTh = document.createElement("th");
    var phoneNumberTh = document.createElement("th");
    var dateTh = document.createElement("th");
    var timeTh = document.createElement("th");

    nameTh.innerHTML = "Name";
    phoneNumberTh.innerHTML = "Phone Number";
    dateTh.innerHTML = "Date";
    timeTh.innerHTML = "Time";


    tr.appendChild(nameTh);
    tr.appendChild(phoneNumberTh);
    tr.appendChild(dateTh);
    tr.appendChild(timeTh);

    for (var i = 0; i < clientArray.length; i++) {

        if (clientArray[i].date == currentDate) {
            var newRow = table.insertRow(table.length);
            newRow.className = "actionUser";
            newRow.onclick = function () {
                clientActions(this)
            };
            var cellName = newRow.insertCell().innerHTML = clientArray[i].name;
            var cellPhone = newRow.insertCell().innerHTML = clientArray[i].phoneNumber;
            var cellDate = newRow.insertCell().innerHTML = clientArray[i].date;
            var cellTime = newRow.insertCell().innerHTML = clientArray[i].time;
        }
    }


}

function runFunction() {
    startTime();
    updateList();


}

function selectTime(time) {
    document.getElementById("time").value = time.value;

}

function clientActions(tr) {

    actionDiv = document.getElementById("actionDiv");
    actionDiv.style.display = "block";

    closeActionDiv = document.getElementById("closeAction");
    closeActionDiv.onclick = function () {
        actionDiv.style.display = "none"
    }

    var change = document.getElementById("changeClient");
    change.innerHTML="Change Date of "+ tr.children[0].innerHTML;
    change.onclick = function () {

        addAndChange(returnClient(tr));
        actionDiv.style.display = "none"

    };


    del = document.getElementById("deleteClient");
    del.innerHTML="Remove "+ tr.children[0].innerHTML+" from the list ";

    del.onclick = function () {
        deleteClient(returnClient(tr));
        actionDiv.style.display = "none"

    }

}


function returnClient(tr) {
    for (i = 0; i < clientArray.length; i++) {
        if (clientArray[i].phoneNumber == tr.children[1].innerHTML) {
            return clientArray[i];
        }

    }


}

function deleteClient(client) {
    clientArray.splice(clientArray.indexOf(client), 1);
    updateList();


}

function addAndChange(client) {

    if (client) {

        form.firstName.value = client.name;
        form.phoneNumber.value = client.phoneNumber;
        form.button.value = "Change Client Date";
        form.firstName.setAttribute("disabled", "");
        form.phoneNumber.setAttribute("disabled", "");

        pageUnset("change");

        form.button.onclick = function () {
            client.date = form.date.value;
            client.time = form.time.value;
            updateList();
            pageUnset("allRegister");
        }

    } else {
        form.firstName.value = "";
        form.phoneNumber.value = "";
        form.button.value = "Register a client";
        form.firstName.removeAttribute("disabled");
        form.phoneNumber.removeAttribute("disabled");
        form.button.onclick = function () {
            var name = form.firstName.value;
            var phoneNumber = form.phoneNumber.value;
            var date = form.date.value;
            var time = form.time.value;
            var user = new User(name, phoneNumber, date, time);
            var busyDate = new BusyDate(date, time);


            clientArray.push(user);
            busyDateArray.push(busyDate);
            updateList();
            form.reset()

        }


    }

}







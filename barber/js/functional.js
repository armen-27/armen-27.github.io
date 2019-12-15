var register = document.getElementById("register");
var allRegister = document.getElementById("allRegister");
var registerToday = document.getElementById("registerToday");

function pageUnset(x) {
    if (x == "allRegister") {
        document.body.style.backgroundImage = "url('img/3.jpg')";

        register.style.display = "none";
        allRegister.style.display = "block";
        registerToday.style.display = "none";

    } else if (x == "register") {
        addAndChange();
        document.body.style.backgroundImage = "url('img/1.jpg')";

        register.style.display = "block";
        allRegister.style.display = "none";
        registerToday.style.display = "none";

    }
    else if (x == "change") {
        document.body.style.backgroundImage = "url('img/4.jpg')";

        register.style.display = "block";
        allRegister.style.display = "none";
        registerToday.style.display = "none";

    }

    else if (x == "registerToday") {
        todayClients();
        document.body.style.backgroundImage = "url('img/2.jpg')";

        register.style.display = "none";
        allRegister.style.display = "none";
        registerToday.style.display = "block";
    }

}

function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("clientList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
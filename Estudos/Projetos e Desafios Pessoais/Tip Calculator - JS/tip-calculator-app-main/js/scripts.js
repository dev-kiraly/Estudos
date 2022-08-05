var bill = document.getElementById("inputBill");
var percent;
var custom = document.getElementById("inputCustom");
var peoples = document.getElementById("inputPeoples");
var erro = document.getElementById("error");

var tipPerPerson;
var totalPerPerson;
var totalBill;
var temErro;

window.addEventListener("keyup", calculateTip);
window.addEventListener("click", calculateTip);


function checkRadios() {
    const radios = document.getElementsByName("percentSelected");

    if (document.getElementById("percentCustom").checked == true) {
        percent = custom.value;
    } else {
        document.getElementById("percentCustom").value = 0;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                percent = radios[i].value;
                break;
            }
        }
    }
}

function verifyErrors() {
    function getVarZero() {
        tipPerPerson = 0;
        totalPerPerson = 0;
        totalBill = 0;
        temErro = true;
    }

    
    if (bill.value != 0) {
        erro.style.visibility = "hidden";
        temErro = false;
    } else {
        erro.innerHTML = "Can't be zero";
        erro.style.visibility = "visible";
        getVarZero();       
    }

    if (bill.value > 9999) {
        erro.innerHTML = "The bill is too expensive"
        erro.style.visibility = "visible";
        bill.style.color = "rgb(246, 122, 122)";
        getVarZero();
    } else {
        bill.style.color = "hsl(183, 100%, 15%)";
    }

    if (custom.value > 99) {
        if (document.getElementById("percentCustom").checked == true) {
            custom.style.color = "rgb(246, 122, 122)";
            getVarZero();
        }        
    } else {
        custom.style.color = "hsl(183, 100%, 15%)";
    }

}

function calculateTip() {
    checkRadios();
    verifyErrors();

    function calculate() {
        if (!temErro) {
            tipPerPerson = ((bill.value / 100) * percent) / peoples.value;
            totalPerPerson = tipPerPerson + (bill.value / peoples.value);
            totalBill = totalPerPerson * peoples.value;
        } else {
            return;
        }
        
    }

    function limitDecimal() {
        tipPerPerson = Math.floor(tipPerPerson * 100) / 100;
        totalPerPerson = Math.floor(totalPerPerson * 100) / 100;
        totalBill = Math.floor(totalBill * 100) / 100;
    }
    
    function outputResults() {
        document.getElementById("tipPerPersonOutput").innerHTML = tipPerPerson;
        document.getElementById("totalPerPersonOutput").innerHTML = totalPerPerson;
        document.getElementById("totalBillOutput").innerHTML = totalBill;
    }

    calculate();
    limitDecimal();
    outputResults();
    temErro = false;
}




function reset() {
    location.reload();
}

function markCustomDiv() {
    document.getElementById("percentCustom").checked = true;
}










var infoBasic = {    
    priceMonth: 19.99,
    priceYear: 199.99,
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
};

var infoProf = {
    priceMonth: 24.99,
    priceYear: 249.99,
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
};

var infoMaster = {
    priceMonth: 39.99,
    priceYear: 399.99,
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB",
};

var toggle = document.getElementById("toggle");

var basicPrice = document.getElementById("basicPrice");
var profPrice = document.getElementById("profPrice");
var masterPrice = document.getElementById("masterPrice");

var cardBasic = document.getElementById("infoHolderBasic").children;
var cardProf = document.getElementById("infoHolderProf").children;
var cardMaster = document.getElementById("infoHolderMaster").children;


function setMonth() {
    basicPrice.innerHTML = infoBasic.priceMonth;
    profPrice.innerHTML = infoProf.priceMonth;
    masterPrice.innerHTML = infoMaster.priceMonth;
    document.getElementById("annually").style.color = "hsl(237, 63%, 64%)";
    document.getElementById("monthly").style.color = "hsl(234, 14%, 74%)";

}

function setYear() {
    basicPrice.innerHTML = infoBasic.priceYear;
    profPrice.innerHTML = infoProf.priceYear;
    masterPrice.innerHTML = infoMaster.priceYear;
    document.getElementById("annually").style.color = "hsl(234, 14%, 74%)";
    document.getElementById("monthly").style.color = "hsl(237, 63%, 64%)";
}

function toggleChange() {
    if (toggle.checked) {
        setYear();
    } else {
        setMonth();
    }
}

function setCardInfos() {
    cardBasic[1].innerHTML = infoBasic.storage;
    cardBasic[3].innerHTML = infoBasic.users;
    cardBasic[5].innerHTML = infoBasic.send;

    cardProf[1].innerHTML = infoProf.storage;
    cardProf[3].innerHTML = infoProf.users;
    cardProf[5].innerHTML = infoProf.send;

    cardMaster[1].innerHTML = infoMaster.storage;
    cardMaster[3].innerHTML = infoMaster.users;
    cardMaster[5].innerHTML = infoMaster.send;
}



setCardInfos();
toggleChange();














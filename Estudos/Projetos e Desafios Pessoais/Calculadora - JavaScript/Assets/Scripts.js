var visor = document.getElementById("visorNumbers");

var mais = document.getElementById("mais");
var menos = document.getElementById("menos");
var vezes = document.getElementById("vezes");
var dividir = document.getElementById("dividir");

var um = document.getElementById("um");
var dois = document.getElementById("dois");
var tres = document.getElementById("tres");
var quatro = document.getElementById("quatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var sete = document.getElementById("sete");
var oito = document.getElementById("oito");
var nove = document.getElementById("nove");
var zero = document.getElementById("zero");
var ponto = document.getElementById("ponto");

var clearInput = document.getElementById("clear");
var igual = document.getElementById("igual");

let input = "";
let result = 0;
let jaOperou = false;


um.addEventListener("click", function(){addInpput("1")});
dois.addEventListener("click", function(){addInpput("2")});
tres.addEventListener("click", function(){addInpput("3")});
quatro.addEventListener("click", function(){addInpput("4")});
cinco.addEventListener("click", function(){addInpput("5")});
seis.addEventListener("click", function(){addInpput("6")});
sete.addEventListener("click", function(){addInpput("7")});
oito.addEventListener("click", function(){addInpput("8")});
nove.addEventListener("click", function(){addInpput("9")});
zero.addEventListener("click", function(){addInpput("0")});
ponto.addEventListener("click", function(){addInpput(".")});

mais.addEventListener("click", function(){addInpput("+")});
menos.addEventListener("click", function(){addInpput("-")});
vezes.addEventListener("click", function(){addInpput("*")});
dividir.addEventListener("click", function(){addInpput("/")});

igual.addEventListener("click", calcular);
clearInput.addEventListener("click", clear);



function addInpput(button) {
    if (jaOperou) {
        input = result.toString();
        
        if (button !== "+" && button !== "-" && button !== "*" && button !== "/") {
            input = "";
        }
    }
    if (input.length < 14) {
        if (input.endsWith("+") || input.endsWith("-") || input.endsWith("*") || input.endsWith("/")) {
            if (button == "+" || button == "-" || button == "*" || button == "/") {
                input = input.replace(/.$/, '');
                input += button;
            } else {
                input += button;
            }       
        } else {
            input += button;
        }
    } else {
        return;
    }
    
    visor.innerHTML = input;
    jaOperou = false;
}

function calcular() {
    result = eval(input);
    visor.innerHTML = result;
    jaOperou = true;
}

function clear() {
    input = "";
    visor.innerHTML = input;
    jaOperou = false;
}

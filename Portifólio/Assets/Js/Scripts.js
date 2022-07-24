var nSlide = 1;
var imgLogo = document.getElementById("slide");
var clienteLogo = document.getElementById("cliente-logo");
var clientesLogo = [
    "Boa Vista",
    "Bolinha",
    "Cantinho dos Pets",
    "ExpoMedia",
    "Tropical",
    "Kanoa",
    "Sollini",
    "Mania de Gelado",
    "Mari Sobral",
    "Miguel Garay",
    "Paratigurumi",
    "Paulo Sushi",
    "Pouso da Gaivota",
    "Precatar",
    "Recanto das Mangueiras",
    "Alfa",
    "Sabor de Infância", 
    "Sollar",
    "Sonhos de Menina",
    "Thayná Carvalho",
];

var nCatalogo = 1;
var imgCatalogo = document.getElementById("img-catalogo");
var acessarCatalogo = document.getElementById("acessar-catalogo");
var clienteCatalogo = document.getElementById("cliente-catalogo");
var clientesCatalogo = [
    "Amar",
    "Paulo Sushi",
    "Dona Ondina",
];

var linkCatalogo = [
    "https://bit.ly/Catalogo_Completo_PetShow_ShowGroom_AMAR_Distribuidora",
    "./Assets/Pdf/menu-ps.pdf",
    "./Assets/Pdf/menu-dona.pdf", 
];


function nextLogo() {
    if (nSlide == 20) {
        nSlide = 1;
        imgLogo.src = "./Assets/Img/Slide/" + nSlide + ".png";
        clienteLogo.innerHTML = clientesLogo[nSlide-1];
    } else {
        nSlide ++;
        imgLogo.src = "./Assets/Img/Slide/" + nSlide + ".png";
        clienteLogo.innerHTML = clientesLogo[nSlide-1];
    }
}

function lastLogo() {
    if (nSlide == 1) {
        nSlide = 20;
        imgLogo.src = "./Assets/Img/Slide/" + nSlide + ".png";
        clienteLogo.innerHTML = clientesLogo[nSlide-1];
    } else {
        nSlide --;
        imgLogo.src = "./Assets/Img/Slide/" + nSlide + ".png";
        clienteLogo.innerHTML = clientesLogo[nSlide-1];
    }
}



function nextCatalogo() {
    if (nCatalogo == 3) {
        nCatalogo = 1;
        imgCatalogo.src = "./Assets/Img/Catalogos/" + nCatalogo + ".png";
        clienteCatalogo.innerHTML = clientesCatalogo[nCatalogo-1];
        acessarCatalogo.href = linkCatalogo[nCatalogo-1];
    } else {
        nCatalogo ++;
        imgCatalogo.src = "./Assets/Img/Catalogos/" + nCatalogo + ".png";
        clienteCatalogo.innerHTML = clientesCatalogo[nCatalogo-1];
        acessarCatalogo.href = linkCatalogo[nCatalogo-1];
    }
}

function lastCatalogo() {
    if (nCatalogo == 1) {
        nCatalogo = 20;
        imgCatalogo.src = "./Assets/Img/Catalogos/" + nCatalogo + ".png";
        clienteCatalogo.innerHTML = clientesCatalogo[nCatalogo-1];
        acessarCatalogo.href = linkCatalogo[nCatalogo-1];
    } else {
        nCatalogo --;
        imgCatalogo.src = "./Assets/Img/Catalogos/" + nCatalogo + ".png";
        clienteCatalogo.innerHTML = clientesCatalogo[nCatalogo-1];
        acessarCatalogo.href = linkCatalogo[nCatalogo-1];
    }
}
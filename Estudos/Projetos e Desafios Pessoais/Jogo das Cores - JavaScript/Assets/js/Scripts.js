

var areaRGB = document.getElementById('rgb');
var buttonEasy = document.getElementById('easy');
var buttonHard = document.getElementById('hard');
var container2 = document.getElementById('container2');
var tip = document.getElementById('guessTheColor');
var body = document.getElementById('body');

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');

var easyMode = false;
var hardMode = false;

var correctRGB = newRGB();
var correctBox = correctBoxEasy();
var win = false;




easyModeSelected();
newGame();

function easyModeSelected() {
    if (easyMode) {
        return;
    } else {
        easyMode = true;
        hardMode = false;

        buttonEasy.style.backgroundColor = "darkcyan";
        buttonEasy.style.color = "white";
        buttonHard.style.backgroundColor = "rgb(173, 235, 235)";
        buttonHard.style.color = "darkcyan";

        container2.style.display = "none";
        newGame();
    }
}

function hardModeSelected() {
    if (hardMode) {
        return;
    } else {
        easyMode = false;
        hardMode = true;

        buttonHard.style.backgroundColor = "darkcyan";
        buttonHard.style.color = "white";
        buttonEasy.style.backgroundColor = "rgb(173, 235, 235)";
        buttonEasy.style.color = "darkcyan";

        container2.style.display = "";
        newGame();
    }
}

function newRGB() {
    let newRGB;
    let min = 1;
    let max = 255;
    let red = Math.floor(Math.random() * (max - min + 1)) + min;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let blue = Math.floor(Math.random() * (max - min + 1)) + min;

    newRGB = "rgb(" + red + "," + green + "," + blue + ")";
    return newRGB;
}

function correctBoxEasy() {
    let min = 1;
    let max = 3;
    let box = Math.floor(Math.random() * (max - min + 1)) + min;
    return box;
}

function correctBoxHard() {
    let min = 1;
    let max = 6;
    let box = Math.floor(Math.random() * (max - min + 1)) + min;
    return box;
}

function choose(box) {
    if(win) {
        return;
    } else {
        if (box == correctBox) {
            win = true;
        } else {
            win = false;
        }

        if (win) {
            tip.innerHTML = "Acertou!";

            areaRGB.style.color = correctRGB;
            tip.style.color = correctRGB;
            box1.style.backgroundColor = correctRGB;
            box2.style.backgroundColor = correctRGB;
            box3.style.backgroundColor = correctRGB;
            box4.style.backgroundColor = correctRGB;
            box5.style.backgroundColor = correctRGB;
            box6.style.backgroundColor = correctRGB;
        } else {
            switch (box) {
                case 1:
                    box1.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                case 2:
                    box2.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                case 3:
                    box3.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                case 4:
                    box4.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                case 5:
                    box5.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                case 6:
                    box6.style.backgroundColor = "white";
                    tip.innerHTML = "Tente Novamente!";
                    break;
                default:
                    break;
            }
        }
    }
}

function newGame() {
    areaRGB.style.color = "rgb(51, 51, 51)";
    tip.style.color = "rgb(51, 51, 51)";
    win = false;
    tip.innerHTML = "Acerte a Cor:";

    correctRGB = newRGB();
    areaRGB.innerHTML = correctRGB;

    if(easyMode) {
        correctBox = correctBoxEasy();
        console.log(correctBox);

        if (correctBox == 1) {
            box1.style.backgroundColor = correctRGB;
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = newRGB();
        } else if (correctBox == 2) {
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = correctRGB;
            box3.style.backgroundColor = newRGB();
        } else {
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = correctRGB;
        }
    } else {
        correctBox = correctBoxHard();
        console.log(correctBox);

        if (correctBox == 1) {
            box1.style.backgroundColor = correctRGB;
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = newRGB();
            box4.style.backgroundColor = newRGB();
            box5.style.backgroundColor = newRGB();
            box6.style.backgroundColor = newRGB();
        } else if (correctBox == 2) {
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = correctRGB;
            box3.style.backgroundColor = newRGB();
            box4.style.backgroundColor = newRGB();
            box5.style.backgroundColor = newRGB();
            box6.style.backgroundColor = newRGB();
        } else if (correctBox == 3){
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = correctRGB;
            box4.style.backgroundColor = newRGB();
            box5.style.backgroundColor = newRGB();
            box6.style.backgroundColor = newRGB();
        } else if (correctBox == 4) {
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = newRGB();
            box4.style.backgroundColor = correctRGB;
            box5.style.backgroundColor = newRGB();
            box6.style.backgroundColor = newRGB();
        } else if (correctBox == 5) {
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = newRGB();
            box4.style.backgroundColor = newRGB();
            box5.style.backgroundColor = correctRGB;
            box6.style.backgroundColor = newRGB();
        } else if (correctBox == 6){
            box1.style.backgroundColor = newRGB();
            box2.style.backgroundColor = newRGB();
            box3.style.backgroundColor = newRGB();
            box4.style.backgroundColor = newRGB();
            box5.style.backgroundColor = newRGB();
            box6.style.backgroundColor = correctRGB;
        }
    }
}

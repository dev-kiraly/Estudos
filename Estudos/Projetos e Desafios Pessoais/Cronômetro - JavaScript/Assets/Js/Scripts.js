var mil = "00";
var sec = "00";
var min = "00";
var onOff = false;
var pauseCrono = false;


document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;
document.getElementById('mil').innerHTML = mil;


function start(){
    console.log("start");
    if(!onOff && !pauseCrono) {
        onOff = true;
        setInterval(counter, 10);
    } else {        
        if(pauseCrono) {
            pauseCrono = false;
        } else {
            return;
        }
    }
    
}


function pause() {
    pauseCrono = true;
    console.log("pause");
}

function reset() {
    pauseCrono = true;
    mil = "00";
    sec = "00";
    min = "00";
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('mil').innerHTML = mil;
    console.log("reset");
}


function counter() {
    if (onOff && !pauseCrono) {
        if (mil < 99) {
            mil++;
            document.getElementById('mil').innerHTML = mil;
        } else {
            mil = 0
            document.getElementById('mil').innerHTML = mil;
        }
        
        if (mil == 00) {
            if (sec < 59) {
                sec++;
                document.getElementById('sec').innerHTML = sec;
                console.log(sec);
            } else {
                sec = "00";
                min++;
                document.getElementById('sec').innerHTML = sec;
                document.getElementById('min').innerHTML = min;
                console.log(sec);
                console.log(min);
            }
        }
    }
          
}
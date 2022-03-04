let screenVal = document.getElementById('text');
let clrEnt = document.getElementById('ce');
let clr = document.getElementById('c');
let del = document.getElementById('del');
let operator = document.getElementsByClassName('operation');
let number = document.getElementsByClassName('numbers');


function clrFullScreen() {
    screenVal.value = null;
}

function delLastChar() {
    screenVal.value = screenVal.value.slice(0, -1);
}

function oneByX() {
    screenVal.value = 1/screenVal.value;
}

function square() {
    screenVal.value = Math.pow(screenVal.value, 2);
}

function underRoot() {
    screenVal.value = Math.sqrt(screenVal.value);
}

function screen(value) {
    if(screenVal.value === undefined) {
        screenVal.value = "";
    }else{
        screenVal.value += value;
    }
}

function result() {
    screenVal.value = eval(screenVal.value);
}


setInterval(time, 1000);

function time() {
    var d = new Date();
    document.getElementById("hour").innerHTML = ((d.getHours() < 10) ? '0' : '') + d.getHours() + ':';
    document.getElementById("min").innerHTML = ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes() + ':';
    document.getElementById("sec").innerHTML = ((d.getSeconds() < 10) ? '0' : '') + d.getSeconds() + ":";
    // document.getElementById("sec").innerHTML = d.getSeconds();
    // if(d.getSeconds() < 10 ) {
        //     document.getElementById("sec").innerHTML = '0' + d.getSeconds();
        // }
        // d.toLocaleString('en-US', { hour: 'numeric', hour12: true })
        if(d.getHours() < 12) {
            document.getElementById("ampm").textContent = "AM"; 
        }    
        else {
            document.getElementById("hour").innerHTML = '0' + parseInt(document.getElementById("hour").innerHTML) - 12 + ":";
            document.getElementById("ampm").textContent = "PM"; 
        }

}


var clickcounter1 = 0;
var messages1 = [
    '<a href="prufung-1.html">GF M (27.01)</a>',
    ];
  
function weiterePrufung() {
    document.getElementById("weiterePrufung").innerHTML = messages1[clickcounter1 % messages1.length];
    clickcounter1 += 1;
}

var clickcounter2 = 0;
var messages2 = [
    '<a href="s-prufung-1.html">SF SPA (20.01)</a>',
    '<a href="s-prufung-2.html">GF F (29.01)</a>',
    ];

function Sprachprufung() {
    document.getElementById("Sprachprufung").innerHTML = messages2[clickcounter2 % messages2.length];
    clickcounter2 += 1;
}

var clickcounter3 = 0;
var messages3 = [
    '<a href="hausaufgaben">FF L</a>',
    ];

function Hausaufgaben() {
    document.getElementById("Hausaufgaben").innerHTML = messages3[clickcounter3 % messages3.length];
    clickcounter3 += 1;
}
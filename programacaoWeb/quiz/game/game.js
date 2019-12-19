//Get Roulette Img
var wheelImg = document.getElementById("wheelImg");

var wheelSpeed = 10 + (Math.floor(Math.random() * 300) / 100);

var lastRotation = 0;

setInterval(function() {

    if(wheelSpeed < 0){
        wheelSpeed = 0
    }

    lastRotation += wheelSpeed;   

    wheelImg.style.animationDuration = wheelSpeed + "ms";

    wheelImg.style.transform = 'rotate('+lastRotation+'deg)';

    wheelSpeed -= 0.02;

}, 1)

function generateRandomNumber() {
    var min = 0.01,
        max = 0.03,
        highlightedNumber = Math.random() * (max - min) + min;
};

/*

function rotate_degree(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle +=360 : angle;
}

*/

//Math.Floor(rotation)
//rotation / 45 = posicao
//Categoria[posicao]
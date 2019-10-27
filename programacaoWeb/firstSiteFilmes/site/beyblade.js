var beyblade1 = document.getElementById("beyblade1")

var gameArea = document.getElementById("gameArea")

var position = 0

var rightKey = false

function init() {

    beyblade1.style.left = 200 + "px"
    beyblade1.style.top = 200 + "px"
}

function onkeyDown(e) {

    if (e.keyCode === 39){
        beyblade1.style.left = parseInt(beyblade1.style.left) + 5 + "px"
    }
}

function onkeyUp(e) {
    if(e.keyCode === 39) {
        
    }
}
init()

window.addEventListener("keydown", onkeyDown)

window.addEventListener("keyup", onkeyUp)






//Guardar Jogadores
var players = []


//Player Position
function setPosition(playerImg, playerId){

    //Get game Area
    var gameArea = document.getElementById("gameArea")

    //Position Player
    var img = document.createElement("img")
    img.id = playerId
    img.src = playerImg
    gameArea.appendChild(img)

    //Set player general Styles
    img.style.position = "absolure"
    img.style.width = "10vw"
    img.style.height = "10vw"
    img.style.userSelect = "none"
    img.style.transitionDuration = "1s"
    img.style.animationIterationCount = "infinite"
    img.style.animationDuration = "15ms"
    img.style.animationTimingFunction = "linear"
    img.style.animationName = "rotateMe"

    var gameAreaHeight = gameArea.clientHeight

    img.style.marginTop = gameAreaHeight + "px"
}

function init() {

    //New Player
    let player1 = {
        id: "player1",
        img: "Images/Player1.png"
    }

    setPosition(player1.img, player1.id)

    //Save player
    players.push(player1)

}

//init()







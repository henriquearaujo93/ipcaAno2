//Guardar Jogadores
var players = [] 

var player1
var player1PosY
var player1PosX

//Keys
var keys = {
    up: false,
    down: false,
    left: false,
    right: false
}

window.onkeydown = function(e){

    if (e.keyCode === 37)
    {
        keys.left  = true
    } 
    else if (e.keyCode === 38){
        keys.up = true
    } 
    else if (e.keyCode === 39)
    {
        keys.right = true
    } 
    else if (e.keyCode === 40)
    {
        keys.down  = true
    } 
}

window.onkeyup = function(e) {

    if (e.keyCode === 37)
    {
        keys.left  = false
    } 
    else if (e.keyCode === 38){
        keys.up = false
    } 
    else if (e.keyCode === 39)
    {
        keys.right = false
    } 
    else if (e.keyCode === 40)
    {
        keys.down  = false
    }
}

//Player Position
function setPosition(playerImg, playerId){

    //Get game Area
    var gameArea = document.getElementById("gameArea")

    //Position Player
    var img = document.createElement("img")
    img.id = playerId
    img.src = playerImg
    
    //Set player general Styles
    img.style.position = "absolute" 
    img.style.width = "10vw"
    img.style.height = "10vw"
    img.style.userSelect = "none"
    //img.style.transitionDuration = "1s"
    img.style.animationIterationCount = "infinite"
    img.style.animationDuration = "15ms"
    //img.style.animationTimingFunction = "linear"
    img.style.animationName = "rotateMe"
    img.style.borderRadius = "50%"

    gameArea.appendChild(img)

    var gameAreaHeight = gameArea.clientHeight
    var gameAreaWidth = gameArea.clientWidth

    //Get img Center
    var imgHeight = img.clientHeight / 2

    //Get player position
    var playerPosition = gameAreaHeight/2
     
    //Set player position
    if(playerId == "player1")
    {
        img.style.marginTop = (playerPosition - imgHeight) + "px"
    } 
    else if (playerId == "player2")
    {
        img.style.marginTop = (playerPosition - imgHeight) + "px"
        img.style.marginLeft = (gameAreaWidth - img.clientWidth) + "px"
    }
}

//Player controller
function movePlayer()
{
    player1 = document.getElementById("player1")

    player1PosY = player1.style.marginTop
    player1PosY = Number(player1PosY.replace('px', ''))

    player1PosX = player1.style.marginLeft
    player1PosX = Number(player1PosX.replace('px', ''))

    if(keys.up)
    {
        player1.style.marginTop = (player1PosY - 2) + "px"
    }
    
    if(keys.down)
    {
        player1.style.marginTop = (player1PosY + 2) + "px"
    }

    if(keys.right)
    {
        player1.style.marginLeft = (player1PosX + 2) + "px"
    }
    
    if(keys.left)
    {
        player1.style.marginLeft = (player1PosX - 2) + "px"
    }   
}

function colide()
{
    var player1 = document.getElementById("player1")
    var player2 = document.getElementById("player2")

    //Get Cordenates
    var player1X = player1.offsetLeft   //X
    var player1Y = player1.offsetTop    //Y
    var player1W = player1.offsetWidth  //Width
    var player1H = player1.offsetHeight //Height

    var player2X = player2.offsetLeft   //X
    var player2Y = player2.offsetTop    //Y
    var player2W = player2.offsetWidth  //Width
    var player2H = player2.offsetHeight //Height

    //Colision Logic
    colision1 = (player2X + player2W >= player1X) && (player1X + player1W >= player2X)
    colision2 = (player2Y + player2H >= player1Y) && (player1Y + player1H >= player2Y)

    //If Colide
    if((colision1 && colision2)){
        console.log("Colide");
        player1.style.marginTop = player1PosY + "px"
        player1.style.marginLeft = player1PosX + "px"
        
    }

   

}

function init() {

    //New Players
    let player1 = {
    id: "player1",
    img: "Images/Player1.png"
    }

    let player2 = {
        id: "player2",
        img: "Images/Player1.png"
        }

    setPosition(player1.img, player1.id)
    setPosition(player2.img, player2.id)

    //Save players
    players.push(player1)
    players.push(player2)
}

init()

//Move Player
setInterval(function() {
    movePlayer()
    colide()
}, 1)












//Guardar Jogadores
var players = [] 

var colisionAudio = new Audio("audio/beyblade/32.wav")
colisionAudio.playbackRate = 5

var result = {
    p1: 0,
    p2: 0
}

var player1InitialPos =
{
    marginTop: 0,
    marginLeft: 0
}

var player2InitialPos = 
{
    marginTop: 0,
    marginLeft: 0
}

//Get game Area
var gameArea = document.getElementById("gameArea")

var player1
var player1PosY
var player1PosX

var player2
var player2PosY
var player2PosX

var player1X
var player1Y
var player2X
var player2Y

var player1W
var player1H
var player2W
var player2H

var radii

var distance
var distanceX
var distanceY

var colision = false

var selectedPlayer = 0

//Keys
var keys = {
    up: false,
    down: false,
    left: false,
    right: false
}

//Keys 2
var keys2 = {
    up: false,
    down: false,
    left: false,
    right: false
}

//gif impact animation  
var gifSpark = document.createElement("img")
gifSpark.id = "spark"
gifSpark.src = "Images/spark.gif"
gifSpark.alt = "animated"

gifSpark.style.width = "20vw"
gifSpark.style.height = "20vw"

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

    //P2
    if (e.keyCode === 65)
    {
        this.keys2.left  = true
    } 
    else if(e.keyCode === 87)
    {
        this.keys2.up = true
    }
    else if (e.keyCode === 68)
    {
        this.keys2.right = true
    } 
    else if (e.keyCode === 83)
    {
        this.keys2.down  = true
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

    //P2
    if (e.keyCode === 65)
    {
        this.keys2.left  = false
    } 
    else if(e.keyCode === 87)
    {
        this.keys2.up = false
    }
    else if (e.keyCode === 68)
    {
        this.keys2.right = false
    } 
    else if (e.keyCode === 83)
    {
        this.keys2.down  = false
    } 
}

//Player Position
function setPosition(playerImg, playerId){

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
        player1InitialPos.marginTop = (playerPosition - imgHeight) + "px"
    } 
    else if (playerId == "player2")
    {
        img.style.marginTop = (playerPosition - imgHeight) + "px"
        img.style.marginLeft = (gameAreaWidth - img.clientWidth) + "px"

        player2InitialPos.marginTop = (playerPosition - imgHeight) + "px"
        player2InitialPos.marginLeft = (gameAreaWidth - img.clientWidth) + "px"
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

    player2 = document.getElementById("player2")

    player2PosY = player2.style.marginTop
    player2PosY = Number(player2PosY.replace('px', ''))

    player2PosX = player2.style.marginLeft
    player2PosX = Number(player2PosX.replace('px', ''))

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
    
    //P2
    if(keys2.up)
    {
        player2.style.marginTop = (player2PosY - 2) + "px"
    }
    
    if(keys2.down)
    {
        player2.style.marginTop = (player2PosY + 2) + "px"
    }

    if(keys2.right)
    {
        player2.style.marginLeft = (player2PosX + 2) + "px"
    }
    
    if(keys2.left)
    {
        player2.style.marginLeft = (player2PosX - 2) + "px"
    }
}

function colide()
{
    var player1 = document.getElementById("player1")
    var player2 = document.getElementById("player2")

    //Get Cordenates
    player1X = player1.offsetLeft   //X
    player1Y = player1.offsetTop    //Y
    player1W = player1.offsetWidth  //Width
    player1H = player1.offsetHeight

    player2X = player2.offsetLeft   //X
    player2Y = player2.offsetTop    //Y
    player2W = player2.offsetWidth  //Width
    player2H = player2.offsetHeight //Height

    //Colision Logic circle
    distanceX = player1X - player2X
    distanceY = player1Y - player2Y
    distance = (distanceX * distanceX) + (distanceY * distanceY)
    radii = (player1W / 2) + (player2W / 2)

    //If Colide beyblades
    if(radii * radii >= distance){

        if(keys.right)
        {
            player1.style.marginLeft = player1PosX + "px"
            player1.style.marginLeft = player1PosX - 100 + "px"
        }
        if (keys.left)
        {
            player1.style.marginLeft = player1PosX + "px"
            player1.style.marginLeft = player1PosX + 100 + "px"
        }
        if(keys.up)
        {
            player1.style.marginTop = player1PosY + "px"
            player1.style.marginTop = player1PosY + 100 + "px"
        }
        if(keys.down)
        {
            player1.style.marginTop = player1PosY + "px"
            player1.style.marginTop = player1PosY - 100 + "px"
        }

        if(keys2.right)
        {
            player2.style.marginLeft = player2PosX + "px"
            player2.style.marginLeft = player2PosX - 100 + "px"
        }
        if(keys2.left)
        {
            player2.style.marginLeft = player2PosX + "px"
            player2.style.marginLeft = player2PosX + 100 + "px"
        }
        if(keys2.up)
        {
            player2.style.marginTop = player2PosY + "px"
            player2.style.marginTop = player2PosY + 100 + "px"
        }
        if(keys2.down)
        {
            player2.style.marginTop = player2PosY + "px"
            player2.style.marginTop = player2PosY - 100 + "px"
        }
        
       colision = true
        
    }
    else
    {
        colision = false

        player1PosY = player1.style.marginTop
        player1PosY = Number(player1PosY.replace('px', ''))

        player1PosX = player1.style.marginLeft
        player1PosX = Number(player1PosX.replace('px', ''))

        player2PosY = player2.style.marginTop
        player2PosY = Number(player2PosY.replace('px', ''))

        player2PosX = player2.style.marginLeft
        player2PosX = Number(player2PosX.replace('px', ''))
    }

    
    //If Colide border Down P1
    if((player1PosY + player1H) >= gameArea.clientHeight)
    {

        //Set Cordenates of colision
        player1.style.marginTop = gameArea.clientHeight - player1H + "px"

        setTimeout(function(){
            player1.style.marginTop = ((gameArea.clientHeight - player1H) - 100) + "px"
        }, 60);

        //colisionBorderDown = true
        //Set Sparkles
        gifSpark.style.marginTop = player1PosY + "px"
        gifSpark.style.marginLeft = (player1PosX - player1W/2) + "px"
    
        gifSpark.style.position = "absolute"
    
        gameArea.appendChild(gifSpark)
    
        setTimeout(function(){
            colisionAudio.play()
            gifSpark.parentNode.removeChild(gifSpark)
            colisionAudio.play()       
        }, 100);
        
    }

    //If Colide Border Up P1
    if(player1PosY <= 0)
    {
        //Set cordenates of colision
        player1.style.marginTop = 0 + "px"

        setTimeout(function(){
            player1.style.marginTop = 100 + "px"
        }, 60);

        //colisionBorderUp = true
        //Set Sparkle Up
        gifSpark.style.marginTop = (player1PosY - player1H) + "px"
        gifSpark.style.marginLeft = (player1PosX - player1W/2) + "px"

        gifSpark.style.position = "absolute"

        gameArea.appendChild(gifSpark)

        setTimeout(function(){
            colisionAudio.play()
            gifSpark.parentNode.removeChild(gifSpark)
            colisionAudio.play()       
        }, 100);
    }

    //If Colide border Down P2
    if((player2PosY + player2H) >= gameArea.clientHeight)
    {

        //Set Cordenates of colision
        player2.style.marginTop = gameArea.clientHeight - player2H + "px"

        setTimeout(function(){
            player2.style.marginTop = ((gameArea.clientHeight - player2H) - 100) + "px"
        }, 60);

        //colisionBorderDown = true
        //Set Sparkles
        gifSpark.style.marginTop = player2PosY + "px"
        gifSpark.style.marginLeft = (player2PosX - player2W/2) + "px"
    
        gifSpark.style.position = "absolute"
    
        gameArea.appendChild(gifSpark)
    
        setTimeout(function(){
            colisionAudio.play()
            gifSpark.parentNode.removeChild(gifSpark)
            colisionAudio.play()       
        }, 100);
        
    }

    //If Colide Border Up P1
    if(player2PosY <= 0)
    {
        //Set cordenates of colision
        player2.style.marginTop = 0 + "px"

        setTimeout(function(){
            player2.style.marginTop = 100 + "px"
        }, 60);

        //colisionBorderUp = true
        //Set Sparkle Up
        gifSpark.style.marginTop = (player2PosY - player2H) + "px"
        gifSpark.style.marginLeft = (player2PosX - player2W/2) + "px"

        gifSpark.style.position = "absolute"

        gameArea.appendChild(gifSpark)

        setTimeout(function(){
            colisionAudio.play()
            gifSpark.parentNode.removeChild(gifSpark)
            colisionAudio.play()       
        }, 100);
    }
}

function matchResult()
{
    //Se player 2 Marcar
   if(player2.style.marginLeft == (- player2W) + "px")
    {
        //Change result
        result.p2 += 1
        document.querySelector("#player2Result").innerHTML = "Player2: " + result.p2

        //Back to initial Position
        player1.style.transitionDuration = "2s"
        player2.style.transitionDuration = "2s"

        player2.style.marginTop = player2InitialPos.marginTop
        player2.style.marginLeft = player2InitialPos.marginLeft
        player1.style.marginTop = player1InitialPos.marginTop
        player1.style.marginLeft = player1InitialPos.marginLeft


        setTimeout(function(){
            player1.style.transitionDuration = ""
            player2.style.transitionDuration = ""
         }, 2000);
    }

    //Se player 1 Marcar
    if(player1.style.marginLeft == gameArea.clientWidth + "px")
    {
        result.p1 += 1
        document.querySelector("#player1Result").innerHTML = "Player1: " + result.p1

        //Back to initial Position
        player1.style.transitionDuration = "2s"
        player2.style.transitionDuration = "2s"

        player2.style.marginTop = player2InitialPos.marginTop
        player2.style.marginLeft = player2InitialPos.marginLeft
        player1.style.marginTop = player1InitialPos.marginTop
        player1.style.marginLeft = player1InitialPos.marginLeft


        setTimeout(function(){
            player1.style.transitionDuration = ""
            player2.style.transitionDuration = ""
         }, 2000);
    }
}

function setSparkle(){

    if(colision)
    {
        gifSpark.style.marginLeft = (((player1PosX + player2PosX)/2) - radii/2) + "px"
        gifSpark.style.marginTop = (((player1PosY + player2PosY)/2) - radii/2) + "px"

        gifSpark.style.position = "absolute"

        gameArea.appendChild(gifSpark)

        setTimeout(function(){
            colisionAudio.play()
            gifSpark.parentNode.removeChild(gifSpark)
            colisionAudio.play()       
        }, 100);
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
    setSparkle()
    matchResult()
}, 1)
















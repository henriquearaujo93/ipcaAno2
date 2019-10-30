class Beyblade{

    constructor(id, name, img){

        this.id = id
        this.name = name
        this.img = img
    }

    //Player Position
    setPosition(playerImg, playerId){

        //Get game Area
        var gameArea = document.getElementById("gameArea")

        var img = document.createElement("img")
        img.id = playerId
        img.src = playerImg
        gameArea.appendChild(img)
    }
}
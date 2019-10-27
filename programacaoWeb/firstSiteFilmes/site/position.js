var randomImg = ""

var atempts = 0

var clickOut = false

var imgName = ""

var img = document.getElementsByTagName("img")

var imgs = [...img]

var gameArea = document.getElementById("gameArea")

var gameAreaHeight = gameArea.clientHeight
var gameAreaWidth = gameArea.clientWidth

var bodyHeight = document.body.clientHeight
var bodyWidth = document.body.clientWidth

var avaliableSpaceV = bodyHeight - gameAreaHeight
var avaliableSpaceH = bodyWidth - gameAreaWidth

var imgsHeight = imgs[0].clientHeight

var imgsWidth = imgs[0].clientWidth

var gameAreaMargin = window.getComputedStyle(gameArea).getPropertyValue("margin-left")
gameAreaMargin = gameAreaMargin.match(/\d+/)[0]

function moveImages() {

    imgs.forEach(Element => {

        var randomPositionV = Math.random() * (avaliableSpaceV - (bodyHeight - imgsHeight)) + (bodyHeight - imgsHeight);
        var randomPositionH = Math.random() * (((bodyWidth - gameAreaMargin) - imgsWidth) - (avaliableSpaceH - gameAreaMargin)) + (avaliableSpaceH - gameAreaMargin);

        Element.style.top = randomPositionV + "px"
        Element.style.left = randomPositionH + "px"

    });
}

function selectRandomImg()
{

    if(imgs.length == 0)
    {
        alert("Parabéns, Você ganhou")
    }

    randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    var indexImage = imgs.indexOf(randomImg)

    imgs.splice(indexImage, 1)

    document.querySelector("#imgToFind").innerHTML = "Encontre o: " + randomImg.alt
}

function clickImage() {

    imgs.forEach(Element => {

        Element.addEventListener('click', event => {

            if(Element == randomImg)
            {
                Element.parentNode.removeChild(Element)
                selectRandomImg()
            }else {
                if (atempts == 2)
                {
                    
                    var jokerImg = document.createElement('img')
                    jokerImg.src = "Images/position/Joker.png"

                    document.getElementById("lose").appendChild(jokerImg)

                    var audio = new Audio("audio/position/Joker.mp3")
                    audio.play()
                    alert("Você PERDEU!! HAHAHAHA!!!")

                    setTimeout(function(){
                        window.location.reload(1);
                     }, 5000);

                }else {
                    alert("Você Errou!! Tente outra vez")
                    atempts += 1
                    document.querySelector("#atempts").innerHTML = "Tentativas: " + atempts + "/3"
                }
            }     
        })
    })

    selectRandomImg()

}
moveImages()

clickImage()
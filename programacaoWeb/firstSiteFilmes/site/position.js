/*
var cheeseCake = document.getElementById("img1")
var cake = document.getElementById("img2")
var sugarPlam = document.getElementById("img3")

var allImages = [cheeseCake, cake, sugarPlam]

function ClickImage(){
    cheeseCake.parentNode.removeChild(img1)
}
*/

var click = false

var imgName = ""

var points = 0

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

function randomImg(img) {

    return img[Math.floor(Math.random() * img.length)];

}

function moveImages() {

    imgs.forEach(Element => {

        var randomPositionV = Math.random() * (avaliableSpaceV - (bodyHeight - imgsHeight)) + (bodyHeight - imgsHeight);
        var randomPositionH = Math.random() * (((bodyWidth - gameAreaMargin) - imgsWidth) - (avaliableSpaceH - gameAreaMargin)) + (avaliableSpaceH - gameAreaMargin);

        Element.style.top = randomPositionV + "px"
        Element.style.left = randomPositionH + "px"

    });
}

function clickOutImage() {

    gameArea.addEventListener("click", function (event) {

        points += 1

        points -= 2
        document.querySelector("#points").innerHTML = "Pontos: " + points

    })

}

function clickImage() {

    let imgToFind = randomImg(imgs)

    let imgName = ""

    if (imgToFind === imgs[0]) {
        imgName = "Chease Cake"
    } else if (imgToFind === imgs[1]) {
        imgName = "Bolo"
    } else if (imgToFind === imgs[2]) {
        imgName = "Bom Bom"
    }

    document.querySelector("#imgToFind").innerHTML = "Encontre O: " + imgName

    imgToFind.addEventListener("click", function (event) {

        imgToFind.parentNode.removeChild(imgToFind)
        console.log("Acertou")
        points += 5
        document.querySelector("#points").innerHTML = "Pontos: " + points

    })

}

moveImages()
clickImage()
clickOutImage()
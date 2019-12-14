var date = "; expires= Thu, 1 Jan 2020 12:00:00 UTC";
var dateOld = "; expires= Tue, 1 Jan 1970 12:00:00 UTC";
var scores = document.getElementById("scores");

function GenCookie(){
    var nome = document.getElementById("nome").value;
    var num = document.getElementById("num").value;

    //document.cookie = "nomeVar=Value; expire=15 Dec 2019 12:00:00";
    document.cookie = nome+"="+num+date;
}

function ShowCookie(){

    scores.innerHTML = document.cookie;

}

function DelCookie(){

    var cookiesArray = document.cookie.split(";");
    console.log(cookiesArray);

    for(i = 0; i < cookiesArray.length; i++){

        DemolishCookie(cookiesArray[i].split("=")[0])
    }

    scores.innerHTML = document.cookie;
}

function DemolishCookie(cookieName){
    document.cookie = cookieName+"=0"+dateOld;
}
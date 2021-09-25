
var backBTN = document.getElementById("btnVoltar");
var gabrielBTN = document.getElementById("gabriel");
var rodrigoBTN = document.getElementById("rodrigo");
var viniciusBTN = document.getElementById("vinicius");
var caioBTN = document.getElementById("caio");

backBTN.addEventListener("click",function(){
    returnHome();
});

function returnHome(){
    let url = window.location.href.split("pages");
    window.location.assign(url[0] + "index.html");
}


gabrielBTN.addEventListener("click",function(){
    navigate("gabriel");
});

rodrigoBTN.addEventListener("click",function(){
    navigate("rodrigo");
});

viniciusBTN.addEventListener("click",function(){
    navigate("vinicius");
});

caioBTN.addEventListener("click",function(){
    navigate("caio");
});


function navigate(ref){
    //alert("Não implementado. Ref 👉 " + ref);
    window.location.assign("integrantes/" + ref + "/" + ref + ".html");
}
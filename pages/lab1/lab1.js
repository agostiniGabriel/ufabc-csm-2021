
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
    navigate("gabriel.html");
});

rodrigoBTN.addEventListener("click",function(){
    navigate("rodrigo.html");
});

viniciusBTN.addEventListener("click",function(){
    navigate("vinicius.html");
});

caioBTN.addEventListener("click",function(){
    navigate("caio.html");
});


function navigate(ref){
    alert("Não implementado. Ref 👉 " + ref);
    //window.location.assign("integrantes/" + ref);
}

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
    navigate("gabriel", false);
});

rodrigoBTN.addEventListener("click",function(){
    const urlRodrigo = 'https://rodrigocassimiro.github.io/index.html';
    navigate(urlRodrigo, true);
});

viniciusBTN.addEventListener("click",function(){
    const urlVinicius = 'https://vnasserb.github.io/index.html';
    navigate(urlVinicius,true);
});

caioBTN.addEventListener("click",function(){
    navigate("caio",false);
});


function navigate(ref, external){
    //alert("Não implementado. Ref 👉 " + ref);
    if(external){
        window.location.assign(ref);
    } else {
        window.location.assign("integrantes/" + ref + "/" + ref + ".html");
    }
    
}
document.getElementById("lab1").addEventListener("click", function(){
    navigate("lab1");
});

document.getElementById("lab2").addEventListener("click", function(){
    navigate("lab2");
});

function navigate(ref){
    console.log("@@@ Navegando para " + ref);
    window.location.assign('pages/'+ ref +'/' + ref + ".html");
}


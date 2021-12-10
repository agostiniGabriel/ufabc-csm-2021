document.getElementById("lab1").addEventListener("click", function(){
    navigate("lab1");
});

document.getElementById("lab2").addEventListener("click", function(){
    navigate("lab2");
});

document.getElementById("lab3").addEventListener("click", function(){
    navigate("lab3");
});

document.getElementById("lab4").addEventListener("click", function(){
    navigate("lab4");
});

document.getElementById("lab5").addEventListener("click", function(){
    navigate("lab5");
});

document.getElementById("lab6").addEventListener("click", function(){
    navigate("lab6");
});

document.getElementById("lab7").addEventListener("click", function(){
    navigate("lab7");
});


document.getElementById("lab8").addEventListener("click", function(){
    navigate("lab8");
});

function navigate(ref){
    console.log("@@@ Navegando para " + ref);
    window.location.assign('pages/'+ ref +'/' + ref + ".html");
}



var backBTN = document.getElementById("btnVoltar");
var colabBTN1 = document.getElementById('btnColab1');
var colabBTN2 = document.getElementById('btnColab2');

backBTN.addEventListener("click",function(){
    returnHome();
});

colabBTN1.addEventListener('click',function(){
    window.location.assign('https://colab.research.google.com/drive/12LCoU4Lli41FHcyf6w1F3ry0SdnxphqN?usp=sharing')
});


colabBTN2.addEventListener('click',function(){
    window.location.assign('https://colab.research.google.com/drive/1M5AxLI2u0_XtZpU8w5kH3YL7ugripJ0h?usp=sharing')
});


function returnHome(){
    let url = window.location.href.split("pages");
    window.location.assign(url[0] + "index.html");
}

function navigate(ref, external){
    //alert("Não implementado. Ref 👉 " + ref);
    if(external){
        window.location.assign(ref);
    } else {
        window.location.assign("integrantes/" + ref + "/" + ref + ".html");
    }
    
}

var backBTN = document.getElementById("btnVoltar");
var colabBTN = document.getElementById('btnColab');

backBTN.addEventListener("click",function(){
    returnHome();
});

colabBTN.addEventListener('click',function(){
    window.location.assign('https://colab.research.google.com/drive/1DL_jiLg_qnakZRtkcMGMiz8ksokoKOgt?usp=sharing')
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
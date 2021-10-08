
var backBTN = document.getElementById("btnVoltar");
var colabBTN = document.getElementById('btnColab');
var execBTN = document.getElementById('btnExec');
const bolinhas = document.querySelectorAll('[animated]');
var control = true;


execBTN.addEventListener("click",function(){
    console.log(bolinhas);
    pause();   
});

backBTN.addEventListener("click",function(){
    returnHome();
});

colabBTN.addEventListener('click',function(){
    window.location.assign('https://colab.research.google.com/drive/1rAIHQuJ-4AylbzyrfjYZGdFCeph5G_tE#scrollTo=tnMyvbgoeYqH')
});

function returnHome(){
    let url = window.location.href.split("pages");
    window.location.assign(url[0] + "index.html");
}

function pause(){
    if(control){
        bolinhas.forEach(animation =>{
            const running = animation.style.animationPlayState || 'paused';
            animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
        });
    }
}




function navigate(ref, external){
    //alert("Não implementado. Ref 👉 " + ref);
    if(external){
        window.location.assign(ref);
    } else {
        window.location.assign("integrantes/" + ref + "/" + ref + ".html");
    }
    
}
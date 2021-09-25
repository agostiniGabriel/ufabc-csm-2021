
var unchartedURL = 'https://www.youtube.com/embed/hh5HV4iic1Y';
var gowURL = 'https://www.youtube.com/embed/FyIwEFXOcaE';

var gitRedirect = document.getElementById('linkGit');
var linkedinRedirect = document.getElementById('linkLinkedin');

gitRedirect.addEventListener('click',function(){
    document.location.assign('https://github.com/agostiniGabriel');
});

linkedinRedirect.addEventListener('click',function(){
    document.location.assign('https://www.linkedin.com/in/gabriel-agostini-ribeiro/');
});

var unchartedBTN = document.getElementById('uncharted');
var gowBTN = document.getElementById('gow');
var videoTAG = document.getElementById('gameplayTrailer');

unchartedBTN.addEventListener("click", function(){
    videoTAG.setAttribute('src', unchartedURL);
});

gowBTN.addEventListener("click", function(){
    videoTAG.setAttribute('src', gowURL);
});
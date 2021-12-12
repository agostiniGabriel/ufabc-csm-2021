const backBTN = document.getElementById("btnVoltar");
const btnGroup = document.getElementById('buttons');
const colabScript = document.getElementById('colabScript');
const contentDiv = document.getElementById('content');

const notebooks = {
    gabriel:'colabGabriel',
    caio:'colabCaio',
    rodrigo:'colabRodrigo',
    vinicius:'colabVinicius',
    grupo:'grupo',
    integrantes:'integrantes'
}

btnGroup.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const { id } = event.target;
  switchNotebook(id);
});

function switchNotebook(id){
    //window.open(url, '_blank').focus();
    const div2Show = notebooks[id];
    const elements = parseElements(document.getElementsByClassName('audioItem'));
    switchButtonClass(id);
    console.log(div2Show);
    elements.map(element=>{
        console.log(element.id);
        element.id == div2Show ? element.setAttribute('style','width:100%;') : element.setAttribute('style','visibility: collapse;width:0%;');
    });
}

backBTN.addEventListener("click",function(){
    returnHome();
});

function returnHome(){
    let url = window.location.href.split("pages");
    window.location.assign(url[0] + "index.html");
}

function parseElements(HTML_LIST){
    let list = [];
    for(let i = 0; i<HTML_LIST.length;i++){
        list.push(HTML_LIST.item(i));
    }
    return list;
}

function switchButtonClass(id){
    const btns = btnGroup.childNodes;
    btns.forEach(btn=>{
        if(btn.nodeName === 'BUTTON'){
            btn.id === id ? btn.className ='selectedButton' : btn.className ='button';
        };
    });
    console.log(btns);
}
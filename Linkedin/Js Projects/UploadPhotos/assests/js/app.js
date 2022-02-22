let index = 0;
let url = '';

function init() {
    let up = document.querySelector('#uploadPhoto');
    up.click();
}

function startUp(){
    let file = document.querySelector('#uploadPhoto').files[0];
    console.log(file.length);
    
    url = URL.createObjectURL(file);
    console.log(url);
    
    let title = document.querySelector('#photo-title').value;
    let desc = document.querySelector('#photo-desc').value;

    index++;
    let html = `<div class="photoWrapper" id="s${index}"><h4 class="title-photo">${title}</h4><p>${desc}</p></div>`;
    
    document.querySelector('.container-photos').innerHTML += html;
    
    setTimeout(insert,3000);
    
}
function insert(){
    let css =`url("${url}")`;
    let id = 's'+index;
    
    console.log('CSS: '+css+' Id: '+id);
    let doc = document.getElementById(id);
    doc.style.backgroundImage = css;
}

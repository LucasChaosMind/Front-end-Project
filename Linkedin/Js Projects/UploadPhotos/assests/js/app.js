function init(){
    let up = document.querySelector('#uploadPhoto');
    up.click();
}
function startUp(){
    let file = document.querySelector('#uploadPhoto').files;
    console.log(file.length);
    
    let url = URL.createObjectURL(file[0]);
    console.log(url);
    
    let title = document.querySelector('#photo-title').value;
    console.log(title);

    let desc = document.querySelector('')

    html = ``;
    
    document.getElementById('area').appendChild(img);
    
}
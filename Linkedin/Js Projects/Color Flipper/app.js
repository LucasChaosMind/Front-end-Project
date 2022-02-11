function ramdomic_hexadecimal(){
    return '#'+parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
}
function hex(){
    let color = ramdomic_hexadecimal();
    document.getElementsByClassName('container')[0].style='background-color: '+color+' ;';
    document.querySelector('.color').innerHTML = color;
}
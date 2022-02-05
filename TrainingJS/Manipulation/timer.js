function showTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let text = hour+':'+min+':'+sec;

    document.querySelector('.timeNow').innerHTML = text;
}

//Timer vai execultar função a cada x tempo
let timer;

function go(){
    timer = setInterval(showTime, 1000);
}
function stop(){
    clearInterval(timer);
}


//timmer que executa função após o tempo selecionado
function wait(){
    alert('System On now!');
}
function timerGo(){
    setTimeout(wait,8000);
}
function timerStop(){
    clearTimeout(timer);
    alert('Stoped!');
}
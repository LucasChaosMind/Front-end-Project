async function loadPosts(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    makeBlog(json);
}
function makeBlog(json){
    let html = '';

    for(let i in json){
        html+= `<div class="post"><h3 class="title">${json[i].title}</h3> <p class="body">${json[i].body}</p></div>`;
    }
    document.querySelector(".posts").innerHTML = html;
}
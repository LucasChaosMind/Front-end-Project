async function syncPost(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Teste Chaos',
            body: 'Body Chaos',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}
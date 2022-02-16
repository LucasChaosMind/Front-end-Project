async function upFile(){
    let arq = document.querySelector('.upFile').files;
    let body = new FormData();
    body.append('Arquivo ChaosMind','Test Function');
    body.append('File',arq);

    let req =  await fetch('http://127.0.0.1:5500/Front-end-Project/TrainingJS/Requsitions/',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

}
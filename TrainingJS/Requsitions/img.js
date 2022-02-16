function imgWrapper(){
    let fileImg = document.getElementById('img').files[0];
    
    let img = document.createElement('img');
    img.src = URL.createObjectURL(fileImg);
    img.width = 1326;
    img.height = 595;
    
    document.getElementById('area').appendChild(img);
}

//Ouu

function imgFileReader(){
    let reader = new FileReader();
    let fileImg = document.getElementById('img').files[0];
    
    //Callback da função readAsDataURL
    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 1326;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(fileImg);
}
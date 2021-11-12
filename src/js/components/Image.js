var imgArray = new Array();
const defaultImg = 0;

imgArray[0] = new Image();
imgArray[0].src = 'media/img/Rectangle 15.png';

imgArray[1] = new Image();
imgArray[1].src = 'media/img/Rectangle 16.png';

imgArray[2] = new Image();
imgArray[2].src = 'media/img/Rectangle 17.png';

imgArray[3] = new Image();
imgArray[3].src = 'media/img/Rectangle 18.png';

imgArray[4] = new Image();
imgArray[4].src = 'media/img/Rectangle 19.png';

imgArray[5] = new Image();
imgArray[5].src = 'media/img/Rectangle 20.png';

function selectImage(imgind){  
    document.getElementById('fotoGran').src = imgArray[imgind].src;
}

function getImage(imgind){
    if (imgind == null){
        return imgArray[defaultImg];
    }else{
        return imgArray[imgind];
    }
}
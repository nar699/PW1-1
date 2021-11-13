document.getElementById('submit-accept').addEventListener('click', saveTask);
var ImgSelected;

function saveTask(){

    var ttitle = document.getElementById('title').value;
    var tdeadline = document.getElementById('date').value;
    var tcategory = document.getElementById('category').value;
    var tdesciption = document.getElementById('text').value;
    var tcompleted = document.getElementById('checkbox1').checked;
    newTask(getImage(ImgSelected),ttitle,tdeadline,tcategory,tdesciption,tcompleted);
    sendToTask();
}

function sendToTask(){
    window.location.href="index.html";
}

function uploadImg(image){
    selectImage(image);
    ImgSelected = image;
}
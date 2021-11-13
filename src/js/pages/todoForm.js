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
/*
function drawCategoryList(){
    var list = getCategoryList();
    select = document.getElementById('category');
    select.innerHTML="";

    for(var i = 0; i < list.length; i++){
        var row = select.insertRow(i);
        
        optionCell = row.insertCell(2);

        colorCell.innerHTML = list[i].color;
        nameCell.innerHTML = list[i].name;

        var inputButton = document.createElement('input');
        inputButton.type = 'button';
        inputButton.value = 'X';
        inputButton.id = list[i].id;
        inputButton.addEventListener('click', function() { deleteCategory(this.id)}); 
        
        buttonCell.appendChild(inputButton);
        tbody.appendChild(row);
    }
}
*/
function sendToTask(){
    window.location.href="index.html";
}

function uploadImg(image){
    selectImage(image);
    ImgSelected = image;
}
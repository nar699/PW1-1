//import exemples from "./exemples";
document.getElementById('submit-category').addEventListener('click', saveCategory);
drawCategoryTable();

function saveCategory() {

    var ccategory = document.getElementById('catName').value;
    var ccolor = document.getElementById('color').value;
    newCategory(ccategory, ccolor);
    drawCategoryTable();
}

function drawCategoryTable() {
    var list = getCategoryList();
    tbody = document.getElementById('catTableBody');
    tbody.innerHTML="";

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        buttonCell = row.insertCell(0)
        colorCell = row.insertCell(1),
        nameCell = row.insertCell(2);

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

function deleteCategory(id){
    console.log(id);
    proceedDelete(id);
    drawCategoryTable();
}

// On load, perform initial render..
/*namesList.render(AppState.get(), "user-list-container");
userForm.render("add-user-container");
userCount.render(AppState.get(), "user-count-container");*/
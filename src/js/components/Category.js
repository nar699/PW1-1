//No esta comprovat si funciona

var categoryList = [];
categoryList = getCategoryList();

function newCategory(catname,catcolor){
    var newCategory = {
      name : catname,
      color : catcolor,
    };
    
    categoryList.push(newCategory)
    console.log(newCategory);
    storeCategoriesJSON(categoryList);

  }

  function getCategoryList(){
    var storedCategoriesList= localStorage.getItem('localCategoryList');
    if(storedCategoriesList == null){
       categoryList = [];
    }
    else{
        categoryList = JSON.parse(storedCategoriesList);
    }
    return categoryList;
  }

  function storeTasksJSON(categorieslist){
    localStorage.setItem('localCategoryList', JSON.stringify(categorieslist));
  }



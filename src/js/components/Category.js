//No esta comprovat si funciona

var categoryList = [];
categoryList = getCategoryList();
localStorage.removeItem('localCategoryList');

function newCategory(catname, catcolor) {
  var newCategory = {
    id: nextID(),
    name: catname,
    color: catcolor,
  };

  categoryList.push(newCategory)
  console.log(newCategory);
  storeCategoriesJSON(categoryList);

}

function nextID() {
  return categoryList.length;
}

function getCategoryList() {
  var storedCategoriesList = localStorage.getItem('localCategoryList');
  if (storedCategoriesList == null) {
    categoryList = [];
  }
  else {
    categoryList = JSON.parse(storedCategoriesList);
  }
  return categoryList;
}

function storeCategoriesJSON(categorieslist) {
  localStorage.setItem('localCategoryList', JSON.stringify(categorieslist));
}

function proceedDelete(id){
  list = getCategoryList();
  list.splice(id,id+1);
  storeCategoriesJSON(list);
  categoryList = getCategoryList();
  console.log(categoryList.length);
}

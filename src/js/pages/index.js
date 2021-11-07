import exemples from "./exemples";




// On load, perform initial render..
namesList.render(AppState.get(), "user-list-container");
userForm.render("add-user-container");
userCount.render(AppState.get(), "user-count-container");
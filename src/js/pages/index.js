import{IndexView} from "../components/IndexView.js";
import {Store} from "../components/Store.js";

//import {List} from "../components/List(nidea).js";

//let store = new Store();
document.addEventListener("DOMContentLoaded",()=>{
    
    let store = new Store();
    let indexView = new IndexView(document.getElementById("container"), store)
    indexView.render();
});

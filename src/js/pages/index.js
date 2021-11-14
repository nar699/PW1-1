import{IndexView} from "../components/IndexView.js";
import{Index2View} from "../components/Index2view.js";
import {Store} from "../components/Store.js";


//let store = new Store();
document.addEventListener("DOMContentLoaded",()=>{
    //part dreta
    let store = new Store();

    let indexView = new IndexView(document.getElementById("container"), store)
    indexView.render();
    //part esq
    let index2View = new Index2View(document.getElementById("container2"))
    index2View.render();




});

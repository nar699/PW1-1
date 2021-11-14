import{IndexView} from "../components/IndexView.js";
import{Index2View} from "../components/Index2View.js";
import {Store} from "../components/Store.js";


//let store = new Store();
document.addEventListener("DOMContentLoaded",()=>{
    //part dreta
    let store = new Store();

    //part esq
    let index2View = new Index2View(document.getElementById("container2"),store);
    index2View.render();

   // part dreta
   let indexView = new IndexView(document.getElementById("container1"), store)
    indexView.render();




});

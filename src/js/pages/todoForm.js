import{FormView} from "../components/FormView.js";
//import {List} from "../components/List(nidea).js";
import{Store} from "../components/Store.js";

document.addEventListener("DOMContentLoaded",()=>{
    //let list=new List();
    let store = new Store();

    let formView = new FormView(document.getElementById("container"),store)
    formView.render();
});


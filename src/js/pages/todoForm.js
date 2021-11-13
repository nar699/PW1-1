import{FormView} from "../components/FormView.js";
//import {List} from "../components/List(nidea).js";

document.addEventListener("DOMContentLoaded",()=>{
    //let list=new List();

    let formView = new FormView(document.getElementById("container"))
    formView.render();
});


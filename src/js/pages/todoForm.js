import{FormView} from "../components/FormView.js";
//import {List} from "../components/List(nidea).js";
import{Store} from "../components/Store.js";
import{Image} from "../components/Image.js";
import { CatList } from "../components/CatList.js";

document.addEventListener("DOMContentLoaded",()=>{
    //let list=new List();
    let store = new Store();
    let catList = new CatList();
    let img = new Image();
    let formView = new FormView(document.getElementById("container"),store,catList)
    formView.render();
});


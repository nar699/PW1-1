import{Task} from "../components/Task.js";


export class FormView{
    #container;

    #taskForm
    #image = "../media/img/Rectangle 15.png"
    #taskTitle
    #taskDeadline
    #taskcategory
    #taskDescription
    #taskSubmit
    #taskCanek
    #formCompleted

    constructor(container){
        this.#container=container;
    }
    render(){
       //Foto principal
       let selected = document.createElement("div");
       selected.setAttribute("class","fotoGran");
       this.#container.appendChild(selected);

       let fotoGran = document.createElement("img");
       fotoGran.setAttribute("id","fotoGran");
       fotoGran.src = this.#image;

       //Conjunt fotos

       let fotos = document.createElement("div");
       fotos.setAttribute("class","fotos");
       this.#container.appendChild(fotos); 

       this.#container.appendChild(this.#taskForm);
    }
}
import { Task } from "../components/Task.js";
import { Image } from "../components/Image.js";

//clase que conte tota la view de form
//autors: marc, gerard, narcis

export class FormView {
    #container;

    #taskFormNode;
    #image = "../media/img/Rectangle 15.png";
    #taskTitle = {};
    #taskDeadline = {};
    #taskcategory = {};
    #taskDescription = {};
    #taskSubmit = {};
    #taskCancel = {};
    #taskCompleted = {};
    #error;
    #store;
    #CatList;

    #ImgSelected = 0;
    img = new Image();

    constructor(container, store, CatList) {
        this.#store = store;
        this.#CatList = CatList;
        this.#container = container;
    }

    //quan s'apreta el boto d'acceptar es recolliran les dades i s'afegiran a la llista de tasques 
    #addEventListenerToSubmitNode(node) {
        node.addEventListener("click", (event) => {
            event.preventDefault();
            let titleValue = this.#taskTitle["input"].value;
            let DeadlieValue = this.#taskDeadline["input"].value;
            let imageValue = this.img.getImage(this.#ImgSelected);
            let CategoryValue = document.getElementById('category').value;
            let DescriptionValue = this.#taskDescription["input"].value;
            let Completed = document.getElementById('checkbox1').checked;

            // comprovacions de la informacio del formulari
            if (titleValue.length == 0 || titleValue.length > 100) {
                this.#error.innerHTML = "Title required. Maximum 100 characters length.";
                this.update();
                return;
            }

            if (DeadlieValue == ""){
                this.#error.innerHTML = "Deadline required.";
                this.update();
                return;
            }

            if (DescriptionValue.length == 0 || DescriptionValue.length > 1000){
                this.#error.innerHTML = "Description required. Maximum 1.000 characters length.";
                this.update();
                return;
            }

            if (CategoryValue == 'none'){
                this.#error.innerHTML = "Category required.";
                this.update();
                return;
            }
            
            //es crea una tasca i s'afegeix
            const taskId = (this.#store.getTask().length || 0) + 1;
            let task = new Task(taskId, titleValue, DeadlieValue, imageValue, CategoryValue, DescriptionValue, Completed);
            this.#store.addTask(task);
            window.location.href = "index.html";

        });
    }

    //Quan s'apreta el boto de cancell, anira directament al main
    #addEventListenerToCancelNode(node) {
        node.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "index.html";
        });
    }

    //Quan es clica una imatge, la imatge que representa la seleccionada canviara a la s'ha clicat
    #addEventListenerToChangeImageNode(node, id) {
        node.addEventListener("click", (event) => {
            event.preventDefault();

            var newSrc = this.img.selectImage(id);
            document.getElementById('fotoGran').src = newSrc;
            this.#ImgSelected = id;
            this.update();
        });
    }

    update() {
        this.render;
    }
    render() {

        //Foto principal
        let fotoGran = document.createElement("div");
        fotoGran.setAttribute("class", "fotoGran");
        this.#container.appendChild(fotoGran);

        let imgFotoGran = document.createElement("img");

        imgFotoGran.setAttribute("id", "fotoGran");
        imgFotoGran.src = this.img.selectImage(this.#ImgSelected);
        fotoGran.appendChild(imgFotoGran);


        //Conjunt fotos

        let fotos = document.createElement("div");
        fotos.setAttribute("class", "fotos");
        this.#container.appendChild(fotos);
        let picture = document.createElement("picture");
        fotos.appendChild(picture);

        let input0 = document.createElement("input");
        input0.setAttribute("type", "image");
        input0.setAttribute("src", "media/img/Rectangle 15.png");
        input0.setAttribute("alt", "0");
        input0.setAttribute("id", "0");
        this.#addEventListenerToChangeImageNode(input0, input0.id);
        picture.appendChild(input0);

        let input1 = document.createElement("input");
        input1.setAttribute("type", "image");
        input1.setAttribute("src", "media/img/Rectangle 16.png");
        input1.setAttribute("alt", "1");
        input1.setAttribute("id", "1");
        this.#addEventListenerToChangeImageNode(input1, input1.id);
        picture.appendChild(input1);


        let input2 = document.createElement("input");
        input2.setAttribute("type", "image");
        input2.setAttribute("src", "media/img/Rectangle 17.png");
        input2.setAttribute("alt", "2");
        input2.setAttribute("id", "2");
        this.#addEventListenerToChangeImageNode(input2, input2.id);
        picture.appendChild(input2);

        let input3 = document.createElement("input");
        input3.setAttribute("type", "image");
        input3.setAttribute("src", "media/img/Rectangle 18.png");
        input3.setAttribute("alt", "3");
        input3.setAttribute("id", "3");
        this.#addEventListenerToChangeImageNode(input3, input3.id);
        picture.appendChild(input3);

        let input4 = document.createElement("input");
        input4.setAttribute("type", "image");
        input4.setAttribute("src", "media/img/Rectangle 19.png");
        input4.setAttribute("alt", "4");
        input4.setAttribute("id", "4");
        this.#addEventListenerToChangeImageNode(input4, input4.id);
        picture.appendChild(input4);

        let input5 = document.createElement("input");
        input5.setAttribute("type", "image");
        input5.setAttribute("src", "media/img/Rectangle 20.png");
        input5.setAttribute("alt", "5");
        input5.setAttribute("id", "5");
        this.#addEventListenerToChangeImageNode(input5, input5.id);
        picture.appendChild(input5);



        this.#taskFormNode = document.createElement("form");
        this.#taskFormNode.setAttribute("id", "form");
        this.#container.appendChild(this.#taskFormNode);

        //Title

        let title = document.createElement("div");
        title.setAttribute("class", "title");
        this.#taskFormNode.appendChild(title);

        this.#taskTitle["label"] = document.createElement("label");
        let titleSpan = document.createElement("span");
        titleSpan.innerHTML = "Title";
        this.#taskTitle["label"].appendChild(titleSpan);
        title.appendChild(this.#taskTitle["label"]);

        this.#taskTitle["input"] = document.createElement("input");
        this.#taskTitle["input"].setAttribute("id", "title");
        this.#taskTitle["input"].setAttribute("type", "text");
        this.#taskTitle["label"].appendChild(this.#taskTitle["input"]);



        //Deadline
        let deadline = document.createElement("div");
        deadline.setAttribute("class", "deadline");
        this.#taskFormNode.appendChild(deadline);

        this.#taskDeadline["label"] = document.createElement("label");
        let deadlineSpan = document.createElement("span");
        deadlineSpan.innerHTML = "Deadline";
        this.#taskDeadline["label"].appendChild(deadlineSpan);
        deadline.appendChild(this.#taskDeadline["label"]);

        this.#taskDeadline["input"] = document.createElement("input");
        this.#taskDeadline["input"].setAttribute("id", "date");
        this.#taskDeadline["input"].setAttribute("type", "date");
        this.#taskDeadline["label"].appendChild(this.#taskDeadline["input"]);

        //category
        let category = document.createElement("div");
        category.setAttribute("class", "category");
        this.#taskFormNode.appendChild(category);

        this.#taskcategory["label"] = document.createElement("label");
        this.#taskcategory["label"].setAttribute("for", "category");
        let categorySpan = document.createElement("span");
        categorySpan.innerHTML = "Category";
        this.#taskcategory["label"].appendChild(categorySpan);
        category.appendChild(this.#taskcategory["label"]);

        this.#taskcategory["select"] = document.createElement("select");
        this.#taskcategory["select"].setAttribute("id", "category");
        this.#taskcategory["select"].setAttribute("name", "category");
        category.appendChild(this.#taskcategory["select"]);

        let def = document.getElementById("category");
        def.innerHTML ='<option value="none" selected disabled hidden>Select category</option>';
 
        let list = this.#CatList.getCategory();
        for (var i = 0; i < list.length; i++) {
            let option = document.createElement("option");
            let categorySpan1 = document.createElement("span");
            categorySpan1.innerHTML = this.#CatList.getCategory()[i].nameValue;
            option.appendChild(categorySpan1);
            this.#taskcategory["select"].appendChild(option);

        }


        //description

        let description = document.createElement("div");
        description.setAttribute("class", "description");
        this.#taskFormNode.appendChild(description);

        this.#taskDescription["label"] = document.createElement("label");
        this.#taskDescription["label"].setAttribute("for", "description")
        let descriptionSpan = document.createElement("span");
        descriptionSpan.innerHTML = "Description";
        this.#taskDescription["label"].appendChild(descriptionSpan);
        description.appendChild(this.#taskDescription["label"]);

        this.#taskDescription["input"] = document.createElement("input");
        this.#taskDescription["input"].setAttribute("id", "text");
        this.#taskDescription["input"].setAttribute("type", "text");
        description.appendChild(this.#taskDescription["input"]);

        //error

        this.#error = document.createElement("p");
        this.#taskFormNode.appendChild(this.#error);

        //checkbox1

        let checkbox = document.createElement("div");
        checkbox.setAttribute("class", "checkbox1");
        this.#taskFormNode.appendChild(checkbox);

        this.#taskCompleted["label"] = document.createElement("label");
        let completedSpan = document.createElement("span");


        this.#taskCompleted["input"] = document.createElement("input");
        this.#taskCompleted["input"].setAttribute("id", "checkbox1");
        this.#taskCompleted["input"].setAttribute("type", "checkbox");
        this.#taskCompleted["label"].appendChild(this.#taskCompleted["input"]);

        completedSpan.innerHTML = "Completed";
        this.#taskCompleted["label"].appendChild(completedSpan);
        checkbox.appendChild(this.#taskCompleted["label"]);



        //submit cancel

        let cancel = document.createElement("div");
        cancel.setAttribute("class", "submit-cancel");
        this.#taskFormNode.appendChild(cancel);

        this.#taskCancel = document.createElement("input");
        this.#taskCancel.setAttribute("id", "submit-cancel");
        this.#taskCancel.setAttribute("type", "submit");
        this.#taskCancel.setAttribute("value", "Cancel");
        this.#addEventListenerToCancelNode(this.#taskCancel);
        cancel.appendChild(this.#taskCancel);

        //submit accept

        let submit = document.createElement("div");
        submit.setAttribute("class", "submit-accept");

        this.#taskSubmit = document.createElement("input");
        this.#taskSubmit.setAttribute("id", "submit-accept");
        this.#taskSubmit.setAttribute("type", "submit");
        this.#taskSubmit.setAttribute("value", "Accept");
        this.#addEventListenerToSubmitNode(this.#taskSubmit);
        submit.appendChild(this.#taskSubmit);

        this.#taskFormNode.appendChild(submit);

    }
}
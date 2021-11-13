//import{Task} from "../components/Task.js";

export class FormView {
    #container;

    #taskFormNode;
    #image = "../media/img/Rectangle 15.png";
    #taskTitleInputNodes = {};
    #taskDeadline = {};
    #taskcategory = {};
    #taskDescription = {};
    #taskSubmit= {};
    #taskCancel= {};
    #taskCompleted = {};

    #list;

    constructor(container, list) {
        this.#list = list;
        this.#container = container;
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

        imgFotoGran.src = this.#image;
        imgFotoGran.setAttribute("id", "fotoGran");
        imgFotoGran.src = this.#image;
        fotoGran.appendChild(imgFotoGran);


        //Conjunt fotos

        let fotos = document.createElement("div");
        fotos.setAttribute("class","fotos");
        this.#container.appendChild(fotos); 
        let picture = document.createElement("picture");
        fotos.appendChild(picture);

        let input0 = document.createElement("input");
        input0.setAttribute("type","image");
        input0.setAttribute("src","media/img/Rectangle 15.png");
        input0.setAttribute("alt","0");
        input0.setAttribute("id","0");
        input0.setAttribute("onclick","uploadImg(0)");
        picture.appendChild(input0);

        let input1 = document.createElement("input");
        input1.setAttribute("type","image");
        input1.setAttribute("src","media/img/Rectangle 16.png");
        input1.setAttribute("alt","1");
        input1.setAttribute("id","1");
        input1.setAttribute("onclick","uploadImg(1)");
        picture.appendChild(input1);


        let input2 = document.createElement("input");
        input2.setAttribute("type","image");
        input2.setAttribute("src","media/img/Rectangle 17.png");
        input2.setAttribute("alt","2");
        input2.setAttribute("id","2");
        input2.setAttribute("onclick","uploadImg(2)");
        picture.appendChild(input2);

        let input3 = document.createElement("input");
        input3.setAttribute("type","image");
        input3.setAttribute("src","media/img/Rectangle 18.png");
        input3.setAttribute("alt","3");
        input3.setAttribute("id","3");
        input3.setAttribute("onclick","uploadImg(3)");
        picture.appendChild(input3);

        let input4 = document.createElement("input");
        input4.setAttribute("type","image");
        input4.setAttribute("src","media/img/Rectangle 19.png");
        input4.setAttribute("alt","4");
        input4.setAttribute("id","4");
        input4.setAttribute("onclick","uploadImg(4)");
        picture.appendChild(input4);

        let input5 = document.createElement("input");
        input5.setAttribute("type","image");
        input5.setAttribute("src","media/img/Rectangle 20.png");
        input5.setAttribute("alt","5");
        input5.setAttribute("id","5");
        input5.setAttribute("onclick","uploadImg(5)");
        picture.appendChild(input5);
        





        this.#taskFormNode = document.createElement("form");
        this.#taskFormNode.setAttribute("id", "form");
        this.#container.appendChild(this.#taskFormNode);

        //Title

        let title = document.createElement("div");
        title.setAttribute("class", "title");
        this.#taskFormNode.appendChild(title);

        this.#taskTitleInputNodes["label"] = document.createElement("label");
        let titleSpan = document.createElement("span");
        titleSpan.innerHTML = "Title";
        this.#taskTitleInputNodes["label"].appendChild(titleSpan);
        title.appendChild(this.#taskTitleInputNodes["label"]);

        this.#taskTitleInputNodes["input"] = document.createElement("input");
        this.#taskTitleInputNodes["input"].setAttribute("id", "title");
        this.#taskTitleInputNodes["input"].setAttribute("type", "text");
        this.#taskTitleInputNodes["label"].appendChild(this.#taskTitleInputNodes["input"]);



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
        this.#taskcategory["label"].setAttribute("for","category");
        let categorySpan = document.createElement("span");
        categorySpan.innerHTML = "Category";
        this.#taskcategory["label"].appendChild(categorySpan);
        category.appendChild(this.#taskcategory["label"]);

        this.#taskcategory["select"] = document.createElement("select");
        this.#taskcategory["select"].setAttribute("id", "category");
        this.#taskcategory["select"].setAttribute("name", "category");
        category.appendChild(this.#taskcategory["select"]);
/*
        let option1 = document.createElement("option");
        option1.setAttribute("value", "1");
        option1.innerHtML = "1";
        this.#container["selected"].appendChild(option1);

        let option2 = document.createElement("option");
        option2.setAttribute("value", "2");
        option2.innerHtML = "2";
        this.#container["selected"].appendChild(option2);

        let option3 = document.createElement("option");
        option3.setAttribute("value", "3");
        option3.innerHtML = "3";
        this.#container["selected"].appendChild(option3);
        */
        //description

        let description = document.createElement("div");
        description.setAttribute("class", "description");
        this.#taskFormNode.appendChild(description);

        this.#taskDescription["label"] = document.createElement("label");
        this.#taskDescription["label"].setAttribute("for","description")
        let descriptionSpan = document.createElement("span");
        descriptionSpan.innerHTML = "Description";
        this.#taskDescription["label"].appendChild(descriptionSpan);
        description.appendChild(this.#taskDescription["label"]);

        this.#taskDescription["input"] = document.createElement("input");
        this.#taskDescription["input"].setAttribute("id", "text");
        this.#taskDescription["input"].setAttribute("type", "text");
        description.appendChild(this.#taskDescription["input"]);

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

        this.#taskCancel["input"] = document.createElement("input");
        this.#taskCancel["input"].setAttribute("id", "submit-cancel");
        this.#taskCancel["input"].setAttribute("type", "reset");
        this.#taskCancel["input"].setAttribute("value", "Cancel");
        this.#taskCancel["input"].setAttribute("onclick", "sendToTask()");
        cancel.appendChild(this.#taskCancel["input"]);

        //submit accept

        let submit = document.createElement("div");
        submit.setAttribute("class", "submit-accept");
        this.#taskFormNode.appendChild(submit);

        this.#taskSubmit["input"] = document.createElement("input");
        this.#taskSubmit["input"].setAttribute("id", "submit-accept");
        this.#taskSubmit["input"].setAttribute("type", "reset");
        this.#taskSubmit["input"].setAttribute("value", "Accept");
        submit.appendChild(this.#taskSubmit["input"]);









    }
}
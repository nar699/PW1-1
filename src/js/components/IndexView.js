
export class IndexView {
    #container1;
<<<<<<< HEAD
    #taskListNode;

=======
    #taskListNode2;
    allHigh;
>>>>>>> a41e8cc332b41245b604a1622944f139b0c5714d
    #store;
    let
    constructor(container1, store) {
        this.#container1 = container1;
        this.#store = store;
        this.#store.addObserver(this);
        this.render2();
        this.allHigh = false;
    }
    #createTask(task) {
        let taskId = task.taskId;
        let titleValue = task.titleValue;
        let DeadlieValue = task.DeadlieValue;
        let imageValue = task.imageValue;
        let DescriptionValue = task.DescriptionValue;
        console.log("entramos")

        let listItemNode = document.createElement("div");
        listItemNode.setAttribute("class", "taskTotal");


        //parte1
        let checkbox = document.createElement("div");
        checkbox.setAttribute("class", "checkbox1");
        listItemNode.appendChild(checkbox);

        let checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("id", task.taskId);
        checkboxInput.setAttribute("type", "checkbox");
        checkbox.appendChild(checkboxInput);
        //button que no se com fer


        //parte 2
        let parte2 = document.createElement("div");
        parte2.setAttribute("class", "parte2");
        listItemNode.appendChild(parte2);

        let imageP = document.createElement("img");
        imageP.setAttribute("src", imageValue);
        imageP.setAttribute("alt", "1");
        imageP.setAttribute("id", "fotoTask");
        parte2.appendChild(imageP);

        let titleP = document.createElement("h1");
        titleP.setAttribute("id", "titolTask");
        titleP.innerHTML = `${titleValue}`;
        parte2.appendChild(titleP);


        let DeadlieLabel = document.createElement("h3");
        DeadlieLabel.setAttribute("id", "dateTask");
        DeadlieLabel.innerHTML = `${DeadlieValue}`;
        parte2.appendChild(DeadlieLabel);

        let DescriptionP = document.createElement("p");
        DescriptionP.setAttribute("id", "descriptionTask");
        DescriptionP.innerHTML = `${DescriptionValue}`;
        parte2.appendChild(DescriptionP);



        let saltoP = document.createElement("div");
        saltoP.setAttribute("class", "saltoP");
        listItemNode.appendChild(saltoP);

<<<<<<< HEAD
        
      
        /*
        document.getElementByID("buttonSelectAll").addEventListener("click", (event) => {
=======

        document.getElementById("buttonDelete").addEventListener("click", (event) => {
>>>>>>> a41e8cc332b41245b604a1622944f139b0c5714d
            event.preventDefault();

            if (checkboxInput.checked) {
                this.#removeTask(taskId);
            }
        });



        document.getElementById("buttonSelectAll").addEventListener("click", (event) => {
            event.preventDefault();
            if(this.allHigh == false){
                checkboxInput.checked = true;
                this.allHigh = true;
            }
            else{
                checkboxInput.checked = false;
                this.allHigh = false;

            }
<<<<<<< HEAD
            
        });*/
        
=======

        });


>>>>>>> a41e8cc332b41245b604a1622944f139b0c5714d
        return listItemNode;
    }


    #addEventListenerToCheck(node) {

        node.addEventListener("click", (event) => {
            event.preventDefault();



        });
    }


    #changeAllHight(bool) {
        this.allhigh = bool;
    }

    #addTaskToList(task) {
        let taskNode = this.#createTask(task);

        this.#taskListNode.appendChild(taskNode);
    }

    #removeTask(taskId) {
        this.#store.removeTask(taskId);
    }

    update() {
        this.render();
    }

    render2() {

        let parteSuperior1 = document.createElement("div");
        parteSuperior1.setAttribute("class", "parteSuperior1");

<<<<<<< HEAD
        let iconoDuties = document.createElement("img");
        iconoDuties.setAttribute("src","media/img/calendar 1.svg");
        iconoDuties.setAttribute("id","statusImage");
        iconoDuties.setAttribute("width","24");
        iconoDuties.setAttribute("height","24");
=======
        let iconoDuties = document.createElement("src");
        iconoDuties.setAttribute("src", "'media/img/list-status 1.png");
        iconoDuties.setAttribute("id", "statusImage");
        iconoDuties.setAttribute("width", "500");
        iconoDuties.setAttribute("height", "600");
>>>>>>> a41e8cc332b41245b604a1622944f139b0c5714d
        parteSuperior1.appendChild(iconoDuties);

        let duties = document.createElement("h1");
        duties.setAttribute("id", "Duties");
        duties.innerHTML = "Duties";
        parteSuperior1.appendChild(duties);
        this.#container1.appendChild(parteSuperior1);

        let parteSuperior2 = document.createElement("div");
        parteSuperior2.setAttribute("class", "parteSuperior2");

        let buttonSelectAll = document.createElement("button");
        buttonSelectAll.setAttribute("id", "buttonSelectAll");
        buttonSelectAll.innerHTML = "Select all";
        parteSuperior2.appendChild(buttonSelectAll);

        let buttonTick = document.createElement("button");
        buttonTick.setAttribute("id", "buttonTick");
        buttonTick.innerHTML = "✓";
        parteSuperior2.appendChild(buttonTick);

        let buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("id", "buttonDelete");
        buttonDelete.innerHTML = "Delete";

        parteSuperior2.appendChild(buttonDelete);
        this.#container1.appendChild(parteSuperior2);


<<<<<<< HEAD
        if (this.#taskListNode !== undefined) {
            this.#container1.removeChild(this.#taskListNode);
=======
    }
    render() {


        if (this.#taskListNode2 !== undefined) {
            this.#container1.removeChild(this.#taskListNode2);
>>>>>>> a41e8cc332b41245b604a1622944f139b0c5714d
        }


        this.#taskListNode = document.createElement("div");
        this.#taskListNode.setAttribute("class", "task-list");

        this.#store.getTask().forEach((task) => this.#addTaskToList(task));


        this.#container1.appendChild(this.#taskListNode);
    }
}
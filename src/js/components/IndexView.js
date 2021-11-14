
export class IndexView {
    #container1;
    #taskListNode;

    #store;

    constructor(container1, store) {
        this.#container1 = container1;
        this.#store = store;
        this.#store.addObserver(this);
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
        checkboxInput.setAttribute("id", "checkbox1");
        checkboxInput .setAttribute("type", "checkbox");
        checkbox.appendChild(checkboxInput);
        //button que no se com fer
        

        //parte 2
        let parte2 = document.createElement("div");
        parte2.setAttribute("class", "parte2");
        listItemNode.appendChild(parte2);

        let imageP = document.createElement("img");
        imageP.setAttribute("src",imageValue);
        imageP.setAttribute("alt","1");
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

        
      
        /*
        document.getElementByID("buttonSelectAll").addEventListener("click", (event) => {
            event.preventDefault();

            checkboxInput.checked = treu;
           
            
        });
       
        document.getElementByID("delebuttonDeletete").addEventListener("click", (event) => {
            event.preventDefault();

            if(checkboxInput.checked){
                this.#removeTask(taskId);
            }
            
        });*/
        
        return listItemNode;
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

    render() {
        
        let parteSuperior1 = document.createElement("div");
        parteSuperior1.setAttribute("class", "parteSuperior1");

        let iconoDuties = document.createElement("img");
        iconoDuties.setAttribute("src","media/img/calendar 1.svg");
        iconoDuties.setAttribute("id","statusImage");
        iconoDuties.setAttribute("width","24");
        iconoDuties.setAttribute("height","24");
        parteSuperior1.appendChild(iconoDuties);

        let duties = document.createElement("h1");
        duties.setAttribute("id","Duties");
        duties.innerHTML = "Duties";
        parteSuperior1.appendChild(duties);
        this.#container1.appendChild(parteSuperior1);

        let parteSuperior2 = document.createElement("div");
        parteSuperior2.setAttribute("class", "parteSuperior2");

        let buttonSelectAll = document.createElement("button");
        buttonSelectAll.setAttribute("id","buttonSelectAll");
        buttonSelectAll.innerHTML = "Select all";
        parteSuperior2.appendChild(buttonSelectAll);

        let buttonTick = document.createElement("button");
        buttonTick.setAttribute("id","buttonTick");
        buttonTick.innerHTML = "✓";
        parteSuperior2.appendChild(buttonTick);

        let buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("id","buttonDelete");
        buttonDelete.innerHTML = "Delete";
        parteSuperior2.appendChild(buttonDelete);
        this.#container1.appendChild(parteSuperior2);

    

        if (this.#taskListNode !== undefined) {
            this.#container1.removeChild(this.#taskListNode);
        }


        this.#taskListNode = document.createElement("div");
        this.#taskListNode.setAttribute("class", "task-list");

        this.#store.getTask().forEach((task) => this.#addTaskToList(task));
        

        this.#container1.appendChild(this.#taskListNode);
    }
}
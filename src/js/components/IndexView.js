
export class IndexView {
    #container1;
    #taskListNode2;

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

        let buttonP = document.createElement("dd");
        buttonP.setAttribute("class", "buttonTask");
        listItemNode.appendChild(buttonP);

        let deleteButtonNode = document.createElement("button");
        deleteButtonNode.innerHTML = "Delete";
        buttonP.appendChild(deleteButtonNode);
      
        

       

        
        
        deleteButtonNode.addEventListener("click", (event) => {
            event.preventDefault();

            // productId reference is enclosed in the callback scope
            this.#removeTask(taskId);

            // You can also get the prodect id if previously set as a custom attribute
            console.log(event.target.parentNode.getAttribute("data-product-id"));
        });*/
        return listItemNode;
    }

    #addTaskToList(task) {
        let taskNode = this.#createTask(task);

        this.#taskListNode2.appendChild(taskNode);
    }

    #removeTask(taskId) {
        this.#store.removeTask(taskId);
    }

    update() {
        this.render();
    }

    render() {
        


        if (this.#taskListNode2 !== undefined) {
            this.#container1.removeChild(this.#taskListNode2);
        }


        this.#taskListNode2 = document.createElement("div");
        this.#taskListNode2.setAttribute("class", "task-list");

        this.#store.getTask().forEach((task) => this.#addTaskToList(task));
        

        this.#container1.appendChild(this.#taskListNode2);
    }
}
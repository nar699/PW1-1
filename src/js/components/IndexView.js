
export class IndexView {
    #container;
    #taskListNode;

    #store;

    constructor(container, store) {
        this.#container = container;
        this.#store = store;
        this.#store.addObserver(this);
    }
    #createTask(task) {
        let taskId = task.taskId;
        let titleValue = task.titleValue;
        let DeadlieValue = task.DeadlieValue;
        let imageValue = task.DescriptionValue;
        let DescriptionValue = task.DescriptionValue;
        console.log("entramos")
        
      

        let listItemNode = document.createElement("div");
        listItemNode.setAttribute("class", "text");

        let titleP = document.createElement("dt");
        titleP.innerHTML = `${titleValue}`;
        listItemNode.appendChild(titleP);
        

        let DeadlieLabel = document.createElement("dt");
        DeadlieLabel.innerHTML = `${DeadlieValue}`;
        listItemNode.appendChild(DeadlieLabel);

        let DescriptionP = document.createElement("dd");
        DescriptionP.innerHTML = `${DescriptionValue}`;
        listItemNode.appendChild(DescriptionP);

        
        let buttonP = document.createElement("dd");
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
        });
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

        if (this.#taskListNode !== undefined) {
            this.#container.removeChild(this.#taskListNode);
        }
        this.#taskListNode = document.createElement("dl");
        this.#taskListNode.setAttribute("id", "product-list");

        this.#store.getTask().forEach((task) => this.#addTaskToList(task));
        

        this.#container.appendChild(this.#taskListNode);
    }
}
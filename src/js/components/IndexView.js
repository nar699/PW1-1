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
        console.log("entramos")
        
        let listItemNode = document.createElement("li");
        listItemNode.innerHTML = "cositas";
        //listItemNode.setAttribute(`data-product-id`, taskId);
        //listItemNode.innerHTML = `<strong>Product name</strong>: ${titleValue}`;
        //listItemNode.setAttribute(`data-product-id`, taskId);

        let deleteButtonNode = document.createElement("button");
        deleteButtonNode.innerHTML = "Delete";
        listItemNode.appendChild(deleteButtonNode);
        /*deleteButtonNode.addEventListener("click", (event) => {
            event.preventDefault();

            // productId reference is enclosed in the callback scope
            this.#removeTask(taskId);

            // You can also get the prodect id if previously set as a custom attribute
            console.log(event.target.parentNode.getAttribute("data-product-id"));
        });
*/
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
        console.log(this.#store.getTask());
        /*if (this.#taskListNode !== undefined) {
            this.#container.removeChild(this.#taskListNode);
        }*/
        this.#taskListNode = document.createElement("ul");
        this.#taskListNode.setAttribute("id", "product-list");

        this.#store.getTask().forEach((task) => this.#addTaskToList(task));
        

        this.#container.appendChild(this.#taskListNode);
    }
}
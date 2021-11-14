export class Store {
    #tasks = {};
    #observers = [];

    storeTaskesJSON(task) {
        localStorage.setItem('task', JSON.stringify(task));
      }
    addTask(task) {
        this.#tasks[task.id] = task;
        storeTaskesJSON(this.#task);
        this.#notifyObservers();
        
    }

    removeTask(taskId) {
        delete this.#tasks[taskId];
        localStorage.setItem("task",JSON.stringify(this.#tasks));
        console.log("removed");
        this.#notifyObservers();
    }

    getTask() {
        return Object.keys(this.#tasks).map(k => this.#tasks[k]); // Transforms the object into an array
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }
}
export class Store {
    #tasks = {};
    #observers = [];

    constructor(){

        var storedTasks = JSON.parse(localStorage.getItem('task'));
        if(storedTasks == undefined){
            localStorage.setItem('task', JSON.stringify(this.#tasks) )
         }
        this.#tasks =JSON.parse(localStorage.getItem('task'));
    }


    addTask(task) {
        
        this.#tasks[task.taskId] = task;
        localStorage.setItem('task', JSON.stringify(this.#tasks));
        this.#notifyObservers();
        console.log(this.#tasks);
    }

    removeTask(taskId) {
        delete this.#tasks[taskId];
        localStorage.setItem('task',JSON.stringify(this.#tasks));
        this.#notifyObservers();
    }

    getTask() {
        this.#tasks = JSON.parse(localStorage.getItem('task'));
        return Object.keys(this.#tasks).map(k => this.#tasks[k]); // Transforms the object into an array
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }
}
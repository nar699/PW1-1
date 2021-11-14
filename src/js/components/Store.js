/*Classe que contindra la llista de totes les tasques*/ 
//autors: marc, gerard, narcis
export class Store {
    #tasks = {};
    #observers = [];

    /*Constructor que consultara el localStorage per importar les tasques*/ 

    constructor(){
        
        var storedTasks = JSON.parse(localStorage.getItem('task'));
        if(storedTasks == undefined){
            localStorage.setItem('task', JSON.stringify(this.#tasks) )
         }
        this.#tasks =JSON.parse(localStorage.getItem('task'));
    }

    /*S'afegeix una tasca al local storage i a la llista de tasques*/

    addTask(task) {
        
        this.#tasks[task.taskId] = task;
        localStorage.setItem('task', JSON.stringify(this.#tasks));
        this.#notifyObservers();
        console.log(this.#tasks);
    }

     /*S'elimina una tasca al local storage i a la llista de tasques*/

    removeTask(taskId) {
        delete this.#tasks[taskId];
        localStorage.setItem('task',JSON.stringify(this.#tasks));
        this.#notifyObservers();
    }

    /*S'envia la llista de tasques*/

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
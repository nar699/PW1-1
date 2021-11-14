/*Classe que contindra la llista de totes les categories*/ 
//autors: marc, gerard, narcis

export class CatList {
    #categories = {};
    #observers = [];

    /*Constructor que consultara el localStorage per importar les categories*/ 

    constructor(){
        var storedCategories = JSON.parse(localStorage.getItem('cat'));
        if(storedCategories == undefined){
            localStorage.setItem('cat', JSON.stringify(this.#categories) )
         }
        this.#categories =JSON.parse(localStorage.getItem('cat'));
    }

    /*S'afegeix una categoria al local storage i a la llista de categories*/
    addCategory(category) {
        
        this.#categories[category.categoryId] = category;
        localStorage.setItem('cat', JSON.stringify(this.#categories));
        this.#notifyObservers();
        console.log(this.#categories);
    }

    /*S'elimina una categoria al local storage i a la llista de categories*/
    removeCategory(categoryId) {
        delete this.#categories[categoryId];
        localStorage.setItem('cat',JSON.stringify(this.#categories));
        this.#notifyObservers();
    }

    /*S'envia la llista de categories*/
    getCategory() {
        this.#categories = JSON.parse(localStorage.getItem('cat'));
        return Object.keys(this.#categories).map(k => this.#categories[k]); // Transforms the object into an array
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    #notifyObservers() {
        this.#observers.forEach((observer) => observer.update())
    }
}
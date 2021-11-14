export class CatList {
    #categories = {};
    #observers = [];

    constructor(){

        var storedCategories = JSON.parse(localStorage.getItem('cat'));
        if(storedCategories == undefined){
            localStorage.setItem('cat', JSON.stringify(this.#categories) )
         }
        this.#categories =JSON.parse(localStorage.getItem('cat'));
    }


    addCategory(category) {
        
        this.#categories[category.categoryId] = category;
        localStorage.setItem('cat', JSON.stringify(this.#categories));
        this.#notifyObservers();
        console.log(this.#categories);
    }

    removeCategory(categoryId) {
        delete this.#categories[categoryId];
        localStorage.setItem('cat',JSON.stringify(this.#categories));
        this.#notifyObservers();
    }

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
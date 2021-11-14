export class Index2View {
    #container2;
    #categoriaListNode;

    #indexFormNode;
    #imgTodo = "media/img/image 2.png";
    #imgStatus = "media/img/list-status 1.png";
    #imgCheck = "media/img/check 1.png";
    #image = "../media/img/Rectangle 15.png";

    constructor(container2) {
        this.#container2 = container2;
    }

    update() {
        this.render();
    }

    //Render de la part esquerra de l'index.
    render() {
        
        let div1 = document.createElement("div");
        div1.setAttribute("class", "div-1");
        this.#container2.appendChild(div1);

        // Imatge 
        let img = document.createElement("img");
        img.setAttribute("alt", "logo");
        img.setAttribute("src", this.#imgTodo);
        div1.appendChild(img);

        /*
        let text_todo = document.createTextNode("TODO++");
        text_todo.setAttribute("id", "textTodo");
        div1.appendChild(text_todo);
        */

        // BotÃ³ add TODO
        let boton_addTodo = document.createElement("a");
        boton_addTodo.setAttribute("class", "boton-addTodo");
        boton_addTodo.setAttribute("href", "todoForm2.html");
        let addTODO = document.createTextNode("Add TODO");
        boton_addTodo.appendChild(addTODO);
        div1.appendChild(boton_addTodo);
        
        let divaso = document.createElement("div"); 
        div1.appendChild(divaso);

        //Today, All duties i Categories.
        let h3_today = document.createElement("h3");
        h3_today.innerHTML="Today";
        h3_today.setAttribute("id","textToday")
        //textToday.setAttribute("id", "textToday");
        let h3_allduties = document.createElement("h3");
        h3_allduties.innerHTML="All duties";
        h3_allduties.setAttribute("id","allDuties")
        let h3_categories = document.createElement("h3");
        h3_categories.innerHTML="Categories";
        h3_categories.setAttribute("id","categories")
        divaso.appendChild(h3_today);
        divaso.appendChild(h3_allduties);
        divaso.appendChild(h3_categories);

        // Form
        this.#indexFormNode = document.createElement("form");
        this.#indexFormNode.setAttribute("name", "createCategory");
        this.#indexFormNode.setAttribute("id", "createCategory");
        div1.appendChild(this.#indexFormNode);

        let select = document.createElement("select");
        select.setAttribute("name", "color");
        select.setAttribute("id", "color");
        this.#indexFormNode.appendChild(select);
        let option1 = document.createElement("option");
        option1.setAttribute("value", "Red");
        select.appendChild(option1);

        
        

        /*
        // Categoria
        this.#categoriaListNode = document.createElement("ul");
        this.#categoriaListNode.setAttribute("id", "product-list");

        //this.#store.getTask().forEach((task) => this.#addTaskToList(task));
        

        this.#container.appendChild(this.#categoriaListNode);
        */
    }
}
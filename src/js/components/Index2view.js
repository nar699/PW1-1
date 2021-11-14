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

        let img = document.createElement("img");
        img.setAttribute("alt", "logo");
        img.setAttribute("src", this.#imgTodo);
        div1.appendChild(img);

        let text_todo = document.createTextNode("TODO++");
        text_todo.setAttribute()
        div1.appendChild(text_todo);

        let boton_addTodo = document.createElement("a");
        boton_addTodo.setAttribute("class", "boton-addTodo");
        boton_addTodo.setAttribute("href", "todoForm2.html");
        let addTODO = document.createTextNode("Add TODO");
        boton_addTodo.appendChild(addTODO);
        div1.appendChild(boton_addTodo);

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


    }
}
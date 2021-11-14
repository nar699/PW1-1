import { Category } from "./Category";

//autors: marc, gerard, narcis

export class Index2View {
    #container2;
    #categoriaListNode;

    #indexFormNode;
    #imgTodo = "media/img/image 2.png";
    #imgStatus = "media/img/list-status 1.png";
    #imgCheck = "media/img/check 1.png";
    #image = "../media/img/Rectangle 15.png";

    #CatList;

    constructor(container2, CatList) {
        this.#container2 = container2;
        this.#CatList = CatList;   
    }

    #addEventListenerToFormNode(node){
        node.addEventListener("click", (event) => {
            event.preventDefault();

            let nameValue = document.getElementById('catName').value;
            let colorValue = document.getElementById('color').value;
            let id = (this.#CatList.getCategory().length || 0) + 1;
            let cat = new Category(id,nameValue,colorValue);
            this.#CatList.addCategory(cat);
            document.getElementById('catName').value = "";
            this.render2();
            console.log(cat);
        });
    }

    #addEventListenerToCatList(node,buttonId){
        node.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(buttonId);
            this.#CatList.removeCategory(buttonId);
            console.log(this.#CatList.getCategory());

            this.render2();

        });
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
        img.setAttribute("id", "FotoGran");
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
        divaso.setAttribute("id","divaso")
        div1.appendChild(divaso);

        //Today, All duties i Categories.
        let divaso1 = document.createElement("div"); 
        divaso1.setAttribute("id","divaso1")
        divaso.appendChild(divaso1);

        let divaso2 = document.createElement("div"); 
        divaso2.setAttribute("id","divaso2")
        divaso.appendChild(divaso2);

        let divaso3 = document.createElement("div"); 
        divaso3.setAttribute("id","divaso3")
        divaso.appendChild(divaso3);

        let icono1 = document.createElement("img");
        icono1.setAttribute("src","media/img/Vector.svg");
        icono1.setAttribute("id","icono1");
        icono1.setAttribute("alt","icono1");

        let icono2 = document.createElement("img");
        icono2.setAttribute("src","media/img/calendar 1.svg");
        icono2.setAttribute("id","icono2");
        icono2.setAttribute("alt","icono2");

        let icono3 = document.createElement("img");
        icono3.setAttribute("src","media/img/shape-outline 1.svg");
        icono3.setAttribute("id","icono3");
        icono3.setAttribute("alt","icono3");

       

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
       



        divaso1.appendChild(icono1);
        divaso1.appendChild(h3_today);
        
        divaso2.appendChild(icono2);
        divaso2.appendChild(h3_allduties);
        
        divaso3.appendChild(icono3);
        divaso3.appendChild(h3_categories);

        divaso.appendChild(divaso1);
        divaso.appendChild(divaso2);
        divaso.appendChild(divaso3);

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
        option1.innerHTML="Red";
        select.appendChild(option1);

        let option2 = document.createElement("option");
        option2.setAttribute("value", "Yellow");
        option2.innerHTML="Yellow";
        select.appendChild(option2);
        
        let option3 = document.createElement("option");
        option3.setAttribute("value", "Green");
        option3.innerHTML="Green";
        select.appendChild(option3);

        let option4 = document.createElement("option");
        option4.setAttribute("value", "Blue");
        option4.innerHTML="Blue";
        select.appendChild(option4);

        let option5 = document.createElement("option");
        option5.setAttribute("value", "Gray");
        option5.innerHTML="Gray";
        select.appendChild(option5);

        let option6 = document.createElement("option");
        option6.setAttribute("value", "Black");
        option6.innerHTML="Black";
        select.appendChild(option6);

        let categoryName = document.createElement("div");
        categoryName.setAttribute("id","categoryName");
        let catTextName = document.createElement("input");
        catTextName.setAttribute("type","text");
        catTextName.setAttribute("id","catName");
        categoryName.appendChild(catTextName);
        this.#indexFormNode.appendChild(categoryName);

        let submitCat = document.createElement("div");
        submitCat.setAttribute("id","submitCat");
        let btnSubmit = document.createElement("input");
        btnSubmit.setAttribute("type","reset");
        btnSubmit.setAttribute("value","✓");
        btnSubmit.setAttribute("id","submitCategoryButton");
        submitCat.appendChild(btnSubmit);
        this.#indexFormNode.appendChild(submitCat);

        let catTableDiv = document.createElement("div");
        catTableDiv.setAttribute("id","catTableDiv");
        let catTable = document.createElement("table");
        catTable.setAttribute("id","categoryTable");
        let catTableBody = document.createElement("tbody");
        catTable.setAttribute("id","catTableBody");
        catTable.appendChild(catTableBody);
        catTableDiv.appendChild(catTable);
        div1.appendChild(catTableDiv);
        this.#addEventListenerToFormNode(btnSubmit);

        this.render2();
        }

        render2(){
            var list = this.#CatList.getCategory();
            let tbody = document.getElementById('catTableBody');
            tbody.innerHTML="";
        
            for(var i = 0; i < list.length; i++){
                let row = tbody.insertRow(i),
                buttonCell = row.insertCell(0),
                colorCell = row.insertCell(1),
                nameCell = row.insertCell(2);
        
                colorCell.innerHTML = list[i].colorValue;
                nameCell.innerHTML = list[i].nameValue;
        
                var inputButton = document.createElement('input');
                inputButton.type = 'button';
                inputButton.value = 'X';
                inputButton.setAttribute("id",list[i].categoryId);
                this.#addEventListenerToCatList(inputButton, inputButton.id);
                
                buttonCell.appendChild(inputButton);
                tbody.appendChild(row);

        }

      
    }
}
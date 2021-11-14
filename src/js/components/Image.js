//clase que carrega totes les imatges a un array
export class Image {
    #imgArray = new Array();

    constructor(){

        this.#imgArray[0] = 'media/img/Rectangle 15.png';
        
        this.#imgArray[1] = 'media/img/Rectangle 16.png';
        
        this.#imgArray[2] = 'media/img/Rectangle 17.png';
        
        this.#imgArray[3] = 'media/img/Rectangle 18.png';
        
        this.#imgArray[4] = 'media/img/Rectangle 19.png';
        
        this.#imgArray[5] = 'media/img/Rectangle 20.png';     

    }

    selectImage(imgind){  
        return this.#imgArray[imgind];
    }
    
    getImage(imgind){
        if (imgind == null){
            return this.#imgArray[defaultImg];
        }else{
            return this.#imgArray[imgind];
        }
    }

}



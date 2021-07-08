import Animal from "./Animal";

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, sisear){
        super(nombre, edad, img, comentarios, sonido);
    this._sisear= sisear;
    }

    get sisear(){
        return this._sisear;
    }
}
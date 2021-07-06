import Animal from "./Animal";

class Aguila extends Animal{
    
    constructor(nombre, edad, img, comentarios, sonido, chillar){
        super(nombre, edad, img, comentarios, sonido);
        this._chillar = chillar;
    }

    get chillar(){
        return this._chillar;
    }
}
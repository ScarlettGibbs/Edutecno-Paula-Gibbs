import Animal from "./Animal";

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido, ruguir){
        super(nombre, edad, img, comentarios, sonido);
        this._ruguir = ruguir;
    }

    get ruguir(){
        return this._ruguir;
    }
}
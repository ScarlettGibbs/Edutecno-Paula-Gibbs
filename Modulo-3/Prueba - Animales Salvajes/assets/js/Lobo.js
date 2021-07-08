//Sub clase Lobo

import Animal from "./Animal";

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido, aullar){
        super(nombre, edad, img, comentarios, sonido);
        this._aullar = aullar;
    }

    get aullar(){
        return this._aullar;
    }
}
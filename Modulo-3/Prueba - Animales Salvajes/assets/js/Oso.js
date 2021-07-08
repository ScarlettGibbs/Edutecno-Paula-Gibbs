class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido, gruñir){
        super(nombre, edad, img, comentarios, sonido);
        this._gruñir= gruñir;
    }

    get gruñir(){
        return this._gruñir;
    }
}
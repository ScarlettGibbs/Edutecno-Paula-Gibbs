//Clase Cliente

export default class Cliente{
    constructor(nombre, impuestos){
        this._nombre = nombre;
        this._impuestos = impuestos || [];
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nvo_nombre){
        this._nombre = nvo_nombre;
    }

    calcularImpuesto(){
        let esteImpuesto = this._impuestos;
        return (esteImpuesto.monto_bruto_anual - esteImpuesto.deducciones)*0.21;
    }

    /*
    get impuestos(){
        return this._impuestos;
    }

    calcularImpuesto(monto_bruto_anual, deducciones){
        return (monto_bruto_anual - deducciones)*0.21;
    }
    */
    
}
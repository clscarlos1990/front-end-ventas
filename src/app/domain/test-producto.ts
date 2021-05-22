import { TestFacturaDetalle } from "./test-factura-detalle";

export class TestProducto {
    constructor(
                public idProducto:number,
                public codigo:string,
                public nombre:string,
                public valorUnidad:number,
                public stock:Int16Array,
                public testFacturaDetalles:TestFacturaDetalle[]
    ){}
}

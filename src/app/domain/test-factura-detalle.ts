import { TestFactura } from './test-factura';
export class TestFacturaDetalle {
    constructor(
                public idFacturaDetalle:number,
                public idFactura:number,
                public idProducto:number,
                public cantidad:number,
                public valorUnidad:number,
                public valorTotal:number,
                public idFacturaNavigation:TestFactura
    ){}
}

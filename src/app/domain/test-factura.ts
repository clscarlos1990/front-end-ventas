import { TestCliente } from './test-cliente';
import { TestFacturaDetalle } from './test-factura-detalle';
export class TestFactura {
    constructor(
                public idFactura:number,
                public idCliente:number,
                public fechaVenta:Date,
                public valorTotal:number,
                public idClienteNavigation:TestCliente,
                public testFacturaDetalle:TestFacturaDetalle[]
    ){}
}

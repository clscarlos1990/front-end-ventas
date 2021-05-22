import { TestFactura } from './test-factura';
export class TestCliente {
    constructor(
                public idCliente:number,
                public identifiacion:number,
                public nombres:string,
                public apellidos:string,
                public direccion:string,
                public telefono:string,
                public email:string,
                public testFacturas:TestFactura[]
    ){}
}

import { Component, OnInit } from '@angular/core';
import { TestFactura } from '../../domain/test-factura';
import { TestFacturaDetalle } from '../../domain/test-factura-detalle';
import { TestFacturaService } from '../../service/test-factura.service';
import { TestFacturaDetalleService } from '../../service/test-factura-detalle.service';
import { TestCliente } from '../../domain/test-cliente';
import { FormBuilder, Validators } from '@angular/forms';
import { TestClienteService } from '../../service/test-cliente.service';
@Component({
  selector: 'app-test-factura-save',
  templateUrl: './test-factura-save.component.html',
  styleUrls: ['./test-factura-save.component.css']
})
export class TestFacturaSaveComponent implements OnInit {
  public testClientes:TestCliente[];

  public testCliente:TestCliente;
  public testFactura:TestFactura;
  public testFacturaDetalles:TestFacturaDetalle[];

  public showMsg:boolean=false;
  public messages:string[]=[""];
  
  today = Date.now();
  fixedTimezone = this.today;
  
  public formDetails = this.formBuilder.group({
    idProducto: [null,Validators.required],
    cantidad: [null,Validators.required],
    valorUnidad: [null,Validators.required]
  });

  constructor(public testFacturaService:TestFacturaService,
              public formBuilder:FormBuilder,
              public testFacturaDetalleService:TestFacturaDetalleService,
              public testClienteService:TestClienteService) { }

  ngOnInit(): void {
    this.testFacturaDetalles = [];
    this.testFactura=new TestFactura(0,0,new Date,0,this.testCliente,this.testFacturaDetalles);
    this.findAllCustomers();
  }

  findAllCustomers():void{
    this.testClienteService.findAll().subscribe(data=>{
      this.testClientes=data;
    })
  }
  
  addInvoiceDetails(){
    console.log(this.formDetails.value);
    this.testFacturaDetalles.push(this.formDetails.value);
    this.testFactura.valorTotal += (this.formDetails.value.cantidad * this.formDetails.value.valorUnidad);
  }

  saveInvoice():void{
    this.testFactura.testFacturaDetalle = this.testFacturaDetalles;
    this.testFacturaService.save(this.testFactura).subscribe(ok=>{
      this.showMsg=true;
      this.messages=[""];
      this.messages[0]="La Factura se grabó con exito";
    },err=>{
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}

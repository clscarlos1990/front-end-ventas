import { Component, OnInit } from '@angular/core';
import { TestFacturaService } from '../../service/test-factura.service';

import { Subscription } from 'rxjs';
import { TestFactura } from 'src/app/domain/test-factura';

@Component({
  selector: 'app-test-factura-list',
  templateUrl: './test-factura-list.component.html',
  styleUrls: ['./test-factura-list.component.css']
})
export class TestFacturaListComponent implements OnInit {

  public testFacturas:TestFactura[];
  private sub: Subscription = new Subscription;

  constructor(public testFacturaService:TestFacturaService) { }
  
  delete(testFactura:TestFactura):void{
    this.testFacturaService.delete(testFactura.idFactura).subscribe(ok=>{
      this.findAll();
    },err=>{
      
    });
  }

  findAll():void{
    this.sub=this.testFacturaService.findAll().subscribe(data=>{
      this.testFacturas=data;
    });
  }

  ngOnInit(): void {
    this.findAll();
  }
  ngOnDestroy():void{
    console.log('ngOnDestroy');
    this.sub.unsubscribe();
  }
}

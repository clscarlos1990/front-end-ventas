import { Component } from '@angular/core';
import { TestFacturaService } from './service/test-factura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestFacturaService]
})
export class AppComponent {
  title = 'front-ventas';
  constructor(private testFacturaService:TestFacturaService){}
  ngOnInit(): void {
    this.testFacturaService.findAll().subscribe((res)=>{
      console.log("res" + res);
    })
  }
}

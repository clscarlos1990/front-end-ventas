import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFacturaService } from './service/test-factura.service';
import { HttpClientModule } from '@angular/common/http';
import { TestFacturaListComponent } from './component/test-factura-list/test-factura-list.component';
import { TestFacturaSaveComponent } from './component/test-factura-save/test-factura-save.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { TestClienteService } from './service/test-cliente.service';
import { TestFacturaDetalleService } from './service/test-factura-detalle.service';
import { TestProductoService } from './service/test-producto.service';

@NgModule({
  declarations: [
    AppComponent,
    TestFacturaListComponent,
    TestFacturaSaveComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [TestFacturaService, 
              TestClienteService, 
              TestFacturaDetalleService,
              TestProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

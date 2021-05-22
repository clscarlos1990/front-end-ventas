import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFacturaListComponent } from './component/test-factura-list/test-factura-list.component';
import { TestFacturaSaveComponent } from './component/test-factura-save/test-factura-save.component';

const routes: Routes = [
  {path:'test-factura-list',component:TestFacturaListComponent},
  {path:'test-factura-save',component:TestFacturaSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

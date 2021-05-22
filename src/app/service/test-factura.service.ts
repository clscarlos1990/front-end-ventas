import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TestFactura } from '../domain/test-factura';

@Injectable({
  providedIn: 'root'
})
export class TestFacturaService {

  public url:string = '/api/TestFactura';

  constructor(public httpClient:HttpClient) { }
  
  findAll():Observable<any>{
    console.log(this.url);
    return this.httpClient.get(this.url);
  }

  save(testFactura:TestFactura):Observable<any>{
    return this.httpClient.post(this.url,testFactura);
  }

  update(testFactura:TestFactura):Observable<any>{
    return this.httpClient.put(this.url,testFactura);
  }

  delete(idFactura:number):Observable<any>{
    return this.httpClient.delete(this.url+`/${idFactura}`);
  }

  findById(idFactura:number):Observable<any>{
    return this.httpClient.get(this.url+`/${idFactura}`);
  }
}

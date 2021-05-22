import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TestCliente } from '../domain/test-cliente';

@Injectable({
  providedIn: 'root'
})
export class TestClienteService {
  public url:string= '/api/TestCliente';

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    console.log(this.url);
    return this.httpClient.get(this.url);
  }
  save(testCliente:TestCliente):Observable<any>{
    return this.httpClient.post(this.url,testCliente);
  }

  update(testCliente:TestCliente):Observable<any>{
    return this.httpClient.put(this.url,testCliente);
  }

  delete(idCliente:number):Observable<any>{
    return this.httpClient.delete(this.url+`/${idCliente}`);
  }

  findById(idCliente:number):Observable<any>{
    return this.httpClient.get(this.url+`/${idCliente}`);
  }
}

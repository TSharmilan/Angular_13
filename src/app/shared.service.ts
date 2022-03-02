import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:13926/api";

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<any[]>{
    return this.http.get<any> (this.APIUrl + '/MCCS/GetAllProducts')
  }

  getAllInvoice():Observable<any[]>{
    return this.http.get<any> (this.APIUrl + '/MCCS/GetAllPurchaseDetails')
  }

  savePurchaseDetails(val:any){
    return this.http.post(this.APIUrl + '/MCCS/SavePurchaseDetails', val)
  }

}

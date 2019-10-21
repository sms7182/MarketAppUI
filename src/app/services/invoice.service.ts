import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invoice} from 'src/app/models/invoice.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http:HttpClient) { }
   readonly APIURL="http://marketwebservice-fatalerror.fandogh.cloud/api/invoice/byUserId?userid=10a6ad71-b838-4ca2-b3ec-7537afff3892";
  //readonly APIURL="http://localhost:44334/api/invoice/byUserId?userid=10a6ad71-b838-4ca2-b3ec-7537afff3892";
  
  getInvoiceListPerUser():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.APIURL);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from 'src/app/models/item-model';
import {Observable}  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  //readonly APIURL="http://localhost:44334/api/item/all";
  readonly APIURL="http://marketwebservice-fatalerror.fandogh.cloud/api/item/all";
   
  getItemList():Observable<Item[]>{
    return this.http.get<Item[]>(this.APIURL);
  }
}

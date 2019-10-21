import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from 'src/app/models/store.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }
  //readonly APIURL="http://localhost:44334/api/store/getall";
  readonly APIURL="http://marketwebservice-fatalerror.fandogh.cloud/api/store/getall";
  getAllStore():Observable<Store[]>{
    return this.http.get<Store[]>(this.APIURL);
  }
}

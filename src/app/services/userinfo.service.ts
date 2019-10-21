import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from 'src/app/models/userinfo.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http:HttpClient) { }
 // readonly APIURL="http://localhost:44334/api/login/all";
 readonly APIURL="http://marketwebservice-fatalerror.fandogh.cloud/api/login/all" 
 getAllUser():Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.APIURL);
  }
}

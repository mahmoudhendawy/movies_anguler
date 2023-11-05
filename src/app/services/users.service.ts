import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './../Module/iuser';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Module/IProduct';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
http={};
  constructor(private httpclient:HttpClient) { 
    this.http={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
  }
  signUpUsers(newusre:Iuser):Observable<Iuser>{
    return this.httpclient.post<Iuser>(`${environment.APIBaseURL}/users`,JSON.stringify(newusre),this.http);
      }
  addnewproduct(newproduct:IProduct):Observable<IProduct>{
    return this.httpclient.post<IProduct>(`http://localhost:3000/products`,JSON.stringify(newproduct),this.http);
      }
  dalataproduct(newproduct:IProduct|undefined):Observable<IProduct>{
    return this.httpclient.delete<IProduct>(`http://localhost:3000/products`);
      }
  updataproduct(newproduct:IProduct):Observable<IProduct>{
    return this.httpclient.patch<IProduct>(`http://localhost:3000/products`,JSON.stringify(newproduct),this.http);
      }
  // addnewproduct(newproduct:IProduct):Observable<IProduct>{
  //   return this.httpclient.post<IProduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newproduct),this.http);
  //     }
}

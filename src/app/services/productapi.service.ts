import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../Module/IProduct';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  http={};

  constructor( private httpclient:HttpClient ) {
    this.http={
      headers:new HttpHeaders ({
        'Content-Type':'application/json'
      }),
    }
   }

   //day6
  getallpro():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products`);
  }





  getProductById(id:any):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products/${id}`);
    }



  getproductbyId(id:number):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.APIBaseURL}/products/${id}`) 
  }



  delPrd(id:any):Observable<IProduct[]>{
    return this.httpclient.delete<IProduct[]>(`${environment.APIBaseURL}/products/${id}`)
  }


  updatePrd(prd:IProduct):Observable<IProduct[]>{
    return this.httpclient.patch<IProduct[]>(`http://localhost:3000/products`,JSON.stringify(prd),this.http);
  }
  addnewproduct(newproduct:IProduct):Observable<IProduct>{
    return this.httpclient.post<IProduct>(`http://localhost:3000/products`,JSON.stringify(newproduct),this.http);
      }



  searchbymaterial(matvalue:string):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL
    }/products?Material=${matvalue}`);
  }

  //day5
  // getallpro():Observable<IProduct[]>{
  //   return this.httpclient.get<IProduct[]>("http://localhost:3000/products");
  // }
  // getproductbyId(id:number):Observable<IProduct>{
  //   return this.httpclient.get<IProduct>(`http://localhost:3000/products/${id}`) 

  // }
  // searchbymaterial(matvalue:string):Observable<IProduct[]>{
  //   return this.httpclient.get<IProduct[]>(`http://localhost:3000/products?Material=${matvalue}`);
  // }

}

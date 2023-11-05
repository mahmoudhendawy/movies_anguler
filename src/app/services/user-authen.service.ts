import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
   
  isuserlogbehavior:BehaviorSubject<boolean>;
  constructor() { 
    this.isuserlogbehavior=new BehaviorSubject<boolean>(this.isuserlogin)
  }
  userlogin(email:string,password:string){

    let token= "99999";
    localStorage.setItem("accessToken",token);
    this.isuserlogbehavior.next(true);
  }
  userlogout(){
    localStorage.removeItem("accessToken");
    this.isuserlogbehavior.next(false);
  }
  get isuserlogin():boolean{
    return (localStorage.getItem("accessToken"))?true:false;
  }
  userstatechange():Observable<boolean>{
  return this.isuserlogbehavior.asObservable();
  
  }
}

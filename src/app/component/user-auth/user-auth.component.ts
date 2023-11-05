import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/services/user-authen.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
constructor(private AuthenService:UserAuthenService){}

user:boolean=true;

ngOnInit(): void {
  this.user=this.AuthenService.isuserlogin;
  console.log(this.user);
  
}
loginfunc(){
  this.AuthenService.userlogin("mahmoud@gmail.com","1234");
  this.user=this.AuthenService.isuserlogin;
  console.log(this.user);
  
}
logoutfunc(){
  this.AuthenService.userlogout();
  this.user=this.AuthenService.isuserlogin;
  // console.log(this.user);

}
}

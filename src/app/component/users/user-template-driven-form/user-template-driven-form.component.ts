import { Component } from '@angular/core';
import { UsersService } from './../../../services/users.service';
import { Iuser } from 'src/app/Module/iuser';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.scss']
})
export class UserTemplateDrivenFormComponent {
  user :Iuser={} as Iuser;
constructor( private UsersService:UsersService,private Router:Router){

}

addnewuser(){
  // let u:Iuser={
  //   fname:"mahmoud",
  //   lname:"hendawy",
  //   email:"m@m.com"
  // };
  console.log(this.user);
  
  this.UsersService.signUpUsers(this.user).subscribe({
    next:(user)=>{
      // console.log(user.fname);
alert(" THink You for Login")
      // this.Router.navigate(['/Products']);
    },
    error:(err)=> {
      console.log("mahmoud");
      
    },
  })
}
}

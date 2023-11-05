import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from './../../services/user-authen.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isuserlogined:boolean=true;
constructor(private UserAuthenService:UserAuthenService){}
ngOnInit(): void {
  // this.isuserlogined= this.UserAuthenService.isuserlogin;
  // console.log(this.isuserlogined);
  
  this.UserAuthenService.userstatechange().subscribe({
    next:(usestate)=>{
      this.isuserlogined=usestate;
      console.log(usestate);
      
    },
    // error:(error)=>{
    //   console.log(error);
      
    // }
  })
}
}

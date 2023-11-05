import { Component } from '@angular/core';
import { UsersService } from './../../../services/users.service';
import { ProductapiService } from 'src/app/services/productapi.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Module/IProduct';
@Component({
  selector: 'app-track-front',
  templateUrl: './track-front.component.html',
  styleUrls: ['./track-front.component.scss']
})
export class TrackFrontComponent {
proId:any 
newpro :IProduct={} as IProduct;

                                                                                    //get id from url :id
  constructor(private Productapi:ProductapiService,private UsersService:UsersService,private Router:Router , private activatedRoute:ActivatedRoute){


    this.activatedRoute.paramMap.subscribe(params => {

      this.proId = Number(params.get('prodID')) || undefined;

      Productapi.getProductById(this.proId).subscribe({
      next:(data) => this.newpro = Object.assign(data),
      })



      })


  }











  
  addnewproduct(){
    //in url

// if(this.newpro.id==this.proId){   
// //update


//           this.Productapi.updatePrd(this.newpro).subscribe({
//             next:(res)=>{
//               alert("new product")
//             },
//         error:(err)=>{
//           console.log(err);
          
//         }
//           })



// }

  this.Productapi.addnewproduct(this.newpro).subscribe({
    next:(newpro)=>{
      console.log(newpro);
      this.Router.navigate(['/Products']);
    },
    error:(err)=> {
      console.log(err);
      
    },
  })



}

   
}

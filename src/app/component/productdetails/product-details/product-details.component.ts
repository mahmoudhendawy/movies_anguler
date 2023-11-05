import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Module/IProduct';
import { ProductapiService } from 'src/app/services/productapi.service';
import { ProductslistService } from 'src/app/services/productslist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  implements OnInit{
  productid:number=0;
  product:IProduct|undefined=undefined;
constructor( private prdservice:ProductslistService,private activroute:ActivatedRoute, private prdapiservice:ProductapiService,private router:Router){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.productid=(this.activroute.snapshot.paramMap.get('prodID'))?Number(this.activroute.snapshot.paramMap.get('prodID')):0;
  // console.log(this.productid);

 this.product=this.prdservice.getproByid(this.productid);
 console.log(this.product);
  

}
searchbymaterial(search:any){
this.prdapiservice.searchbymaterial(search).subscribe({
  next:(data)=> {
    console.log(data); 
  },
  error:(err) =>{
    console.log(err);
    
  },  
  
})
}


nextPrd(){
  this.router.navigate(['/product',this.prdservice.getNextPrd(this.productid)])
}

prevPrd(){
this.router.navigate(['/product',this.prdservice.getPrevPrd(this.productid)])
}


}
///day6

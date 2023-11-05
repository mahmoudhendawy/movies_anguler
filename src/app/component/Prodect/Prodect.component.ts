import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Module/IProduct';
import { store } from 'src/app/Module/Store';
import { ProductapiService } from 'src/app/services/productapi.service';
import { ProductslistService } from 'src/app/services/productslist.service';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-Prodect',
  templateUrl: './Prodect.component.html',
  styleUrls: ['./Prodect.component.css'],
})
export class ProdectComponent implements OnInit {
  store: store = {
    Name: 'mahmoud',
    Arrayofbranchs: ['html', 'js', 'css'],
    Logo: '',
  };
  ClientName: string = 'mahmoud';
  // ProductList: IProduct[]=[];
  valuesearch: any;
  flag: boolean = true;
  counter: number = 0;
  date: Date = new Date();

  @Output() onaddcerd: EventEmitter<IProduct>;
  constructor( private Productapi:ProductapiService,private router:Router,private UsersService:UsersService ) {
    this.onaddcerd = new EventEmitter<IProduct>();
 
  }
  Productsearch: IProduct[] = [];
  @Input() public set searchpro(catID: number) {

  }

  ngOnInit(): void {

    this.getAllProducts()


  }


getAllProducts(){
  this.Productapi.getallpro().subscribe({
  
  
    next:(data)=>{
      this.Productsearch = data
    },
  
    

  
   })
}




//ts > servie(api)
deletepro(id:number){
this.Productapi.delPrd(id).subscribe({
  next:(data)=>{
    alert('تم الحذف')
    this.getAllProducts()
  }})
}









  toggleimg() {
    this.flag = !this.flag;
  }
  addcard(pro: IProduct) {

    this.onaddcerd.emit(pro);
  }

  prodetails(id:number){
this.router.navigate(['/ProductDetails',id])
  }










 
}

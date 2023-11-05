import { Injectable } from '@angular/core';
import { IProduct } from '../Module/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductslistService {
  ProductList:IProduct[];
  IdList:number[];

  constructor() {
this.ProductList = [
      {
        id: 2,
        name: 'AndersGlass Top Coffee Table',
        price: 11200,
        quantity: 0,
        categoryID: 1,
        Material: 'Glass',
        PrdimgURL:
          'https://assets.website-files.com/60167ed3d520dfaee1b0f8d8/6310a70282760eb2179c9b10_eos-r7-lifestyle_c604337a3b374a94a080d40b43f3a920-1.jpg',
      },
      {
        id: 5,
        name: 'Trixia4-Seater Glass Top Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://m.media-amazon.com/images/I/81XeVWWyUUL._AC_UF894,1000_QL80_.jpg',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 25,
        name: 'GashaMarble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_2bO7fYzvXUy9HnDzbJCZIhpm1_5HZaRGTXsytf-aWPrda3AzVT0tY6qDErnrIdppZc&usqp=CAU',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 7,
        name: 'VenturaFabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 17,
        name: 'AlexArmless Study Chair',
        price: 2000,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160540419-160540419-HC020718_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        categoryID: 2,
        Material: 'Fabric',
      },
      {
        id: 9,
        name: 'BostonStudy Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 10,
        name: 'CobyExtendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
      },
      {
        id: 15,
        name: 'AccentTV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
      },
      {
        id: 55,
        name: 'PlymouthTV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
      },
    ];
   
this.IdList=[];
   }

   //get all products
   getAllProducts():IProduct[]{
    return this.ProductList;

   }
   //filter by categore
   preformsearch(catID: number): IProduct[] {
    return this.ProductList.filter((sch: IProduct) => sch.categoryID == catID);
  }
  getproByid(proid:number):IProduct|undefined{
    return this.ProductList.find(prd=>prd.id==proid);
  }
  
























































getNextPrd(id:number){
  return this.IdList[this.IdList.indexOf(id) + 1]
}


getPrevPrd(id:number){
  return this.IdList[this.IdList.indexOf(id) - 1]
}


}

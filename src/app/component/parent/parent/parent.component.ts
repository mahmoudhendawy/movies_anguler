import { IProduct } from 'src/app/Module/IProduct';
// import { IProduct } from './../../../Module/IProduct';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  searchp: number = 1;
  counter :number=0;
  isFound = false;
  card:IProduct[]=[];
  



addcard(pro:IProduct) {

this.isFound = false;

this.card.map(x => {
    if(x.id == pro.id){
      x.quantity+=1;
      this.isFound = true;
    }
  })

  if(this.isFound == false){
    this.card.push(pro);
  }

    


  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss']
})
export class UserReactiveFormComponent {
  userForm:FormGroup;
  constructor(private formbuilder:FormBuilder){
    // this.userForm=new FormGroup(
    //   {
    //     fname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{4,}')] ),
    //     lname:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-z]{4,}')] ),
    //     email:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{4,}')] ),
    //   }
    // );
    this.userForm=this.formbuilder.group({
      fname: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{4,}')] ],
      lname: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{4,}')] ],
      email: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{4,}')] ],
     
     
     
    });
 

  }
  get fname(){
    return this.userForm.get('fname');
  }
  get lname(){
    return this.userForm.get('lname');
  }
  get email(){
    return this.userForm.get('email');
  }

}

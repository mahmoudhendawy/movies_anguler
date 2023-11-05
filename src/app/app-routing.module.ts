import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ProdectComponent } from './component/Prodect/Prodect.component';
import { AboutUsComponent } from './component/Aboutus/about-us/about-us.component';
import { ProductDetailsComponent } from './component/productdetails/product-details/product-details.component';
import { NotFoundPageComponent } from './component/NotFoundPage/not-found-page/not-found-page.component';
import { ProductsParentComponent } from './component/productparent/products-parent/products-parent.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { userGuardGuard } from './Guard/user-guard.guard';
import { UserTemplateDrivenFormComponent } from './component/users/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './component/users/user-reactive-form/user-reactive-form.component';
import { TrackFrontComponent } from './component/orders/track-front/track-front.component';
import { UserModule } from './component/orders/user/user.module';

const routes: Routes = [
  {path:"",redirectTo:'/Home',pathMatch:'full'}, //default path
  {path:"Home",component:MainComponent,title:"Home Page"},
  {path:"Products",component:ProdectComponent,title:"Products List Page",canActivate:[userGuardGuard]},
  {path:"ProductsParent",component:ProductsParentComponent,title:'Products Parent Page',},
  {path:"AboutUs",component:AboutUsComponent,title:'About Us Page'},
  {path:"Userlogin",component:UserAuthComponent,title:'userlogin'},
  {path:"Userlogout",component:UserAuthComponent,title:'userlogout'},
  {path:"users",component: UserTemplateDrivenFormComponent,title:'users'},
  {path:"track-front",component:TrackFrontComponent,title:'addproduct'},
  {path:"usersreactive",component:UserReactiveFormComponent,title:'usersreactive'},
  {path:"ProductDetails/:prodID",component:ProductDetailsComponent,title:'Product Details Page'},
  { path: 'user', loadChildren: () => import('./component/orders/user/user.module').then(m => m.UserModule) },
  {path:"**",component:NotFoundPageComponent,title:"Not Found Page"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

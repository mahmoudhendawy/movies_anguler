import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { ProdectComponent } from './component/Prodect/Prodect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebaarComponent } from './component/sidebaar/sidebaar.component';
import { CustomDirectiveDirective } from './component/Directive/custom-directive.directive';
import { IDSPipe } from './pipes/ids.pipe';
import { ParentComponent } from './component/parent/parent/parent.component';
import { AboutUsComponent } from './component/Aboutus/about-us/about-us.component';
import { ProductDetailsComponent } from './component/productdetails/product-details/product-details.component';
import { NotFoundPageComponent } from './component/NotFoundPage/not-found-page/not-found-page.component';
import { ProductsParentComponent } from './component/productparent/products-parent/products-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTemplateDrivenFormComponent } from './component/users/user-template-driven-form/user-template-driven-form.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { UserReactiveFormComponent } from './component/users/user-reactive-form/user-reactive-form.component';
import { TrackFrontComponent } from './component/orders/track-front/track-front.component';
import { LazyComponent } from './component/orders/lazy/lazy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProdectComponent,
    SidebaarComponent,
    CustomDirectiveDirective,
    IDSPipe,
    ParentComponent,
    AboutUsComponent,
    ProductDetailsComponent,
    NotFoundPageComponent,
    ProductsParentComponent,
    UserTemplateDrivenFormComponent,
    UserAuthComponent,
    UserReactiveFormComponent,
    TrackFrontComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

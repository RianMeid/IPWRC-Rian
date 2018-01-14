import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllitemsComponent } from './allitems/allitems.component';
import { CartComponent } from './cart/cart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AllPurchase} from "./AllPurchase";





@NgModule({
  declarations: [
    AppComponent,
    AllitemsComponent,
    CartComponent,
    LoginpageComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

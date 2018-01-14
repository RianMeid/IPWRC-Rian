import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllitemsComponent} from './allitems/allitems.component';
import {CartComponent} from './cart/cart.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';



const routes: Routes = [
    { path: 'allitems', component: AllitemsComponent },
  {path: 'cart', component: CartComponent},
  {path: 'loginreg', component: LoginpageComponent},
  {path: 'loginreg/login', component: LoginComponent},
  {path: 'loginreg/register', component: RegisterComponent},
  { path: '', redirectTo: '/allitems', pathMatch: 'full' }
  /*{path: 'adminview', component: AdminComponent, children: [
    {path : 'klanttoevoegen', component: KlantToevoegenComponent},
    {path : 'werknemertoevoegen', component: WerknemerToevoegenComponent}
  ]}*/
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

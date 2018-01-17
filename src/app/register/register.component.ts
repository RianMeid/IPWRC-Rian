import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    HttpModule
  ]
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: string;
  show: boolean;
  showerror: boolean;
  constructor(private http: Http) {
    this.login = localStorage.getItem('login');
    this.show = false;
    this.showerror = false;
  }

  ngOnInit() {
  }

  submit = function (klant) {
    console.log(klant.valueOf());
    const headers = new Headers(
      {
        'Authorization': 'Basic Zmlyc3RAdXNlci5jb206Zmlyc3Q=',
        'Content-Type': 'application/json'
      });
    this.http.post('http://84.86.87.214:4202/api/LoginService/Register' , klant
     , headers ).subscribe(
      res => {
        console.log(res);
        this.show = true;
      },
      err => {
        console.log('Error occured');
        this.showerror = true;
      }
    );
  };
}

import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@NgModule({
  imports: [
    HttpModule
  ]
})
@Injectable()
export class LoginComponent implements OnInit {
  login: string;
  constructor(private http: Http) {
    this.login = localStorage.getItem('login');
  }
  ngOnInit() {
  }
  submit = function (klant) {




      console.log(JSON.parse(JSON.stringify(klant)));

      const headers = new Headers(
        {
          'Authorization': 'Basic Zmlyc3RAdXNlci5jb206Zmlyc3Q=',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        });

      const response = this.http.post('http://84.86.87.214:4201/api/LoginService/Login' , JSON.parse(JSON.stringify(klant)
      ) , headers ).subscribe(
        res => {
          if (res.json()["isadmin"] === true) {
            this.login = klant['email'];
            localStorage.setItem('login', klant["email"])
            localStorage.setItem('password', klant["password"]);
          }
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
    );

  };


}

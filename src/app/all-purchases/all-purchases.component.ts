import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.css']
})
export class AllPurchasesComponent implements OnInit {
  private total1080: string;
  private total1070: string;
  private totalx150: string;
  private totalx99: string;
  private totalripjaws: string;
  private totalvengeance: string;
  private totalhdd: string;
  private totalssd: string;
  private totalkeyboard: string;
  private totalmouse: string;
  private login:  string;
  private password: string;
  constructor(_total1080: string, _total1070: string,
              _totalx150: string, _totalx99: string,
              _totalripjaws: string,  _totalvengeance: string,
              _totalhdd: string, _totalssd: string,
              _totalkeyboard: string, _totalmouse: string,
              login:  string, password: string) {
    this.total1080 = _total1080;
    this.total1070 = _total1070;
    this.totalx150 = _totalx150;
    this.totalx99 = _totalx99;
    this.totalripjaws = _totalripjaws;
    this.totalvengeance = _totalvengeance;
    this.totalhdd = _totalhdd;
    this.totalssd = _totalssd;
    this.totalkeyboard = _totalkeyboard;
    this.totalmouse = _totalmouse;
    this.login = login;
    this.password = password;
  }

  ngOnInit() {
  }

}

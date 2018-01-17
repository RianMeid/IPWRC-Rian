import { Component, OnInit } from '@angular/core';
import {AllPurchase} from "../AllPurchase";
import {AllPurchasesComponent} from "../all-purchases/all-purchases.component";
import {Http} from "@angular/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showerror: boolean;
  countx: string;
  total1080: string;
  total1070: string;
  totalx150: string;
  totalx99: string;
  totalripjaws: string;
  totalvengeance: string;
  totalhdd: string;
  totalssd: string;
  totalkeyboard: string;
  totalmouse: string;
  totalprice: string;
  price1080: string;
  price1070: string;
  pricex150: string;
  pricex99: string;
  priceripjaws: string;
  pricevengeance: string;
  pricehdd: string;
  pricessd: string;
  pricekeyboard: string;
  pricemouse: string;
  login: string;

  constructor(private http: Http) {
    this.showerror = false;
    this.login = localStorage.getItem('login');
    this.countx = localStorage.getItem('total');
    this.total1080 = localStorage.getItem('1080');
    this.total1070 = localStorage.getItem('1070');
    this.totalx150 = localStorage.getItem('x150');
    this.totalx99 = localStorage.getItem('x99');
    this.totalripjaws = localStorage.getItem('ripjaws');
    this.totalvengeance = localStorage.getItem('vengeance');
    this.totalhdd = localStorage.getItem('hdd');
    this.totalssd = localStorage.getItem('ssd');
    this.totalkeyboard = localStorage.getItem('keyboard');
    this.totalmouse = localStorage.getItem('mouse');
    this.countx = localStorage.getItem('total');
    let p1080;
    let p1070;
    let px150;
    let px99;
    let pripjaws;
    let pvengeance;
    let hdd;
    let ssd;
    let keyboard;
    let mouse;
    p1080 = (Number(localStorage.getItem('1080')) * 699);
    p1070 = (Number(localStorage.getItem('1070')) * 499);
    px150 = (Number(localStorage.getItem('x150')) * 80);
    px99 = (Number(localStorage.getItem('x99')) * 480);
    pripjaws = (Number(localStorage.getItem('ripjaws')) * 230);
    pvengeance = (Number(localStorage.getItem('vengeance')) * 210);
    hdd = (Number(localStorage.getItem('hdd')) * 60);
    ssd = (Number(localStorage.getItem('ssd')) * 120);
    keyboard = (Number(localStorage.getItem('keyboard')) * 200);
    mouse = (Number(localStorage.getItem('mouse')) * 150);
    this.price1080 = p1080;
    this.price1070 = p1070;
    this.pricex150 = px150;
    this.pricex99 = px99;
    this.priceripjaws = pripjaws;
    this.pricevengeance = pvengeance;
    this.pricehdd = hdd;
    this.pricessd = ssd;
    this.pricekeyboard = keyboard;
    this.pricemouse = mouse;
    let countprice;
    countprice = ((Number(localStorage.getItem('1080')) * 699) + (Number(localStorage.getItem('1070')) * 499)
      + (Number(localStorage.getItem('x150')) * 80) + (Number(localStorage.getItem('x99')) * 480)
      + (Number(localStorage.getItem('ripjaws')) * 230) + (Number(localStorage.getItem('vengeance')) * 210)
      + (Number(localStorage.getItem('hdd')) * 60)
      + (Number(localStorage.getItem('ssd')) * 120)
      + (Number(localStorage.getItem('keyboard')) * 200)
      + (Number(localStorage.getItem('mouse')) * 150));
    this.totalprice = countprice;
  }

  ngOnInit() {
  }
  increase1080() {
    this.add('1080');
    this.total1080 = localStorage.getItem('1080');
    this.updateprice();
    let p1080;
    p1080 = (Number(localStorage.getItem('1080')) * 699);
    this.price1080 = p1080;
  }
  increase1070() {
    this.add('1070');
    this.total1070 = localStorage.getItem('1070');
    this.updateprice();
    let p1070;
    p1070 = (Number(localStorage.getItem('1070')) * 499);
    this.price1070 = p1070;
  }
  increasex150() {
    this.add('x150');
    this.totalx150 = localStorage.getItem('x150');
    this.updateprice();
    let px150;
    px150 = (Number(localStorage.getItem('x150')) * 80);
    this.pricex150 = px150;
  }
  increasex99() {
    this.add('x99');
    this.totalx99 = localStorage.getItem('x99');
    this.updateprice();
    let px99;
    px99 = (Number(localStorage.getItem('x99')) * 480);
    this.pricex99 = px99;
  }
  increaseripjaws() {
    this.add('ripjaws');
    this.totalripjaws = localStorage.getItem('ripjaws');
    this.updateprice();
    let pripjaws;
    pripjaws = (Number(localStorage.getItem('ripjaws')) * 230);
    this.priceripjaws = pripjaws;
  }
  increasevengeance() {
    this.add('vengeance');
    this.totalvengeance = localStorage.getItem('vengeance');
    this.updateprice();
    let pvengeance;
    pvengeance = (Number(localStorage.getItem('vengeance')) * 210);
    this.pricevengeance = pvengeance;
  }
  increasehdd() {
    this.add('hdd');
    this.totalhdd = localStorage.getItem('hdd');
    this.updateprice();
    let hdd;
    hdd = (Number(localStorage.getItem('hdd')) * 60);
    this.pricehdd = hdd;
  }
  increasessd() {
    this.add('ssd');
    this.totalssd = localStorage.getItem('ssd');
    this.updateprice();
    let ssd;
    ssd = (Number(localStorage.getItem('ssd')) * 120);
    this.pricessd = ssd;
  }
  increasekeyboard() {
    this.add('keyboard');
    this.totalkeyboard = localStorage.getItem('keyboard');
    this.updateprice();
    let keyboard;
    keyboard = (Number(localStorage.getItem('keyboard')) * 200);
    this.pricekeyboard = keyboard;
  }
  increasemouse() {
    this.add('mouse');
    this.totalmouse = localStorage.getItem('mouse');
    this.updateprice();
    let mouse;
    mouse = (Number(localStorage.getItem('mouse')) * 150);
    this.pricemouse = mouse;
  }
  decrease1080() {
    this.minus('1080');
    this.total1080 = localStorage.getItem('1080');
    this.updateprice();
    let p1080;
    p1080 = (Number(localStorage.getItem('1080')) * 699);
    this.price1080 = p1080;
  }
  decrease1070() {
    this.minus('1070');
    this.total1070 = localStorage.getItem('1070');
    this.updateprice();
    let p1070;
    p1070 = (Number(localStorage.getItem('1070')) * 499);
    this.price1070 = p1070;
  }
  decreasex150() {
    this.minus('x150');
    this.totalx150 = localStorage.getItem('x150');
    this.updateprice();
    let px150;
    px150 = (Number(localStorage.getItem('x150')) * 80);
    this.pricex150 = px150;
  }
  decreasex99() {
    this.minus('x99');
    this.totalx99 = localStorage.getItem('x99');
    this.updateprice();
    let px99;
    px99 = (Number(localStorage.getItem('x99')) * 480);
    this.pricex99 = px99;
  }
  decreaseripjaws() {
    this.minus('ripjaws');
    this.totalripjaws = localStorage.getItem('ripjaws');
    this.updateprice();
    let pripjaws;
    pripjaws = (Number(localStorage.getItem('ripjaws')) * 230);
    this.priceripjaws = pripjaws;
  }
  decreasevengeance() {
    this.minus('vengeance');
    this.totalvengeance = localStorage.getItem('vengeance');
    this.updateprice();
    let pvengeance;
    pvengeance = (Number(localStorage.getItem('vengeance')) * 210);
    this.pricevengeance = pvengeance;
  }
  decreasehdd() {
    this.minus('hdd');
    this.totalhdd = localStorage.getItem('hdd');
    this.updateprice();
    let hdd;
    hdd = (Number(localStorage.getItem('hdd')) * 60);
    this.pricehdd = hdd;
  }
  decreasessd() {
    this.minus('ssd');
    this.totalssd = localStorage.getItem('ssd');
    this.updateprice();
    let ssd;
    ssd = (Number(localStorage.getItem('ssd')) * 120);
    this.pricessd = ssd;
  }
  decreasekeyboard() {
    this.minus('keyboard');
    this.totalkeyboard = localStorage.getItem('keyboard');
    this.updateprice();
    let keyboard;
    keyboard = (Number(localStorage.getItem('keyboard')) * 200);
    this.pricekeyboard = keyboard;
  }
  decreasemouse() {
    this.minus('mouse');
    this.totalmouse = localStorage.getItem('mouse');
    this.updateprice();
    let mouse;
    mouse = (Number(localStorage.getItem('mouse')) * 150);
    this.pricemouse = mouse;
  }
  add(name: string) {
    let counttotal;
    counttotal = Number(localStorage.getItem('total')) + 1;
    localStorage.setItem('total', String(counttotal));
    this.countx = localStorage.getItem('total');
    let countitem;
    countitem = Number(localStorage.getItem(name)) + 1;
    localStorage.setItem(name, String(countitem));
    console.log(localStorage.getItem( name));
  }
  minus(name: string) {
    let counttotal;
    if ((Number(localStorage.getItem('total')) - 1) >= 0) {
      counttotal = Number(localStorage.getItem('total')) - 1;
      localStorage.setItem('total', String(counttotal));
      this.countx = localStorage.getItem('total');
      let countitem;
      countitem = Number(localStorage.getItem(name)) - 1;
      localStorage.setItem(name, String(countitem));
      console.log(localStorage.getItem( name));
    }

  }
  updateprice() {
    let countprice;
    countprice = ((Number(localStorage.getItem('1080')) * 699) + (Number(localStorage.getItem('1070')) * 499)
      + (Number(localStorage.getItem('x150')) * 80) + (Number(localStorage.getItem('x99')) * 480)
      + (Number(localStorage.getItem('ripjaws')) * 230) + (Number(localStorage.getItem('vengeance')) * 210)
      + (Number(localStorage.getItem('hdd')) * 60)
      + (Number(localStorage.getItem('ssd')) * 120)
      + (Number(localStorage.getItem('keyboard')) * 200)
      + (Number(localStorage.getItem('mouse')) * 150));
    this.totalprice = countprice;
  }

  submitpurchase()  {
    console.log(localStorage.getItem('login'));
    if (localStorage.getItem('login') === null) {
      this.showerror = true;

    }else {
      const allpurchase = new AllPurchasesComponent(localStorage.getItem('1080'),
      localStorage.getItem('1070'),
      localStorage.getItem('x150'),
      localStorage.getItem('x99'),
      localStorage.getItem('ripjaws'),
      localStorage.getItem('vengeance'),
      localStorage.getItem('hdd'),
      localStorage.getItem('ssd'),
      localStorage.getItem('keyboard'),
      localStorage.getItem('mouse'),
      localStorage.getItem('login'),
      localStorage.getItem('password')
    );
      const headers = new Headers(
        {
          'Authorization': 'Basic Zmlyc3RAdXNlci5jb206Zmlyc3Q=',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        });

      const response = this.http.post('http://84.86.87.214:4202/api/CartService/Purchase' , JSON.parse(JSON.stringify(allpurchase)
      ) , headers ).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
      console.log(allpurchase);}

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {
  countx: string;
  total1080: string;
  login: string;
  constructor() {
    this.countx = localStorage.getItem('total');
    this.login = localStorage.getItem('login');
  }

  ngOnInit() {
  }

  increase1080() {
    this.add('1080');
  }
  increase1070() {
    this.add('1070');
  }
  increasex150() {
    this.add('x150');
  }
  increasex99() {
    this.add('x99');
  }
  increaseripjaws() {
    this.add('ripjaws');
  }
  increasevengeance() {
    this.add('vengeance');
  }
  increasehdd() {
    this.add('hdd');
  }
  increasesdd() {
    this.add('sdd');
  }
  increasekeyboard() {
    this.add('keyboard');
  }
  increasemouse() {
    this.add('mouse');
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
}

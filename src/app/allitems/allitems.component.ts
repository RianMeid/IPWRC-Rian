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
  showgraphics: boolean;
  showmotherboard: boolean;
  showmemory: boolean;
  showaccesory: boolean;
  constructor() {
    this.countx = localStorage.getItem('total');
    this.login = localStorage.getItem('login');
    this.showgraphics = true;
    this.showmemory = true;
    this.showmotherboard = true;
    this.showaccesory = true;
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
    this.add('ssd');
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

  filtergraphics() {
    this.showgraphics = true;
    this.showmemory = false;
    this.showmotherboard = false;
    this.showaccesory = false;
  }
  filtermotherboard() {
    this.showgraphics = false;
    this.showmemory = false;
    this.showmotherboard = true;
    this.showaccesory = false;
  }
  filtermemory() {
    this.showgraphics = false;
    this.showmemory = true;
    this.showmotherboard = false;
    this.showaccesory = false;
  }
  filteraccessories() {
    this.showgraphics = false;
    this.showmemory = false;
    this.showmotherboard = false;
    this.showaccesory = true;
  }
  filterallitems() {
    this.showgraphics = true;
    this.showmemory = true;
    this.showmotherboard = true;
    this.showaccesory = true;
  }
   logout() {
    localStorage.clear(); }
}

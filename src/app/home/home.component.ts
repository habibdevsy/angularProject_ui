import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'pro';
  tab1 = 1;
  tab2 = 0;
  tab3 = 0;
  color = 'red';
  colorEmp = '';

  show(n:number) {
    if (n == 1) { 
      this.tab1 = 1;
      this.tab2 = 0;
      this.tab3 = 0;
    }
    if (n == 2) { 
      this.tab1 = 0;
      this.tab2 = 1;
      this.tab3 = 0;
    }
    if (n == 3) { 
      this.tab1 = 0;
      this.tab2 = 0;
      this.tab3 = 1;
    }

  }
}

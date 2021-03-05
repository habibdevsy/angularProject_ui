import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  title = 'pro';
  tab1 = 1;
  tab2 = 0;
  tab3 = 0;
  color = 'red';
  colorEmp = '';

  constructor() { }

  ngOnInit(): void {
  }


  show(n: number): void {
    if (n === 1) {
      this.tab1 = 1;
      this.tab2 = 0;
      this.tab3 = 0;
    }
    if (n === 2) {
      this.tab1 = 0;
      this.tab2 = 1;
      this.tab3 = 0;
    }
    if (n === 3) {
      this.tab1 = 0;
      this.tab2 = 0;
      this.tab3 = 1;
    }

  }
}

import { Component } from '@angular/core';
import {TitleComponent} from './title/title.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro';
  active = 0;
  tab1 = 1;
  tab2 = 0;
  tab3 = 0;

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
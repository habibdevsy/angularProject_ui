import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
slideColor=['#7482fb','#fd7581','#4db183'];
  constructor() { 
    
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {
task="36 task";
titleTask=['app design','dashboard','test'];
  constructor() { }

  ngOnInit(): void {
  }

}

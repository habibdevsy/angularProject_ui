import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {
@Input() task="36 task";
@Input() titleTask=['app design','dashboard','test'];

@Output() whenClicked=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onCardClicked(id: number): void {
    this.whenClicked.emit(111);
    console.log("test",this.whenClicked.emit(111));
  }
}

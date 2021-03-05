import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() cardColor = 'red';
  @Input() title = 'Task Title';
  @Input() usersImages: User[] = [];

  @Output() whenClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClicked(id: number): void {
    this.whenClicked.emit('' + id);
  }
}

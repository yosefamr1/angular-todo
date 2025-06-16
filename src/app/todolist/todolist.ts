import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class Todolist {
  //get the array from parent
  @Input() todoarr!: { id: number; title: string }[];
  //send the id that i want do delete it
  @Output() onDelete = new EventEmitter<number>();
  deletetask(id: number) {
    this.onDelete.emit(id);
  }
}

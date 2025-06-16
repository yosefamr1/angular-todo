import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {
@Input() todoarr!:string[];
}

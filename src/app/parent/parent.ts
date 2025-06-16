import { Component } from '@angular/core';
import { Todolist } from '../todolist/todolist';
import { Todoapp } from '../todoapp/todoapp';

@Component({
  selector: 'app-parent',
  imports: [Todolist,Todoapp],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {
  todoArr:string[]=[];
  reciveData(event:string){
    this.todoArr.push(event)
  }
}

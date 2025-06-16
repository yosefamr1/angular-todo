import { Component } from '@angular/core';
import { Todolist } from '../todolist/todolist';
import { Todoapp } from '../todoapp/todoapp';

@Component({
  selector: 'app-parent',
  imports: [Todolist, Todoapp],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  //main array of tasks
  todoArr: { id: number; title: string }[] = [];
  //recive data from chiled (todoapp)
  reciveData(event: string) {
    const newTodo = {
      id: Date.now(),
      title: event,
    };
    //add to main array (todoArr)
    this.todoArr.push(newTodo);
  }
  //delete task (recive id from chiled (todolist))
  deletetask(id: number) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].id === id) {
        this.todoArr.splice(i, 1);
        break;
      }
    }
  }
}

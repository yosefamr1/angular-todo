import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  imports: [FormsModule],
  templateUrl: './todoapp.html',
  styleUrl: './todoapp.scss',
})
export class Todoapp {
  content: string = '';
//send the content that user type it to parent to add it to the main array (tasks)
  @Output() dataEvent = new EventEmitter<string>();
  sendData() {
    this.dataEvent.emit(this.content);
    console.log(this.content);
    //reset the value of the input
    this.content=""
  }
}

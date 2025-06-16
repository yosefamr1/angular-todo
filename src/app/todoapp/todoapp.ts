import { Component, EventEmitter ,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  imports: [FormsModule],
  templateUrl: './todoapp.html',
  styleUrl: './todoapp.scss'
})
export class Todoapp {
 content:string = "" ;
 
@Output() dataEvent = new EventEmitter<string>()
sendData(){
  this.dataEvent.emit(this.content)
  console.log(this.content);
  
  
}

}

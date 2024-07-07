import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  
  @Output() newTask = new EventEmitter<string>();
  task: string = '';

  saveForm() {
    this.newTask.emit(this.task);
    alert('Formulario guardado');
    this.task = '';

  }
}

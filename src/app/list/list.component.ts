import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() tasks: string[] = [];
  @Output() tasksCleared: EventEmitter<void> = new EventEmitter<void>();

  deleteList() {
    const confirmed = confirm("Deseas eliminar todas las tareas?");
    if (confirmed) {
      this.tasks = [];
      localStorage.clear();
      this.tasksCleared.emit(); // Emitir evento
    }

}
}
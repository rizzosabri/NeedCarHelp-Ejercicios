import { Component, Input } from '@angular/core';
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

  deleteList() {
    alert("Deseas Eliminar todas las Tareas?")
    this.tasks = [];
    localStorage.clear()

  }

}

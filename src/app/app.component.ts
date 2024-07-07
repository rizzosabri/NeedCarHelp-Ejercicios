import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList-app';

  tasks: string[] = [];

  constructor() {
    this.loadTasks();
  }


  addTask(task: string) {
    this.tasks.push(task);
    this.saveAllTasks()
  }

  saveAllTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    this.tasks = tasks ? JSON.parse(tasks) : [];

  }
   onTasksCleared() {
    this.tasks = [];
  }

}

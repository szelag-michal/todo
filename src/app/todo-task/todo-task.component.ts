import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent {
  tasksList: Array<Task> = [];

  constructor(private tasksService: TaskService) {

      this.tasksService.getTasksListObservable().subscribe((tasks: Array<Task>) => this.tasksList = tasks.filter(t => t.isDone === false));

  }

  remove(task: Task, i: number) {
    // this.tasksService.remove(task);
  }
  done(task: Task) {
    // this.tasksService.done(task);
  }
}

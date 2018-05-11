import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../model/task';
import { Post } from '../model/post';
@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent {
  doneTasks: Array<Task> = [];

  constructor(private tasksService: TaskService) {
    // this.tasksService.getTasksListObservable().subscribe((tasks: Array<Task>) => this.doneTasks = tasks.filter(t => t.isDone === true));
    // this.tasksService.getPosts().subscribe((posts: Array<Post>) => console.log(posts));
  }

}

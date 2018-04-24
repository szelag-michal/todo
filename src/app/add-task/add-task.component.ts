import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  @Output() emitTask = new EventEmitter<string>();
  constructor(private tasksService: TaskService) { }

  ngOnInit() {}

  addTask() {
    const task: Task = ({name: this.newTask, created: new Date().toLocaleDateString(), isDone: false});
    this.tasksService.add(task);
    this.newTask = '';
  }

}

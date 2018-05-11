import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Task } from '../model/task';

@Injectable()
export class TaskService {
  private tasksListObservable = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {}

  add(task: Task) {
    if (task !== undefined) {
      const list = this.tasksListObservable.getValue();
      list.push(task);
      this.tasksListObservable.next(list);
      this.httpService.addTask(list);
    }
  }

  remove(task: Task) {
    const list = this.tasksListObservable.getValue().filter(e => e !== task);
    this.tasksListObservable.next(list);
  }
  getTasksListObservable() {
    return this.httpService.getTasks();
  }
  getPosts() {
    // return this.httpService.getTasks();
  }
}

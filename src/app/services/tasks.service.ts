import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../model/task';
import { HttpService } from './http.service';

@Injectable()
export class TaskService {
  private tasksListObservable = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    const tasksList = [
      {name: 'Zakupy', created: new Date().toLocaleDateString(), isDone: false},
      {name: 'Sprzątanie', created: new Date().toLocaleDateString(), isDone: false},
      {name: 'Bułeczki', created: new Date().toLocaleDateString(), isDone: false},
      {name: 'zamiatanie', created: new Date().toLocaleDateString(), end: new Date().toLocaleDateString(), isDone: false}
    ];
    this.tasksListObservable.next(tasksList);
  }

  add(task: Task) {
    if (task !== undefined) {
      const list = this.tasksListObservable.getValue();
      list.push(task);
      this.tasksListObservable.next(list);
    }
  }

  remove(task: Task) {
    const list = this.tasksListObservable.getValue().filter(e => e !== task);
    this.tasksListObservable.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObservable.getValue();
    this.tasksListObservable.next(list);
  }
  getTasksListObservable(): Observable<Array<Task>> {
    return this.tasksListObservable.asObservable();
  }
  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObservable.getValue());
  }
}

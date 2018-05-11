import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../model/post';
import { Observable } from 'rxjs/Observable';
import { Task } from '../model/task';
@Injectable()
export class HttpService {
// https://api.mlab.com/api/1/databases?apiKey=iOuWKFheU-14YsFLgGzMecOQlNsO5w3l

readonly URL_DB = 'https://ng-tasks-app.firebaseio.com';

  constructor(private http: HttpClient) {
  }
  getTasks(): Observable<Array<Task>> {
   return this.http.get<Array<Task>>(`${this.URL_DB}/todo.json`);
  }
  addTask(task: Task[]) {
    return this.http.put(`${this.URL_DB}/todo.json`, task).subscribe(r => console.log(r));
  }
}

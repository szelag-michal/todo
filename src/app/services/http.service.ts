import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable()
export class HttpService {
// https://api.mlab.com/api/1/databases?apiKey=iOuWKFheU-14YsFLgGzMecOQlNsO5w3l

readonly URL_DB = 'https://api.mlab.com/api/1/databases/ng_db/collections/tasks';
readonly param = new HttpParams().set('apiKey', 'iOuWKFheU-14YsFLgGzMecOQlNsO5w3l');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    this.http.get(this.URL_DB, {params: this.param})
    .subscribe(tasks => console.log(tasks));
  }
  saveTasks(list: Array<Task>) {
    this.http.post(this.URL_DB, list, {params: this.param}).subscribe(data => console.log(data));
  }
}

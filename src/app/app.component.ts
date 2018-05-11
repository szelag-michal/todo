import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Post } from './model/post';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }
  tasks: Array<Task> = [];

  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.httpService.getTasks().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


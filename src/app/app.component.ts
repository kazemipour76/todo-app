import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./shared/todo.model";
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers :[TodoService]
})
export class AppComponent implements OnInit{
  // todos:any = [];
  // constructor(private todoServices: TodoService) {
  // }
  ngOnInit() {
    // this.todos=this.todoServices.getTodo();
    // this.todoServices.todosChanged.subscribe(todos=> this.todos=todos);
  }




}

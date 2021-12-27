import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styles: [
  ],
  // providers :[TodoService]

})
export class TodoListPageComponent implements OnInit {

  todos:any = [];
  constructor(private todoServices: TodoService) {
  }
  ngOnInit() {
    this.todos=this.todoServices.getTodo();
    this.todoServices.todosChanged.subscribe(todos=> this.todos=todos);
  }
}

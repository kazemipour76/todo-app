import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-add-page',
  templateUrl: './todo-add-page.component.html',
  styles: [
  ]
})
export class TodoAddPageComponent implements OnInit {

  textTodo: string='';
  constructor(private todoServices :TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.textTodo.length>0){
      this.todoServices.add(this.textTodo)
      this.textTodo='';
    }
  }

}

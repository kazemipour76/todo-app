import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from "../../shared/todo.model";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styles: [
  ]
})
export class EditTodoComponent implements OnInit {
  @Input('text') textTodo: string='';

  constructor() { }

  ngOnInit(): void {
  }

}

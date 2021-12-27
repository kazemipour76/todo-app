import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styles: [
  ],
  // providers:[TodoService]
})
export class FormAddTodoComponent implements OnInit {
  textTodo: string='';
  constructor(private todoServices :TodoService) { }

  ngOnInit(): void {
  }
  //
  // onSubmit() {
  //   if(this.textTodo.length>0){
  //      this.todoServices.add(this.textTodo)
  //     this.textTodo='';
  //   }
  // }
}

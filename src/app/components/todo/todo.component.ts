import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../../shared/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent {
 editStatus =false
 // @Input('todoItem') todo: TodoModel=new TodoModel(new Date(),false,'test')
 @Input('todoItem') todo: Array<TodoModel>=[]
constructor(private todoService:TodoService) {

}

  deleteTodo(key:Date) {
   this.todoService.delete(key)

  }

  toggleTodo(key:Date) {
    this.todoService.toggle(key)
  }
}

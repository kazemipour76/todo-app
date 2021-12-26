import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../../shared/todo.model";

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
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();
constructor() {
  console.log(this.todo)

}

  deleteTodo(key:Date) {
   this.delete.emit(key)

  }

  toggleTodo(key:Date) {
    this.done.emit(key)
  }
}

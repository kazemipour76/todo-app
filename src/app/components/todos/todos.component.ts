import {Component, EventEmitter, Input, Output} from '@angular/core';
import {colors} from "@angular/cli/utilities/color";
import {TodoModel} from "../../shared/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent {
  doneStatus:boolean=false;
  @Input() todos: Array<TodoModel>=[]


  get filterTodos(){
    return this.todos.filter((item:any) => item.done == this.doneStatus);
  }
  get donTodos(){
    return this.todos.filter((item:any) => item.done == true);

  }
 get  undoneTodos(){
    return this.todos.filter((item:any) => item.done == false);

  }
  constructor() {
  }

}

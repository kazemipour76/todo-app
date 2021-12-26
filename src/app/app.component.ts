import { Component } from '@angular/core';
import {TodoModel} from "./shared/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos:any = [];
  addTodo(todo:any) {
    this.todos=[
      ...this.todos, {key:Date.now(),done:false,text:todo}
    ]
    // console.log(this.todos)
  }

  deleteTodo($event: Date) {

    this.todos = this.todos.filter((item:any) => item.key !== $event);
  }

  toggleTodo($event: Date) {

    this.todos = this.todos.map((item:any)=>{
      if (item.key===$event){
        return{
          ...item,
          done:! item.done
        }
      }
      return item;
    })
  }
}

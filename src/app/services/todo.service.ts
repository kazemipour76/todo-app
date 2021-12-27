import {EventEmitter, Injectable} from '@angular/core';
import {TodoModel} from "../shared/todo.model";

// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {
  todosChanged=new EventEmitter<Array<TodoModel>>();

  constructor() { }
  todos:Array<TodoModel>=[]
  getTodo(){
   return this.todos
  }

  add(textTodo: string) {

      this.todos.push({key:new Date(),done:false,text:textTodo});
    this.todosChanged.emit(this.todos);
    // console.log(this.todos)
  }

  delete($event: Date) {
  let indexTodo =this.todos.findIndex(todo=>todo.key==$event)
    this.todos.splice(indexTodo,1)
    // this.todos = this.todos.filter((item:any) => item.key !== $event);
    // this.todosChanged.emit(this.todos)
  }

  toggle($event: Date) {

    this.todos = this.todos.map((item:any)=>{
      if (item.key===$event){
        return{
          ...item,
          done:! item.done
        }
      }
      return item;
    })
    this.todosChanged.emit(this.todos)
  }
}

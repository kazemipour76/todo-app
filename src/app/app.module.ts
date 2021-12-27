import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FormAddTodoComponent} from './components/form-add-todo/form-add-todo.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodosComponent} from './components/todos/todos.component';
import {FormsModule} from '@angular/forms';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import {TodoService} from "./services/todo.service";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoAddPageComponent } from './pages/todo-add-page/todo-add-page.component';
const routes:Routes=[
  {path :'',component:HomePageComponent},
  {path :'todolist',component:TodoListPageComponent},
  {path :'add',component:TodoAddPageComponent},

  ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormAddTodoComponent,
    TodoComponent,
    TodosComponent,
    EditTodoComponent,
    TodoListPageComponent,
    TodoAddPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

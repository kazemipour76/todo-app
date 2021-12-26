import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddComponent} from './add/add.component';
import {HeaderComponent} from './components/header/header.component';
import {FormAddTodoComponent} from './components/form-add-todo/form-add-todo.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodosComponent} from './components/todos/todos.component';
import {FormsModule} from '@angular/forms';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HeaderComponent,
    FormAddTodoComponent,
    TodoComponent,
    TodosComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

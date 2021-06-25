import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AddTodoComponent, ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

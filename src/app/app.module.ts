//angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';

//app modules
import { ToolbarModule } from './toolbar.component/toolbar.module';

//app components
import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input.component/todo-input.component';
import { TodoListComponent } from './todo-list.component/todo-list.component';

//app services
import { TodoListItemsService } from './todo-items.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [TodoListItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
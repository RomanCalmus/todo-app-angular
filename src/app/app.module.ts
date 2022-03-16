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
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; 

//app modules
import { ToolbarModule } from './components/toolbar.component/toolbar.module';

//app components
import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input.component/todo-input.component';
import { TodoListComponent } from './components/todo-list.component/todo-list.component';
import { DialogComponent } from './components/dialog.component/dialog.component';

//app services
import { TodoListItemsService } from './services/todo-items.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [TodoListItemsService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
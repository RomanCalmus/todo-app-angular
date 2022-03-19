//angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//material modules
import { Material } from './modules/material.module';

//app modules
import { ToolbarModule } from './components/toolbar.component/toolbar.module';

//app components
import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component/card.component';
import { CardsListComponent } from './components/cards-list.component/cards-list.component';
import { TodoInputComponent } from './components/todo-input.component/todo-input.component';
import { TodoListWritebaleComponent, TodoListReadOnlyComponent } from './components/todo-list.component/todo-list.component';
import { AutofocusDirective } from './derectives/autofocus.derective';

//app services
import { CardsListService } from './services/cards-list.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListWritebaleComponent,
    TodoListReadOnlyComponent,
    AutofocusDirective,
    CardsListComponent,
    CardComponent,
  ],
  imports : [
    AppRoutingModule,
    BrowserModule, 
    ToolbarModule, 
    ...Material.modules
  ],
  providers: [...Material.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
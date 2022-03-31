'use strict';

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
import { CardComponent, CardDialogComponent } from './components/card.component/card.component';
import { CardsListComponent } from './components/cards-list.component/cards-list.component';
import { CardInputComponent } from './components/card-input.component/card-input.component';
import { TodoListWritebaleComponent, TodoListReadOnlyComponent } from './components/todo-list.component/todo-list.component';
import { AutofocusDirective } from './derectives/autofocus.derective';

//app services
import { StaticInputComponent } from './components/static-input.component/static-input.component';
import { CardActionsComponent } from './components/card-actions.component/card-actions.component';
import { StoreModule } from '@ngrx/store';
import { cardInputReducer } from './components/card-input.component/state/reducers';


@NgModule({
  declarations: [
    AppComponent,
    CardInputComponent,
    CardComponent,
    TodoListWritebaleComponent,
    TodoListReadOnlyComponent,
    AutofocusDirective,
    CardsListComponent,
    CardDialogComponent,
    CardActionsComponent,
    StaticInputComponent
  ],
  imports : [
    AppRoutingModule,
    BrowserModule, 
    ToolbarModule, 
    ...Material.modules,
    StoreModule.forRoot({cardinput: cardInputReducer})
  ],
  providers: [...Material.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
'use strict';

//libs
import { Material } from './modules/material.module';
import { StoreModule } from '@ngrx/store';

//angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//app modules
import { ToolbarModule } from './components/toolbar.component/toolbar.module';

//app components
import { AppComponent } from './app.component';
import { CardComponent, CardDialogComponent } from './components/card/card.component/card.component';
import { CardsListComponent } from './components/card/cards-list.component/cards-list.component';
import { CardInputComponent } from './components/card/card-input.component/card-input.component';
import { TodoListWritebaleComponent, TodoListReadOnlyComponent } from './components/todo-list.component/todo-list.component';
import { AutofocusDirective } from './derectives/autofocus.derective';

//app services
import { StaticInputComponent } from './components/static-input.component/static-input.component';
import { CardActionsComponent } from './components/card/card-actions.component/card-actions.component';
import { cardInputReducer } from './components/card/card-input.component/state/card-input.reducers';
import { staticInputReducer } from './components/static-input.component/state/static-input.reducers';


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
    StoreModule.forRoot({
      cardinput: cardInputReducer,
      staticInput: staticInputReducer
    })
  ],
  providers: [...Material.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
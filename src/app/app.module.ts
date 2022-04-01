'use strict';

//libs
import { Material } from './modules/material.module';
import { StoreModule } from '@ngrx/store';

//tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

//angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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

//app reducers
import { cardsReducer } from './components/card/card.component/state/card.reducers';
import { cardWindowReducer } from './components/card/card.component/state/card.window.reducers';


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
    HttpClientModule,
    BrowserModule, 
    ToolbarModule, 
    ...Material.modules,
    StoreModule.forRoot({
      cardinput: cardInputReducer,
      cards: cardsReducer,
      cardWindow: cardWindowReducer,
      staticInput: staticInputReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [...Material.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
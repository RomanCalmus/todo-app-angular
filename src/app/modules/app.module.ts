//app components
import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component/card.component';
import { CardsListComponent } from './components/cards-list.component/cards-list.component';
import { TodoInputComponent } from './components/todo-input.component/todo-input.component';
import { TodoListWritebaleComponent, TodoListReadOnlyComponent } from './components/todo-list.component/todo-list.component';
import { AutofocusDirective } from './derectives/autofocus.derective';

//app modules
import { ToolbarModule } from './components/toolbar.component/toolbar.module';


const components = [
    AppComponent,
    TodoInputComponent,
    TodoListWritebaleComponent,
    TodoListReadOnlyComponent,
    AutofocusDirective,
    CardsListComponent,
    CardComponent
]

const modules = [
    ToolbarModule
]

export const App = {
    components,
    modules,
    bootstrap: [AppComponent]
}
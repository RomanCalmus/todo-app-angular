import { Component } from '@angular/core';
import { TodoListItemsService } from '../todo-items.service';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {    
    constructor(public list: TodoListItemsService) {}
}
import { Component } from '@angular/core';
import { TodoListItemsService } from '../../services/todo-items.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  public value: string = ''

  constructor(private list: TodoListItemsService) {
    this.list.addItem({
      title: 'item1', 
      description: 'description',
      done: false
    })
  }

  createTodo(key: string) {
    if (key == 'Enter') {
      this.list.createItem(this.value);
      this.value = '';
    }
  }
}
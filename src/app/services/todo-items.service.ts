import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemsService {
  items: TodoItems = []
  
  getItems(): TodoItems {
    return this.items;
  }

  createItem(title: string, description?: string) {
    if (title.length == 0) return;
    if (!description) description = '';

    this.items.push({title, description, done: false});
  }

  addItem(item: TodoItem) {
    this.items.push(item);
  }
}

export type TodoItems = Array<TodoItem>;

export interface TodoItem {
  title: string,
  description: string,
  done: boolean
}
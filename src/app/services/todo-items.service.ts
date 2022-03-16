import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemsService {
  items: TodoItems = [defaultItem]
  
  getItems(): TodoItems {
    return this.items;
  }

  setItem(title: string, description?: string) {
    if (title.length == 0) return;
    if (!description) description = '';

    this.items.push({title, description, done: false});
  }
}

export type TodoItems = Array<TodoItem>;

export interface TodoItem {
  title: string,
  description: string,
  done: boolean
}

const defaultItem: TodoItem = {
  title: 'item1', 
  description: 'description',
  done: true
}
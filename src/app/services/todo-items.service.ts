import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemsService {
  items: TodoItems = [{
    title: 'item1', 
    description: 'description'
  }]
  
  getList(): TodoItems {
    return this.items;
  }

  setItem(title: string, description?: string) {
    this.items.push({title, description: ''});
  }
}

export type TodoItems = Array<TodoItem>;

export interface TodoItem {
  title: string,
  description: string
}
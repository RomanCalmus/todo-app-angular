import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemsService {
  items: Array<string> = []
  getList(): Array<string> {
    return this.items;
  }

  setItem(item: string) {
    this.items.push(item);
  }
}
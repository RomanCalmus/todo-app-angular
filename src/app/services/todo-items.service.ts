import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemsService {
  items: TodoItems = []
  doneItems: TodoItems = []

  createItem(title: string = '', description?: string): TodoItem {
    if (!description) description = '';
    const item = {title, description, done: false};
    this.items.push(item);
    return item;
  }

  addItem(item: TodoItem) {
    this.items.push(item);
  }

  toggleItem(item: TodoItem) {
    if (item.done) {
      item.done = false;
      this.moveItemFromTo(item, this.doneItems, this.items);
    } else {
      item.done = true;
      this.moveItemFromTo(item, this.items, this.doneItems);
    }
  }

  private removeItemFrom(item: TodoItem, items: TodoItems) {
      const i = items.indexOf(item);
      if (i != -1) items.splice(i, 1)[0];
  }

  private moveItemFromTo(item: TodoItem, from: TodoItems, to: TodoItems) {
    this.removeItemFrom(item, from);
    to.push(item);
  }

  removeItem(item: TodoItem) {
    this.removeItemFrom(item, this.items);
  }

  getNextItemAfter(item: TodoItem): TodoItem {
    const i = this.items.indexOf(item);

    if (i == -1 || i == this.items.length - 1) {
      return this.createItem();
    } else {
      return this.items[i + 1];
    }
  }

  getPrevItemBefore(item: TodoItem): TodoItem {
    const i = this.items.indexOf(item);

    if (i === 0) {
      return this.items[0];
    } else {
      return this.items[i - 1];
    }
  }

  isLastItem(item: TodoItem) {
    const i = this.items.indexOf(item);
    return i === this.items.length - 1;
  }

  isFirstItem(item: TodoItem) {
    return this.items.indexOf(item) === 0;
  }
}

export type TodoItems = Array<TodoItem>;

export interface TodoItem {
  title: string,
  description: string,
  done: boolean
}
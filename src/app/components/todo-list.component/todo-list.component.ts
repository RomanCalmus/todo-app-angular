import { Component } from '@angular/core';
import { TodoList, TodoItem } from '../../classes/todo-list';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {    
    isNewEdit: boolean = false
    currentEditItem: TodoItem | undefined
    value: string = ''
    isShowDoneItems: boolean = true
    list: TodoList

    constructor() {
      this.list = new TodoList();
    }

    toggleCheck(item: TodoItem) {
      this.list.toggleItem(item);
    }

    applyNewItem() {
      this.isNewEdit = !this.isNewEdit;
      if (!this.value) return;
      this.list.createItem(this.value);
      this.value = '';
    }

    keyUp(key: string) {
      if (key != 'Enter') return;
      this.applyNewItem();
    }

    onKeyDownEdit(key: string) {
      if (!this.currentEditItem) return;
      switch (key) {
        case 'Enter': 
          this.editItem(this.list.getNextItemAfter(this.currentEditItem));
          break;
        case 'ArrowUp':
          if (this.list.isFirstItem(this.currentEditItem)) break;
          this.editItem(this.list.getPrevItemBefore(this.currentEditItem));
          break;
        case 'ArrowDown':
          if (this.list.isLastItem(this.currentEditItem)) break;
          this.editItem(this.list.getNextItemAfter(this.currentEditItem));
          break;
        case 'Backspace':
          if (this.currentEditItem.title.length !== 0) break;
          const itemForRemove = this.currentEditItem;
          this.editItem(this.list.getPrevItemBefore(this.currentEditItem));
          this.removeThisItem(itemForRemove);
          break;
        case 'Escape':
          if (!this.currentEditItem) break;
          this.clearCurrentitemEdit();
          break;
      }
    }

    removeThisItem(item: TodoItem) {
      this.list.removeItem(item);
    }

    clearCurrentitemEdit() {
      this.currentEditItem = undefined;
    }

    editItem(item: TodoItem) {
      if (this.currentEditItem === item) return;
      this.currentEditItem = item;
    }

    createNewItem() {
      const item = this.list.createItem();
      this.editItem(item);
    }
}
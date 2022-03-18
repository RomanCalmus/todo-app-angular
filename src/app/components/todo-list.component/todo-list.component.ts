import { Component } from '@angular/core';
import { TodoListItemsService, TodoItem } from '../../services/todo-items.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog.component/dialog.component';
import { getRandomRgbaColor } from 'src/app/misc/colors';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {    
    isNewEdit: boolean = false
    currentEditItem: TodoItem | undefined
    value: string = ''
    constructor(public list: TodoListItemsService, public dialog: MatDialog) {}
    
    openItem(item: TodoItem, event: any) {
      const element: HTMLInputElement = event.target;
      if (element.tagName == "INPUT" && element.type == "checkbox") return;
        //this.dialog.open(DialogComponent, {data: item});
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
          this.list.removeItem(itemForRemove);
          break;
        case 'Escape':
          if (!this.currentEditItem) break;
          this.clearCurrentitemEdit();
          break;
      }
    }

    clearCurrentitemEdit() {
      this.currentEditItem = undefined;
    }

    editItem(item: TodoItem) {
      this.currentEditItem = item;
    }

    createNewItem() {
      const item = this.list.createItem();
      this.editItem(item);
    }
}
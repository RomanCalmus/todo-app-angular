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

    keyUpEdit(key: string) {
      if (key != 'Enter') return;
      if (this.currentEditItem) {
        this.currentEditItem = this.list.getNextItemAfter(this.currentEditItem);
      } else {
        this.currentEditItem = this.list.createItem();
      }
    }

    clearCurrentitemEdit() {
      this.currentEditItem = undefined;
    }

    editItem(item: TodoItem) {
      this.currentEditItem = item;
    }

    createNewItem() {
      const item = this.list.createItem('');
      this.currentEditItem = item;
    }
}
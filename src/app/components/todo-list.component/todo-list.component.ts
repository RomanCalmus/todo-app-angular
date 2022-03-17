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
    constructor(public list: TodoListItemsService, public dialog: MatDialog) {}
    
    openItem(item: TodoItem, event: any) {
      const element: HTMLInputElement = event.target;
        if (element.tagName == "INPUT" && element.type == "checkbox") return;
        this.dialog.open(DialogComponent, {data: item});
    }

    toggleCheck(item: TodoItem) {
      item.done = !item.done;
    }

}
import { Component, Input, Output } from '@angular/core';
import { TodoList, TodoItem } from '../../classes/todo-list';
import { CardsListService } from 'src/app/services/cards-list.service';

@Component({
  selector: 'todo-list-readonly',
  templateUrl: './todo-list-readonly.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListReadOnlyComponent {   
  list: TodoList = new TodoList();
  @Input() cardId: any = -1;
  constructor(private lists: CardsListService) {}

  ngOnInit() {
    this.list = this.lists.getTodoListByCardId(this.cardId);
  }
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListWritebaleComponent {    
    @Input() isNewEdit: boolean = false
    currentEditItem: TodoItem | undefined
    value: string = ''
    isShowDoneItems: boolean = true
    isRemoveNewItemButton: boolean = false
    list: TodoList = new TodoList();
    @Input() cardId: any = -1;

    constructor(private lists: CardsListService) {}

    toggleCheck(item: TodoItem) {
      this.clearCurrentitemEdit(); 
      this.list.toggleItem(item);
    }

    onKeyDownEdit(event: KeyboardEvent) {
      const {key} = event;

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
          let newItemForEdit = this.list.getPrevItemBefore(itemForRemove, false);
          if (newItemForEdit) {
            this.editItem(newItemForEdit);
          } else {
            newItemForEdit = this.list.getNextItemAfter(itemForRemove, false);
            newItemForEdit ? this.editItem(newItemForEdit) : this.clearCurrentitemEdit();
          }
          this.removeThisItem(itemForRemove);
          break;
        case 'Escape':
          event.stopPropagation();
          if (!this.currentEditItem) break;
          this.clearCurrentitemEdit();
          break;
      }
    }

    onBlur() {
      const that = this;
      const bluredItem = this.currentEditItem;
      setTimeout(() => {
        if (bluredItem === that.currentEditItem) that.clearCurrentitemEdit();
      }, 100);
    }

    removeThisItem(item: TodoItem) {
      this.list.removeItem(item);
    }

    clearCurrentitemEdit() {
      const that = this;
      this.currentEditItem = undefined;
      setTimeout(() => that.isRemoveNewItemButton = false);
    }

    editItem(item: TodoItem) {
      if (this.currentEditItem === item) return;
      this.currentEditItem = item;
    }

    createNewItem() {
      const item = this.list.createItem();
      this.editItem(item);
      this.isRemoveNewItemButton = true;
    }

    ngOnInit(): void {
      this.list = this.lists.getTodoListByCardId(this.cardId);
      if (this.isNewEdit) this.currentEditItem = this.list.items[0];
    }
}
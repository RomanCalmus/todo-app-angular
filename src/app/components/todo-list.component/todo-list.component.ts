import { Component, Input, Output } from '@angular/core';
//import { TodoList } from '../../classes/todo-list';
import { CardItem, CardItems } from 'src/app/models/card-item.model';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'todo-list-readonly',
  templateUrl: './todo-list-readonly.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListReadOnlyComponent {   
  @Input() card!: Card
  constructor(private store: Store) {}

  checkbox(event: MouseEvent) {
    event.preventDefault();
  }
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListWritebaleComponent {    
    @Input() card!: Card
    @Input() isNewEdit        = false
    value                     = ''
    isShowDoneItems           = true
    isRemoveNewItemButton     = false
    currentEditItem : CardItem | undefined
    constructor(private store: Store) {}

    toggleCheck(item: CardItem) {
      // this.clearCurrentitemEdit(); 
      // this.list.toggleItem(item);
    }

    onKeyDownEdit(event: KeyboardEvent) {
      const {key} = event;

      // if (!this.currentEditItem) return;
      // switch (key) {
      //   case 'Enter': 
      //     //this.editItem(this.list.getNextItemAfter(this.currentEditItem));
      //     break;
      //   case 'ArrowUp':
      //     if (this.list.isFirstItem(this.currentEditItem)) break;
      //     this.editItem(this.list.getPrevItemBefore(this.currentEditItem));
      //     break;
      //   case 'ArrowDown':
      //     if (this.list.isLastItem(this.currentEditItem)) break;
      //     this.editItem(this.list.getNextItemAfter(this.currentEditItem));
      //     break;
      //   case 'Backspace':
      //     if (this.currentEditItem.title.length !== 0) break;
      //     const itemForRemove = this.currentEditItem;
      //     let newItemForEdit = this.list.getPrevItemBefore(itemForRemove, false);
      //     if (newItemForEdit) {
      //       this.editItem(newItemForEdit);
      //     } else {
      //       newItemForEdit = this.list.getNextItemAfter(itemForRemove, false);
      //       newItemForEdit ? this.editItem(newItemForEdit) : this.clearCurrentitemEdit();
      //     }
      //     this.removeThisItem(itemForRemove);
      //     break;
      //   case 'Escape':
      //     event.stopPropagation();
      //     if (!this.currentEditItem) break;
      //     this.clearCurrentitemEdit();
      //     break;
      // }
    }

    onBlur() {
      // const that = this;
      // const bluredItem = this.currentEditItem;
      // setTimeout(() => {
      //   if (bluredItem === that.currentEditItem) that.clearCurrentitemEdit();
      // }, 100);
    }

    removeThisItem(item: CardItem) {
      //this.list.removeItem(item);
    }

    clearCurrentitemEdit() {
      // const that = this;
      // this.currentEditItem = undefined;
      // setTimeout(() => that.isRemoveNewItemButton = false);
    }

    editItem(item: CardItem) {
      // if (this.currentEditItem === item) return;
      // this.currentEditItem = item;
    }

    createNewItem() {
      // const item = this.list.createItem();
      // this.editItem(item);
      // this.isRemoveNewItemButton = true;
    }

    ngOnInit(): void {
      // this.list = this.lists.getTodoListByCardId(this.cardId);
      // if (this.isNewEdit) this.currentEditItem = this.list.items[0];
    }
}
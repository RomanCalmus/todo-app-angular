import { CardItem, CardItems } from "../models/card.model";

export class TodoList {
  items: CardItems = []
  doneItems: CardItems = []

  createItem(text: string = ''): CardItem {
    const item:CardItem = {text, done: false};
    this.addItem(item);
    return item;
  }

  addItem(item: CardItem) {
    this.items = [...this.items, item];
  }

  toggleItem(item: CardItem) {
    if (item.done) {
      item.done = false;
      //this.moveItemFromTo(item, this.doneItems, this.items);
    } else {
      item.done = true;
      //this.moveItemFromTo(item, this.items, this.doneItems);
    }
  }

  // private removeItemFrom(item: CardItem, items: CardItems) {
  //     const i = items.indexOf(item);
  //     if (i != -1) {
  //       this.items = items.slice(i, 1);
  //     }
  // }

  // private moveItemFromTo(item: TodoItem, from: TodoItems, to: TodoItems) {
  //   this.removeItemFrom(item, from);
  //   to.push(item);
  // }

  // private getItemList(item: TodoItem): TodoItems {
  //   return item.done ? this.doneItems : this.items;
  // }

  // removeItem(item: TodoItem) {
  //   this.removeItemFrom(item, this.getItemList(item));
  // }

  // getNextItemAfter(item: TodoItem, isCreateNew = true): TodoItem {
  //   const i = this.items.indexOf(item);

  //   if ((i == -1 || i == this.items.length - 1) && isCreateNew) {
  //     return this.createItem();
  //   } else {
  //     return this.items[i + 1];
  //   }
  // }

  // getPrevItemBefore(item: TodoItem, isReturnSame = true): TodoItem {
  //   const i = this.items.indexOf(item);

  //   if (i === 0 && isReturnSame) {
  //     return this.items[0];
  //   } else {
  //     return this.items[i - 1];
  //   }
  // }

  // isLastItem(item: TodoItem) {
  //   const i = this.items.indexOf(item);
  //   return i === this.items.length - 1;
  // }

  // isFirstItem(item: TodoItem) {
  //   return this.items.indexOf(item) === 0;
  // }

  isEmpty() {
    return this.items.length && this.doneItems.length;
  }
}
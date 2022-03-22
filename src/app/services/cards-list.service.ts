import { Injectable } from "@angular/core";
import { TodoList } from "../classes/todo-list";
import { random } from "../misc/colors";

let nextId = 0;
const TodoLists: Map<number, TodoList> = new Map();

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    cards: Array<Card> = []

    createCard(title = '', color: CardColor = 'yellow', tags: string[] = [], isRegister = false): Card {
        const card: Card = {title, tags, id: nextId, color};
        TodoLists.set(nextId, new TodoList());
        if (isRegister) this.registerCard(card);
        nextId++;

        return card;
    }

    registerCard(card: Card) {
        this.cards.push(card);
    }

    removeCard(card: Card) {
        TodoLists.delete(card.id);
        const i = this.cards.indexOf(card);
        if (i !== -1 ) this.cards.splice(i, 1);
    }

    getTodoListByCardId(id: number): TodoList {
        const list = TodoLists.get(id);
        if (!list) throw new Error(`cannot find TodoList with id:${id}`);
        return list;
    }
}

export interface Card {
    id    : number,
    title : string,
    tags  : string[],
    color : CardColor
}

export type CardColor = 'yellow' | 'green' | 'red' | 'gray';
export const CardColors: Array<CardColor> = ['yellow', 'green', 'red', 'gray'];
export function makeRandomColor() {
    return CardColors[random(CardColors.length)];
}

export const PlaceholderTitle = 'Список без названия';
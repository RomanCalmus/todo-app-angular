import { Injectable } from "@angular/core";
import { TodoList } from "../classes/todo-list";

let nextId = 0;
const TodoLists: Map<number, TodoList> = new Map();

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    cards: Set<Card> = new Set()

    createCard(title: string, tags: string[] = []) {
        this.cards.add({title, tags, id: nextId});
        TodoLists.set(nextId, new TodoList());
        nextId++;
    }

    getTodoListByCardId(id: number): TodoList {
        const list = TodoLists.get(id);
        if (!list) throw new Error(`cannot find TodoList with id:${id}`);
        return list;
    }
}

export interface Card {
    title: string,
    tags: string[],
    id: number
}
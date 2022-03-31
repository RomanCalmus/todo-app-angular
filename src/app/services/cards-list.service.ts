import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TodoList } from "../classes/todo-list";
import { Card , CardColor} from "../models/card.model";
import { cardsUrl } from "./server.config";

let nextId = 0;
const TodoLists: Map<number, TodoList> = new Map();

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    constructor(private http: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(cardsUrl).pipe(map(cards => cards || []));
    }

    createCard(title = '', color: CardColor = 'yellow', isRegister = false): void {
        // const card: Card = {title, id: nextId, color};
        // TodoLists.set(nextId, new TodoList());
        // if (isRegister) this.registerCard(card);
        // nextId++;

        // return card;
    }

    registerCard(card: Card) {
        // this.cards.push(card);
    }

    removeCard(card: Card) {
        // TodoLists.delete(card.id);
        // const i = this.cards.indexOf(card);
        // if (i !== -1 ) this.cards.splice(i, 1);
    }

    getTodoListByCardId(id: number): void {
        // const list = TodoLists.get(id);
        // if (!list) throw new Error(`cannot find TodoList with id:${id}`);
        // return list;
    }
}

export const PlaceholderTitle = 'Список без названия';
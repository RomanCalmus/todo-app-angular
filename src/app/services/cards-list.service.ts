import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CardItem, CardItems } from "../models/card-item.model";
import { Card , CardColor} from "../models/card.model";
import { cardsUrl } from "./server.config";

let nextId = 0;

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    constructor(private http: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(cardsUrl).pipe(map(cards => cards || []));
    }

    createDefaultCard(color: CardColor): Card {
        return {title: '', id: nextId++, color, items: [{text: '', done: false} ]};
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

export const Events = {
    LoadCards: '[Cards List] Load Cards',
    LoadedSuccess: '[Card List] Cards Loaded Success',
    LoadedError: '[Card List] Cards Loaded Error',
}
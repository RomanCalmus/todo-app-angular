import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Card , CardColor} from "../models/card.model";
import { cardsUrls } from "./server.config";

let nextId = 0;

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    constructor(private http: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(cardsUrls.cards()).pipe(map(cards => cards || []));
    }

    createCard(card: Card) {
        return this.http.post<Card[]>(cardsUrls.card(card.id), {card});
    }

    removeCard({id}: any) {
        return this.http.delete<Card[]>(cardsUrls.card(id));
    }

    getTodoListByCardId(id: number): void {
        // const list = TodoLists.get(id);
        // if (!list) throw new Error(`cannot find TodoList with id:${id}`);
        // return list;
    }

    createDefaultCard(color: CardColor): Card {
        return {title: '', id: nextId++, color, items: [{text: '', done: false} ]};
    }
}

export const PlaceholderTitle = 'Список без названия';

export const Events = {
    LoadCards: '[Cards List] Load Cards',
    LoadedSuccess: '[Card List] Cards Loaded Success',
    LoadedError: '[Card List] Cards Loaded Error',
    RemoveCard: '[Card List] Cards Remove Card',
    RemoveCardSuccess: '[Card List] Cards Remove Card Success'
}
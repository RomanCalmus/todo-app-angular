import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Card , CardColor} from "../models/card.model";
import { cardsUrls } from "./server.config";

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    constructor(private http: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(cardsUrls.cards()).pipe(map(cards => cards || []));
    }

    createCard({title, items, color}: any) {
        return this.http.post(cardsUrls.cards(), {title, items, color});
    }

    removeCard({id}: any) {
        return this.http.delete(cardsUrls.card(id));
    }

    getTodoListByCardId(id: number): void {
        // const list = TodoLists.get(id);
        // if (!list) throw new Error(`cannot find TodoList with id:${id}`);
        // return list;
    }

    createDefaultCard(color: CardColor): Card {
        return {title: '', id: -1, color, items: [{text: '', done: false} ]};
    }
}

export const PlaceholderTitle = 'Список без названия';

export const Events = {
    LoadCards: '[Cards List] Load Cards',
    LoadedSuccess: '[Card List] Loaded Success',
    LoadedError: '[Card List] Loaded Error',

    RemoveCard: '[Card List] Remove Card',
    RemoveCardSuccess: '[Card List] Remove Card Success',

    CreateCard: '[Card List] Create Card',
    CreateCardSuccess: '[Card List] Create Card Success',
    CreateCardError: '[Card List] Create Error',
}
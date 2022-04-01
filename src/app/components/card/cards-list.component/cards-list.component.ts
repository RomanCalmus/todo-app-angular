import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Card } from "src/app/models/card.model";
import { CardsListService, PlaceholderTitle } from "src/app/services/cards-list.service";
import { openCardWindow } from "../card.component/state/card.actions";

@Component({
    selector: 'cards-list',
    templateUrl: "./cards-list.component.html",
    styleUrls: ['cards-list.component.scss']
})
export class CardsListComponent {
    openedCardId: number = -1
    defaultCardTitle = PlaceholderTitle
    @Input() cards: ReadonlyArray<Card> | null= []

    constructor(public cardsService: CardsListService, private store: Store) {}

    openCard(card: Card) {
        this.store.dispatch(openCardWindow({card}));
    }

    removeCard(card: Card) {
       
    }
}
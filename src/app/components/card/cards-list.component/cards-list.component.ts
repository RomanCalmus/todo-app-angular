import { Component, Input } from "@angular/core";
import { ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Card } from "src/app/models/card.model";
import { Events as CardListEvents, CardsListService, PlaceholderTitle } from "src/app/services/cards-list.service";
import { selectCardAction } from "../card.component/state/card.actions";
import { selectCard, selectCards } from "../card.component/state/card.selectors";
import { openCardWindow } from "../card.component/state/card.window.actions";

@Component({
    selector: 'cards-list',
    templateUrl: "./cards-list.component.html",
    styleUrls: ['cards-list.component.scss']
})
export class CardsListComponent {
    openedCardId: number = -1
    defaultCardTitle = PlaceholderTitle
    cards$  = this.store.select(selectCards);

    constructor(private store: Store) {}

    openCard(card: Card) {
        this.store.dispatch(selectCardAction({card}));
        this.store.dispatch(openCardWindow());
    }

    removeCard(card: Card) {
       
    }

    ngOnInit() {
        this.store.dispatch({ type: CardListEvents.LoadCards });
    }
}
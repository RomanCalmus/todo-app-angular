import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Card, PlaceholderTitle } from "src/app/models/card.model";
import { CardsListEvents } from "src/app/services/cards-list.service";
import { selectCards } from "../card.component/state/card.selectors";
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

    openCard(card: Card, event: MouseEvent) {
        event.stopPropagation();

        this.store.dispatch(openCardWindow({card}));
    }

    ngOnInit() {
        this.store.dispatch({ type: CardsListEvents.LoadCards });
    }
}
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Card, CardColor, CardColors } from "src/app/models/card.model";
import { CardsListEvents } from "../../../services/cards-list.service"
import { removeCardAction } from "../card.component/state/card.actions";

@Component({
    selector: 'card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent {
    @Input()  card!: Card
    colors = CardColors
    constructor(private store: Store) {}

    removeAction(event: MouseEvent) {
        const {card, store} = this;
        if (!card) throw new Error('card isn\'t provided');
        event.stopPropagation();
        
        store.dispatch(removeCardAction({card}));
        store.dispatch({ type: CardsListEvents.RemoveCard, card })
    }

    stopClick(event: MouseEvent) {
        event.stopPropagation();
    }
    
    getColors() {
        return this.colors.filter(color => color != this.card?.color);
    }

    colorAction(color: CardColor) {
        if (!this.card) throw new Error('card isn\'t provided');
        const card = this.card;
        setTimeout(() => card.color = color, 130);
    }
}
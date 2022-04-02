import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Card, CardColor, CardColors } from "src/app/models/card.model";
import { removeCard } from "../card.component/state/card.actions";



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
        if (!this.card) throw new Error('card isn\'t provided');
        event.stopPropagation();
        this.store.dispatch(removeCard({card: this.card}));
    }

    stopClick(event: MouseEvent) {
        event.stopPropagation();
    }
    
    getColors() {
        const that = this;
        return this.colors.filter(color => color != that.card?.color);
    }

    colorAction(color: CardColor) {
        if (!this.card) throw new Error('card isn\'t provided');
        const card = this.card;
        setTimeout(() => card.color = color, 130);
    }
}
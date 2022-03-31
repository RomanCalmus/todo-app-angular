import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card, CardColor, CardColors } from "src/app/models/card.model";



@Component({
    selector: 'card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent {
    @Input()  card: Card | undefined
    @Output() remove = new EventEmitter<string>()
    @Output() color  = new EventEmitter<string>()
    colors = CardColors

    constructor() {}

    removeAction(event: MouseEvent) {
        if (!this.card) throw new Error('card isn\'t provided');
        event.stopPropagation();
        this.remove.emit();
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
        this.color.emit(color);
    }
}
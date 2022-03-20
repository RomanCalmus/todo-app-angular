import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card, CardsListService } from "src/app/services/cards-list.service";


@Component({
    selector: 'card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent {
    @Input()  card: Card | undefined
    @Output() remove = new EventEmitter<string>()

    constructor(protected cardsService: CardsListService) {}

    removeAction() {
        this.remove.emit();
    }
}
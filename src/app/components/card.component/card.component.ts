import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Card, CardsListService, PlaceholderTitle } from "src/app/services/cards-list.service";


@Component({
    templateUrl: "./card-dialog.component.html",
    styleUrls: ['card.component.scss']
})
export class CardDialogComponent {
    card: Card
    constructor(
        public dialogRef: MatDialogRef<CardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

        if (!data.card) throw new Error('where the card?');
        this.card = data.card;
    }
}

@Component({
    selector: 'card',
    templateUrl: "./card.component.html",
    styleUrls: ['card.component.scss']
})
export class CardComponent {
    @Input()  card: Card | undefined
    @Input()  isNewEdit    = false
    @Output() remove      = new EventEmitter<string>()  
    defaultTitle = PlaceholderTitle
    constructor (protected cardsService: CardsListService) {}

    removeCard() {
        if (!this.card) throw new Error('haven\'t card field');
        this.cardsService.removeCard(this.card);
        this.remove.emit();
    }
}
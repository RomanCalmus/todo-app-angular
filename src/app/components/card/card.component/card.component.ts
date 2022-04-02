import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Card } from "src/app/models/card.model";
import { CardsListService, PlaceholderTitle } from "src/app/services/cards-list.service";


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
    @Input()  card!: Card
    @Input()  isNewEdit       = false
    @Input()  readOnly        = false
    @Input()  removeAnimation = true
    @Output() remove          = new EventEmitter<string>()  
    defaultTitle              = PlaceholderTitle
    isToRemove                = false
    constructor () {}

    removeCard() {
        if (this.removeAnimation) this.isToRemove = true;

        // setTimeout(() => {
        //     //that.cardsService.removeCard(card);
        //     //that.remove.emit()
        // }, 100);
    }
}
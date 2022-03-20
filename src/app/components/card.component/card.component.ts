import { Component, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Card, PlaceholderTitle } from "src/app/services/cards-list.service";


@Component({
    templateUrl: "./card.component.html",
    styleUrls: ['card.component.scss']
})
export class CardDialogComponent {
    card: Card
    @Input() isNewEdit    = false
    @Input() defaultTitle = PlaceholderTitle

    constructor(
        public dialogRef: MatDialogRef<CardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

        const card = data.card;
        if (!card) throw new Error('where card?');
        this.card = card;
    }
}

@Component({
    selector: 'card',
    templateUrl: "./card.component.html",
    styleUrls: ['card.component.scss']
})
export class CardComponent {
    @Input() card: Card | undefined
    @Input() isNewEdit    = false
    defaultTitle = PlaceholderTitle
}
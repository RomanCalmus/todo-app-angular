import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from "@ngrx/store";
import { Card, PlaceholderTitle } from "src/app/models/card.model";
import { closeCardWindow } from "./state/card.window.actions";


@Component({
    templateUrl: "./card-dialog.component.html",
    styleUrls: ['card.component.scss']
})
export class CardDialogComponent {
    card: Card
    constructor(
        public dialogRef: MatDialogRef<CardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private store: Store
    ) {
        if (!data.card) throw new Error('where the card?');
        this.card = data.card;
    }

    onRemove() {
        this.store.dispatch(closeCardWindow());
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
    defaultTitle              = PlaceholderTitle
    isToRemove                = false
    constructor () {}

    removeCard() {
        if (this.removeAnimation) this.isToRemove = true;

    }
}
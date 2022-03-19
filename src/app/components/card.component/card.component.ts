import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Card, CardsListService } from "src/app/services/cards-list.service";
import { TodoItem } from "../../classes/todo-list";

@Component({
    selector: 'card',
    templateUrl: "./card.component.html",
    styleUrls: ['card.component.scss']
})
export class CardComponent {
    card: Card

    constructor(
        public dialogRef: MatDialogRef<CardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private cards: CardsListService
    ) {
        const card = data.card;
        if (!card) throw new Error('where card?');
        this.card = card;
    }
}
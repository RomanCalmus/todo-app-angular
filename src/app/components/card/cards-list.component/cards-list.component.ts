import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Card } from "src/app/models/card.model";
import { CardsListService, PlaceholderTitle } from "src/app/services/cards-list.service";
import { CardDialogComponent } from "../card.component/card.component";

@Component({
    selector: 'cards-list',
    templateUrl: "./cards-list.component.html",
    styleUrls: ['cards-list.component.scss']
})
export class CardsListComponent {
    openedCardId: number = -1
    defaultCardTitle = PlaceholderTitle
    @Input() cards: ReadonlyArray<Card> | null= []

    constructor(public cardsService: CardsListService, private dialog: MatDialog) {}

    openCard(card: Card) {
        const that = this;
        this.openedCardId = card.id;
        this.dialog.open(CardDialogComponent, {data: {card}, position: {top: '100px'}})
            .afterClosed().subscribe(() => that.openedCardId = -1);
    }

    removeCard(card: Card) {
       
    }
}
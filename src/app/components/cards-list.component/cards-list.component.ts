import { Component } from "@angular/core";
import { CardsListService } from "src/app/services/cards-list.service";

@Component({
    selector: 'cards-list',
    templateUrl: "./cards-list.component.html",
    styleUrls: ['cards-list.component.scss']
})
export class CardListComponent {
    constructor(public cardsService: CardsListService) {}

    
}
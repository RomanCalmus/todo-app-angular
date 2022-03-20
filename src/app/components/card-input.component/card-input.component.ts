import { Component } from '@angular/core';
import { Card, CardsListService } from 'src/app/services/cards-list.service';
import { ClickService } from 'src/app/services/click-service';

@Component({
  selector: 'card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  isEdit: boolean = false;
  card: Card;
  title = 'Новый список'

  constructor(protected cardsService: CardsListService, protected outsideMouseEvent: ClickService) {
    this.card = this.cardsService.createCard();
    this.cardsService.getTodoListByCardId(this.card.id).createItem();

    // this.cardsService.createCard('', ['tag1', 'tag2', 'tag3'], true);
    // this.cardsService.createCard('', ['tag1', 'tag2', 'tag3'], true);
    // this.cardsService.createCard('Card #--3', ['tag1', 'tag2', 'tag3'], true);
    // this.cardsService.createCard('Card #--4', ['tag1', 'tag2', 'tag3'], true);

    this.outsideMouseEvent.clickEvent.subscribe(this.onBlur.bind(this));
  }

  onBlur() {
    this.registerCard();
    this.isEdit = false;
  }
  
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onRemove() {
    this.isEdit = false;
    this.createNewDefaultCard();
  }

  createNewDefaultCard() {
    const prevColor = this.card.color;
    this.card = this.cardsService.createCard();
    this.cardsService.getTodoListByCardId(this.card.id).createItem();
    this.card.color = prevColor;
  }

  isEdited() {
    let isEdited = false;
    const list = this.cardsService.getTodoListByCardId(this.card.id);
   
    if (this.card.title) {
      isEdited = true;
    }

    if (list.items.length !== 1 || list.items[0].title !== '') {
      isEdited = true;
    }

    return isEdited;
  }

  registerCard() {
    if (this.isEdited()) {
      this.cardsService.registerCard(this.card);
      this.createNewDefaultCard();
    }
  }
}
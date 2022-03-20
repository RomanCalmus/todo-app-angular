import { Component } from '@angular/core';
import { Card, CardsListService } from 'src/app/services/cards-list.service';

@Component({
  selector: 'card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  isEdit: boolean = false;
  card: Card;

  constructor(protected cardsService: CardsListService) {
    this.card = this.cardsService.createCard('Список...');
    this.cardsService.getTodoListByCardId(this.card.id).createItem();

    this.cardsService.createCard('Card #--1', ['tag1', 'tag2', 'tag3'], true);
    this.cardsService.createCard('Card #--2', ['tag1', 'tag2', 'tag3'], true);
    this.cardsService.createCard('Card #--3', ['tag1', 'tag2', 'tag3'], true);
    this.cardsService.createCard('Card #--4', ['tag1', 'tag2', 'tag3'], true);
  }

  onBlur() {
    this.isEdit = !this.isEdit;
  }
  
  onBlurE() {
    this.isEdit;
  }

  createTodo(key: string) {
    if (key == 'Enter') {
      // this.cardsService.createCard(this.value);
      // this.value = '';
    }
  }
}
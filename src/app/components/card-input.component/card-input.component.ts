'use strict';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card, CardsListService, makeRandomColor } from 'src/app/services/cards-list.service';
import { ClickService } from 'src/app/services/click-service';
import { closeCardInput, openCardInput } from './state/actions';

@Component({
  selector: 'card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  cardInputState$: Observable<boolean>
  card: Card;
  title = 'Новый список'

  constructor(
    protected cardsService: CardsListService,
    protected outsideMouseEvent: ClickService,
    private store: Store<{cardinput: boolean}>                                        ) {
      
      this.card = this.cardsService.createCard('', makeRandomColor());
      this.cardsService.getTodoListByCardId(this.card.id).createItem();
      this.outsideMouseEvent.clickEvent.subscribe(this.onBlur.bind(this));
      this.cardInputState$ = store.select('cardinput');
  }

  onBlur() {
//    this.registerCard();
    this.close();
  }
  
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onOpen() {
    this.open();
  }

  private open() {
    this.store.dispatch(openCardInput());
  }

  private close() {
    this.store.dispatch(closeCardInput());
  }

  onRemove() {
    this.close();
  }

  createNewDefaultCard() {
    const prevColor = this.card.color;
    this.card = this.cardsService.createCard();
    this.cardsService.getTodoListByCardId(this.card.id).createItem();
    this.card.color = prevColor;
  }

  isEdited() {
    // let isEdited = false;
    // const list = this.cardsService.getTodoListByCardId(this.card.id);
   
    // if (this.card.title) {
    //   isEdited = true;
    // }

    // if (list.items.length !== 1 || list.items[0].title !== '') {
    //   isEdited = true;
    // }

    // return isEdited;
  }

  registerCard() {
    // if (this.isEdited()) {
    //   this.cardsService.registerCard(this.card);
    //   this.createNewDefaultCard();
    // }
  }
}
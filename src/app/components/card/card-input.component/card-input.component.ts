'use strict';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { random } from 'src/app/misc/colors';
import { Card, CardColor, CardColors } from 'src/app/models/card.model';
import { CardsListService } from 'src/app/services/cards-list.service';
import { ClickService } from 'src/app/services/click-service';
import { closeCardInput, openCardInput } from './state/card-input.actions';

export function makeRandomColor() {
  return CardColors[random(CardColors.length)];
}

@Component({
  selector: 'card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  state$ = this.store.select('cardinput')
  card!: Card;
  color:CardColor = makeRandomColor()
  title = 'Новый список'

  constructor(
    protected cardsService: CardsListService,
    protected outsideMouseEvent: ClickService,
    private store: Store<{cardinput: boolean}>                                          ) {
      
      this.outsideMouseEvent.clickEvent.subscribe(this.onBlur.bind(this));
      this.state$.pipe(filter(state => state === true)).subscribe(_ => this.onOpen());
      this.state$.pipe(filter(state => state !== true)).subscribe(_ => this.onClose());
  }
  
  open() {
    this.store.dispatch(openCardInput());
  }

  close() {
    //this.store.dispatch({ type: CardListEvents.CreateCard, card: this.card });
    this.store.dispatch(closeCardInput());
  }

  remove() {
    //this.close();
  }

  onOpen() {
    this.card = this.createDefaultCard(this.color);
  }

  createDefaultCard(color: CardColor): Card {
    return {title: '', id: -1, color, items: [{text: '', done: false} ]};
  }

  private onClose() {
    this.close();
  }


  //Event handlers
  onBlur() {
    this.close();
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
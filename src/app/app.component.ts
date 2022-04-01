import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, map, skipWhile } from 'rxjs';
import { closeCardInput } from './components/card/card-input.component/state/card-input.actions';
import { CardDialogComponent } from './components/card/card.component/card.component';
import { getCardsList } from './components/card/card.component/state/card.actions';
import { selectCards, selectCardWindow } from './components/card/card.component/state/card.selectors';
import { cardWindowState } from './components/card/card.component/state/card.window.reducers';
import { Card } from './models/card.model';
import { CardsListService } from './services/cards-list.service';
import { ClickService } from './services/click-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards$ = this.store.select(selectCards);
  window$ = this.store.select(selectCardWindow);
  
  constructor(
    protected clickService: ClickService,
    private cardList: CardsListService,
    private store: Store,
    private modalDialog: MatDialog
                                                                                                  ) {}

  ngOnInit() {
    const that = this;
    this.cardList.getCards().subscribe(cards => this.store.dispatch(getCardsList({cards})));
    this.window$.pipe(
        filter( (state: cardWindowState) => state.isOpen != false),
        map(state => state.card as Card)
      ).subscribe(card => that.openCardWindow(card));
  }

  click(event: MouseEvent) {
    this.store.dispatch(closeCardInput());
  }

  openCardWindow(card: Card) {
    this.modalDialog.open(CardDialogComponent, {data: {card}, position: {top: '100px'}});
  }
}

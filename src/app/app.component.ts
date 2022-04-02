import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, merge } from 'rxjs';
import { closeCardInput } from './components/card/card-input.component/state/card-input.actions';
import { CardDialogComponent } from './components/card/card.component/card.component';
import { getCardsList } from './components/card/card.component/state/card.actions';
import { selectCard, selectCardWindow } from './components/card/card.component/state/card.selectors';
import { closeCardWindow } from './components/card/card.component/state/card.window.actions';
import { Card } from './models/card.model';
import { CardsListService } from './services/cards-list.service';
import { ClickService } from './services/click-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  window$ = this.store.select(selectCardWindow);
  selectedCard$ = this.store.select(selectCard);
  
  constructor(
    protected clickService: ClickService,
    private cardList: CardsListService,
    private store: Store,
    private modalDialog: MatDialog
                                                                                                  ) {}

  ngOnInit() {
    this.subscribeToWindowState();
  }

  click(event: MouseEvent) {
    this.store.dispatch(closeCardInput());
  }

  private openCardWindow(card: Card) {
    const dialog = this.modalDialog.open(CardDialogComponent, 
      {data: {card}, position: {top: '100px'}, disableClose: true});

    const clicks = dialog.backdropClick();
    const keybordEvents = dialog.keydownEvents().pipe(filter(({key}) => key === 'Escape'));
    
    merge(clicks, keybordEvents)
      .subscribe(() => this.store.dispatch(closeCardWindow()));
  }

  private subscribeToWindowState() {
    combineLatest([
      this.window$.pipe( filter( state => state !== false)), 
      this.selectedCard$
    ]).pipe(map( ([state, cards]) => cards[0]))
      .subscribe(card => this.openCardWindow(card));

    this.window$.pipe(
      filter( state => state === false)
    ).subscribe(_ => this.modalDialog.closeAll());
  }
}
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCardsList } from './components/card/card.component/state/card.actions';
import { selectCards } from './components/card/card.component/state/card.selectors';
import { CardsListService } from './services/cards-list.service';
import { ClickService } from './services/click-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app-angular';
  cards$ = this.store.select(selectCards);
  
  constructor(protected clickService: ClickService, private cardList: CardsListService, private store: Store) {}

  ngOnInit() {
    this.cardList.getCards().subscribe(cards => this.store.dispatch(getCardsList({cards})));
  }

  click(event: MouseEvent) {
    this.clickService.clickEvent.emit(event);
  }
}

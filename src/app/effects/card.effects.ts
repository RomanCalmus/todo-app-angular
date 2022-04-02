import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { getCardsList } from "../components/card/card.component/state/card.actions";
import { CardsListService, Events as CardListEvents} from "../services/cards-list.service";

@Injectable()
export class CardEffects  {
    constructor(
        private actions$: Actions,
        private cardService: CardsListService) {}

    loadCards$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardListEvents.LoadCards),
            mergeMap(() => this.cardService.getCards() .pipe(
                    map(cards => (getCardsList({cards}))),
                    catchError(() => of({type: CardListEvents.LoadedError}))
                ))
            )
        );
}
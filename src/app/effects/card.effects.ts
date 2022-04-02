import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { getCardsList, removeCard } from "../components/card/card.component/state/card.actions";
import { CardsListService, Events as CardListEvents} from "../services/cards-list.service";

@Injectable()
export class CardEffects  {
    constructor(
        private actions$: Actions,
        private cardService: CardsListService) {}

    loadCards$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardListEvents.LoadCards),
            mergeMap(() => this.cardService.getCards().pipe(
                    map(cards => (getCardsList({cards}))),
                    catchError(() => of({type: CardListEvents.LoadedError}))
                ))
            )
        );
    
    removeCard$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardListEvents.RemoveCard),
            exhaustMap( (action: any) => {
                return this.cardService.removeCard(action.card).pipe(
                    //map(_ => ({ type: CardListEvents.RemoveCardSuccess })),
                    map(_ => ({ type: CardListEvents.LoadCards })),
                    catchError(() => of({type: CardListEvents.LoadedError}))
                )
            })
        )
    );
}
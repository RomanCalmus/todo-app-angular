import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { combineLatest, filter, last, map, merge } from "rxjs";
import { CardDialogComponent } from "../components/card/card.component/card.component";
import { selectCardWindow } from "../components/card/card.component/state/card.selectors";
import { closeCardWindow } from "../components/card/card.component/state/card.window.actions";
import { isStateIsNotUndefined, isStateIsUndefined } from "../misc/filter.utils";
import { Card } from "../models/card.model";
import { CardsListEvents, CardsListService } from "./cards-list.service";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
    window$ = this.store.select(selectCardWindow);

    constructor(
        private store: Store,
        private actions$: Actions,
        private modalDialog: MatDialog          
                                                                            ) {
      

          this.window$.pipe( 
            filter( isStateIsNotUndefined )
          ).subscribe((card:any) => this.openCardWindow(card));

          this.window$.pipe(
            filter( isStateIsUndefined )
          ).subscribe(_ => this.modalDialog.closeAll());

          //clickOnRemoveWhileDialogIsOpen
          combineLatest([
            this.actions$.pipe(ofType(CardsListEvents.RemoveCard)),
            this.window$.pipe( filter( isStateIsNotUndefined ))
          ]).pipe(filter(
              ([action, windowCard]: [any, any]) => action.card.id == windowCard.id)
          ).subscribe(_ => this.close());
    }

    private openCardWindow(card: Card) {
        const dialog = this.modalDialog.open(CardDialogComponent, 
          {data: {card}, position: {top: '100px'}, disableClose: true});
    
        const clicks = dialog.backdropClick();
        const keybordEvents = dialog.keydownEvents().pipe(filter(({key}) => key === 'Escape'));
        
        merge(clicks, keybordEvents)
          .subscribe(_ => this.close());
    }

    private close() {
      this.store.dispatch(closeCardWindow());
    }
}
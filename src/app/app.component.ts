import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeCardInput } from './components/card/card-input.component/state/card-input.actions';
import { ClickService } from './services/click-service';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    protected clickService: ClickService,
    protected dialogService: DialogService,
    private store: Store,
                                                                                                  ) {
  }

  click(event: MouseEvent) {
    this.store.dispatch(closeCardInput());
  }
}
import { Component } from '@angular/core';
import { ClickService } from './services/click-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app-angular';
  constructor(protected clickService: ClickService) {}

  click(event: MouseEvent) {
    this.clickService.clickEvent.emit(event);
  }
}

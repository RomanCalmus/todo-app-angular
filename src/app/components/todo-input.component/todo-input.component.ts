import { Component } from '@angular/core';
import { CardsListService } from 'src/app/services/cards-list.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  public value: string = ''

  constructor(protected cardsService: CardsListService) {
    this.cardsService.createCard('Card #1');
  }

  createTodo(key: string) {
    if (key == 'Enter') {
      this.cardsService.createCard(this.value);
      this.value = '';
    }
  }
}
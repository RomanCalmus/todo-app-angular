import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ClickService {
    clickEvent = new EventEmitter<MouseEvent>();
}
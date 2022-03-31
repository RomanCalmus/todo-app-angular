import { Component, Input, Output, EventEmitter } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { editStaticInput, stopEditStaticInput } from "./state/static-input.actions";

@Component({
    selector: 'static-input',
    templateUrl: "./static-input.component.html",
    styleUrls: ['static-input.component.scss']
})
export class StaticInputComponent {
    @Input()  defaultText = ''
    @Input()  text        = '';
    @Input()  isEdit      = false
    @Output() textChange  = new EventEmitter<string>();
    @Output() blur        = new EventEmitter<FocusEvent>();
    @Output() enter       = new EventEmitter<KeyboardEvent>();

    state$: Observable<boolean>

    constructor(private store: Store<{staticInput: boolean}>) {
        this.state$ = store.select('staticInput');//.pipe(state => select);
    }

    onKeyDownEdit(event: KeyboardEvent) {
        const {key} = event;

        switch (key) {
            case 'Enter':
                this.edit();
            break;
            case 'Escape':
                this.stopEdit();
            break;
        }
    }

    private stopEdit() {
        this.store.dispatch(stopEditStaticInput());
    }

    private edit() {
        this.store.dispatch(editStaticInput());
        this.enter.emit();
    }

    //event handlers
    onKeyUp() {
        this.textChange.emit(this.text);
    }

    onBlur(event: FocusEvent) {    
        this.stopEdit();
        this.blur.emit(event);
    }

    onEdit() {
        this.edit();
    }
}
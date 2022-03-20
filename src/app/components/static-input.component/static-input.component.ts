import { Component, Input, Output, EventEmitter } from "@angular/core";

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

    onKeyDownEdit(event: KeyboardEvent) {
        const {key} = event;

        switch (key) {
            case 'Enter':
                this.isEdit = false;
                this.enter.emit(event);
            break;
            case 'Escape':
                this.isEdit = false;
            break;
        }
    }

    onKeyUp() {
        this.textChange.emit(this.text);
    }

    onBlur(event: FocusEvent) {    
        this.isEdit = !this.isEdit;
        this.blur.emit(event);
    }
}
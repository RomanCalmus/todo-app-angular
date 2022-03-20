import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'static-input',
    templateUrl: "./static-input.component.html",
    styleUrls: ['static-input.component.scss']
})
export class StaticInputComponent {
    @Input()  isEdit: boolean = false
    @Input()  text: string = '';
    @Output() textChange = new EventEmitter<string>();
    @Output() blur       = new EventEmitter<string>();

    onKeyDownEdit(event: KeyboardEvent) {
        const {key} = event;

        switch (key) {
            case 'Enter':
                this.isEdit = false;
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
        this.blur.emit();
    }
}
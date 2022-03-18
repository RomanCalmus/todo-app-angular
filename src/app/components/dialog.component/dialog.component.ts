import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoItem } from "../../services/todo-items.service";

@Component({
    templateUrl: './dialog.component.html'
})
export class DialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: TodoItem,
    ) {}
}
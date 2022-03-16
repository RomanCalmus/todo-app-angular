import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { ToolbarComponent } from './toolbar.component';


@NgModule({
    declarations: [
      ToolbarComponent
    ], 
    exports: [
      ToolbarComponent
    ],
    imports: [
        MatIconModule,
        MatToolbarModule
    ]
})
export class ToolbarModule { }
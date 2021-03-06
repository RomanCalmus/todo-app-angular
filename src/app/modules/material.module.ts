import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatMenuModule } from '@angular/material/menu'; 


const modules = [
  BrowserAnimationsModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatMenuModule
];


export const Material =  {
    modules,
    providers: [MatDialog]
}



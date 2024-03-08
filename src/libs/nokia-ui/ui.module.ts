
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './components/dialog/dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

export const components = [
    DialogComponent
];
  
export const materials = [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
];

@NgModule({
    declarations: components,
    imports: [CommonModule, RouterModule, materials],
    exports: components,
})
export class NokiaUIModule {}
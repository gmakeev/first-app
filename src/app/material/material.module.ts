import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';


const materialComponents = [
  MatSliderModule, MatToolbarModule, MatIconModule, MatDividerModule, MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule, MatListModule, MatGridListModule, MatExpansionModule, MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from "@angular/material";

import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }

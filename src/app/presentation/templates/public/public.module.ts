import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicUIModule } from './public.ui.module'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    PublicUIModule
  ],
  declarations: []
})
export class PublicModule { }

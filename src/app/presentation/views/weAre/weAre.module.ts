import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WeAreComponent } from './weAre.component';

const routes: Routes = [
  {
    path: '',
    component: WeAreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeAreComponent]
})
export class WeAreModule { }

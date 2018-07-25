import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CareersComponent } from './careers.component';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CareersComponent]
})
export class CareersModule { }

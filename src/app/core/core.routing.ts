import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

export const CORE_ROUTES: Routes = [
  {
    path: 'login',
    redirectTo: 'login'
  },
  {
    path: '',
    redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};

@NgModule({
  imports: [ RouterModule.forRoot(CORE_ROUTES, config) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}

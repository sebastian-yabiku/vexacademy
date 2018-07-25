import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './templates/login/login.component';
import { ErrorComponent } from './templates/error/error.component';
import { PublicComponent } from './templates/public/public.component';

export const PAGES_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '', loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'carreras', loadChildren: './views/careers/careers.module#CareersModule'
      },
      {
        path: 'cursos', loadChildren: './views/courses/courses.module#CoursesModule'
      },
      {
        path: 'eventos', loadChildren: './views/events/events.module#EventsModule'
      },
      {
        path: 'nosotros', loadChildren: './views/weAre/weAre.module#WeAreModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PresentationRoutingModule {}

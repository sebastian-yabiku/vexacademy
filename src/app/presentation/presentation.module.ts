/**
 * CORE
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ROUTING PRESENTATION
 */
import { PresentationRoutingModule } from './presentation.routing';

/**
 * UI CROSS
*/
import { Header } from '../cross/components/organism/header/header.component';
import { Footer } from '../cross/components/organism/footer/footer.component';

/**
 * MODULES PRESENTATION
 */
import { PublicModule } from './templates/public/public.module';
import { PublicUIModule } from './templates/public/public.ui.module'

/**
 * TEMPLATES PRESENTATION
 */
import { LoginComponent } from './templates/login/login.component';
import { PublicComponent } from './templates/public/public.component';
import { ErrorComponent } from './templates/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    PublicUIModule,
    PublicModule,
    PresentationRoutingModule
  ],
  declarations: [
    Header,
    Footer,
    LoginComponent,
    PublicComponent,
    ErrorComponent
  ]
})
export class PresentationModule { }

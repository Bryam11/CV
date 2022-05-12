import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ThemeServiceService } from './services/theme-service.service';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    TemplateModule
  ],
  providers: [ThemeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

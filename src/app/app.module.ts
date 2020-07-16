import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FreeAuditComponent } from './common/header/free-audit/free-audit.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeModule } from './Home/Home.module';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FreeAuditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

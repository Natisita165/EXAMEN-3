import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { AcademiasComponent } from './academias/academias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraLateralComponent,
    InstrumentosComponent,
    AccesoriosComponent,
    AcademiasComponent,
    NosotrosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

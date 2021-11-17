import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { HomeComponent } from './home/home.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { AcademiasComponent } from './academias/academias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'instrumentos',
    component: InstrumentosComponent
  },
  {
    path:'accesorios',
    component: AccesoriosComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'academias',
    component:AcademiasComponent
  },
  {
    path:'contactanos',
    component:ContactanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

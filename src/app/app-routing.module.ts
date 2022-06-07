import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { HomeComponent } from './home/home.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';

const routes: Routes = [
  {path:"", component: HomeComponent },
  { path: "clientes", component: ListClientesComponent },

  {path: "cliente", component: FormClienteComponent },
  { path: "cliente/id", component: FormClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { DetalhesComponent } from './component/convidado/detalhes/detalhes.component';
import { CadastroComponent } from './component/convidado/cadastro/cadastro.component';
import { ConvidadoComponent } from './component/convidado/convidado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'convidado',
    component: CadastroComponent,
  },
  {
    path: 'detalhes/:nome',
    component: DetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

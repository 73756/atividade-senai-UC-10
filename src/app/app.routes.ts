import { Routes } from '@angular/router';
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from './componentes/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' },
  { path: 'painel-principal', component: PainelPrincipalComponent },
  { path: 'cadastro-produto', component: CadastroProdutoComponent },
  { path: '**', redirectTo: '/painel-principal' }
];

import { SobrenosComponent } from './shared/components/sobrenos/sobrenos.component';
import { CardapioComponent } from './shared/components/cardapio/cardapio.component';
import { ContentComponent } from './shared/components/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'home', component: ContentComponent},
  { path: 'cardapio', component: CardapioComponent},
  { path: 'sobrenos', component: SobrenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

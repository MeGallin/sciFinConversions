import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'financial',
      component: FinancialComponent
  },
  {
      path: 'scientific',
      component: ScientificComponent
  },
  {
      path: '**',
      component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class Routing {

}

export const routingComponents = [];

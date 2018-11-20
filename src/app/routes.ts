import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UploadsComponent } from './components/widgets/uploads/uploads.component';
import { WidgetsComponent } from './components/widgets/widgets/widgets.component';
import { DataTableComponent } from './components/widgets/data-table/data-table.component';

const routes: Routes = [
  {
      path: '', redirectTo: 'home', pathMatch: 'full'
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
    path: 'widgets',
    component: WidgetsComponent
  },
  {
      path: 'widgets/uploads',
      component: UploadsComponent
  },
  {
    path: 'widgets/data-table',
    component: DataTableComponent
  },
  {
      path: '**',
      component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class Routing {

}

export const routingComponents = [];

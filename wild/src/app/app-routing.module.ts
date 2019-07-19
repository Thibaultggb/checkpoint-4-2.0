import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PriceComponent } from '../app/price/price.component';
import { PresentationComponent } from '../app/presentation/presentation.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'price', component: PriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

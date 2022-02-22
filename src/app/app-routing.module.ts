import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent} from '../test/test.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../test/test.module').then(module => module.TestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

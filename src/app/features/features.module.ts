import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/homepage-test/homepage-test.component').then(
        (m) => m.HomepageTestComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FeaturesModule {}

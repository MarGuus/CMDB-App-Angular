import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CiDetailComponent } from './ci-main/ci-detail/ci-detail.component';
import { CiEditComponent } from './ci-main/ci-edit/ci-edit.component';
import { CiMainComponent } from './ci-main/ci-main.component';
import { CiResolverService } from './ci-main/ci-resolver.service';
import { CiStartComponent } from './ci-main/ci-start/ci-start.component';
import { CiOrderComponent } from './ci-order/ci-order.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cis', pathMatch: 'full' },
  {
    path: 'cis',
    component: CiMainComponent,
    children: [
      { path: '', component: CiStartComponent },
      { path: 'new', component: CiEditComponent },
      {
        path: ':id',
        component: CiDetailComponent,
        resolve: [CiResolverService],
      },
      {
        path: ':id/edit',
        component: CiEditComponent,
        resolve: [CiResolverService],
      },
    ],
  },
  { path: 'order', component: CiOrderComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

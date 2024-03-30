import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'my-info', pathMatch: 'full' },
  { path: 'my-info', loadChildren: () => import('./my-info/my-info.module').then( m => m.MyInfoPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

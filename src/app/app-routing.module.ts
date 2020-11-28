import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpymasterComponent } from './spymaster/spymaster.component';
import { StartComponent } from './start/start.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: ':gameId',
    component: TableComponent
  },
  {
    path: ':gameId/spymaster',
    component: SpymasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

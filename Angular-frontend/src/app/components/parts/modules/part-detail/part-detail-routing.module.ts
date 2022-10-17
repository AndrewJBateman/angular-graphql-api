import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartDetailComponent } from './part-detail.component';

const routes: Routes = [{ path: '', component: PartDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartDetailRoutingModule {}

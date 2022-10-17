import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsComponent } from './components/parts/parts.component';

const routes: Routes = [
  {
    path: "", component: PartsComponent
  },
  {
    path: "part-detail",
    loadChildren: () =>
    import("./components/parts/modules/part-detail/part-detail.module").then(
      (mod) => mod.PartDetailModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

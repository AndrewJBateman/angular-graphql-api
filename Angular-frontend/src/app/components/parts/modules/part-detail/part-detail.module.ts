import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartDetailRoutingModule } from './part-detail-routing.module';
import { PartDetailComponent } from './part-detail.component';

@NgModule({
  imports: [CommonModule, PartDetailRoutingModule],
  exports: [PartDetailComponent],
  declarations: [PartDetailComponent],
})
export class PartDetailModule {}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

import { Part } from '../../models/part';

@Component({
  selector: 'app-part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.scss'],
})
export class PartDetailComponent {
  // part: Part = [];
  part: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state !== undefined) {
        this.part = this.router.getCurrentNavigation()?.extras.state!.part;
      }
    });
  }
}

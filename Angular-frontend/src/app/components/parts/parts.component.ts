import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router, NavigationExtras } from '@angular/router';

import { PARTS_LIST } from 'src/app/graphql/graphql.queries';
import { Part } from './models/part';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit {
  parts: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: PARTS_LIST,
      })
      .valueChanges.subscribe((result: any) => {
        this.parts = result?.data?.parts;
        this.loading = result.loading;
        this.error = result.error;
        console.log('parts:', this.parts);
      });
  }

  onGoToPartDetail(part: Part): void {
    console.log('clicked');
    const navigationExtras: NavigationExtras = {
      state: {
        part,
      },
    };
    this.router.navigate(['/part-detail'], navigationExtras);
  }

  partTrackbyFn(index: number, item: any): number {
    return item.partId;
  }
}

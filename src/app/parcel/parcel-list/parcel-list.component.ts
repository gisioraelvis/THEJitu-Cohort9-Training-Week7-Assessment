// In the parcel-list.component.ts file:
import { Component, OnInit } from '@angular/core';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.css'],
})
export class ParcelListComponent implements OnInit {
  parcels: any[];

  constructor(private parcelService: ParcelService) {}

  ngOnInit() {
    this.parcelService.getParcels().subscribe((parcels) => {
      this.parcels = parcels;
    });
  }
}

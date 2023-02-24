import { Component, OnInit } from '@angular/core';
import { Parcel } from '../parcel';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.css'],
})
export class ParcelListComponent implements OnInit {
  onDelete(arg0: any) {
    throw new Error('Method not implemented.');
  }
  parcelList: Parcel[] = [];
  constructor(private parcelService: ParcelService) {}
  ngOnInit() {
    this.parcelService.parcels$.subscribe((parcels) => {
      this.parcelList = parcels;
    });
  }
}

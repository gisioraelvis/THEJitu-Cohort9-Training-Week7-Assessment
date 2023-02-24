import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';

@NgModule({
  declarations: [AddParcelComponent, ParcelListComponent],
  imports: [CommonModule],
})
export class ParcelModule {}

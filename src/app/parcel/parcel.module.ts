import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddParcelComponent, ParcelListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ParcelModule {}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Parcel } from './parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelService {
  private parcels: Parcel[] = [
    {
      id: '1',
      name: 'Parcel 1',
      email: 'johndoe@gmail.com',
      destination: 'New York',
    },
    {
      id: '2',
      name: 'Parcel 2',
      email: 'janedoe@travel.com',
      destination: 'Paris',
    },
    {
      id: '3',
      name: 'Parcel 3',
      email: 'johndoe@travel.com',
      destination: 'Tokyo',
    },
  ];

  private parcelsSubject = new BehaviorSubject<Parcel[]>(this.parcels);
  parcels$ = this.parcelsSubject.asObservable();

  constructor() {}

  addParcel(parcel: Parcel) {
    this.parcels.push(parcel);
    this.parcelsSubject.next(this.parcels);
  }

  getParcel(id: string) {
    return this.parcels.find((p) => p.id === id);
  }

  updateParcel(parcel: Parcel) {
    const index = this.parcels.findIndex((p) => p.id === parcel.id);
    if (index !== -1) {
      this.parcels[index] = parcel;
      this.parcelsSubject.next(this.parcels);
    }
  }

  deleteParcel(id: string) {
    const index = this.parcels.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.parcels.splice(index, 1);
      this.parcelsSubject.next(this.parcels);
    }
  }

  getParcelList() {
    return this.parcels$;
  }
}

// In the add-parcel.component.ts file:
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css'],
})
export class AddParcelComponent implements OnInit {
  parcelForm: FormGroup;

  constructor(private fb: FormBuilder, private parcelService: ParcelService) {}

  ngOnInit() {
    this.parcelForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.validateEmailDomain],
      ],
      destination: ['', Validators.required],
    });
  }

  validateEmailDomain(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@travel.com') === -1) {
      return { invalidDomain: true };
    }
    return null;
  }

  onSubmit() {
    const parcel = this.parcelForm.value;
    this.parcelService.addParcel(parcel);
    this.parcelForm.reset();
  }
}

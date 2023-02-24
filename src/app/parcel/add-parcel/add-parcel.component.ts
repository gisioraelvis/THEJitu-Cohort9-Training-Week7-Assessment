import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css'],
})
export class AddParcelComponent implements OnInit {
  parcelForm: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(private fb: FormBuilder, private parcelService: ParcelService) {}

  ngOnInit() {
    this.parcelForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[A-Za-z0-9._%+-]+@travel.com$/),
          this.emailDomainValidator,
        ],
      ],
      destination: ['', Validators.required],
    });
  }

  emailDomainValidator(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') != -1) {
      const [_, domain] = email.split('@');
      if (domain !== 'travel.com') {
        return { emailDomain: true };
      }
    }
    return null;
  }

  onSubmit() {
    const parcel = this.parcelForm.value;
    this.parcelService.addParcel(parcel);
    this.parcelForm.reset();
  }
}

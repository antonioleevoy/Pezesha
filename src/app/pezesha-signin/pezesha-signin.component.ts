import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-pezesha-signin',
  templateUrl: './pezesha-signin.component.html',
  styleUrls: ['./pezesha-signin.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PezeshaSigninComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fullName: ['', Validators.required],
      idNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]]

    });
    this.secondFormGroup = this._formBuilder.group({
      companyName: ['', Validators.required],
      specificLocation: ['', Validators.required],
      business: ['', Validators.required],
      ageBusiness: ['', Validators.required],
      industry: ['', Validators.required],
      revenue: ['', Validators.required],
      regCompany: ['', Validators.required],
      socialWebsite: ['', Validators.required],
      mpesaTill: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

  }

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }
  form3(){
    console.log(this.thirdFormGroup.value);
  }

}

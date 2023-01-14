import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component_reactive.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponentReactive implements OnInit {
  customerForm : FormGroup;

  constructor(private fb : FormBuilder) {


   }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName : ['', [Validators.required,Validators.minLength(3)]],
      lastName : ['jalol', [Validators.required,Validators.minLength(3)]],
      //lastName : {value : 'jalol',  disabled :true},
      email : ['', [Validators.required, Validators.email]],
      phone : [''],
      notification : ['', [Validators.required]],
     // rating : ['', ratingRangeWithoutParam],
      rating : ['', ratingRange(1,5)],
      sendCatalog :'true',
    })
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved:' + JSON.stringify(this.customerForm.value));
    
  }

  populateData(){
    //setValue
    this.customerForm.patchValue({
      firstName :'allal',
      lastName : 'joha',
      email : 'joha@gmail.com',
      sendCatalog : 'false'
    })
  }

  setNotification(notifyVia : String) : void{
     const phoneControl = this.customerForm.get('phone');
    if(notifyVia == 'TEXT'){
      phoneControl?.setValidators(Validators.required);
    }else{
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity();
  }



}

// Validation function without param
function ratingRangeWithoutParam(c : AbstractControl):{ [key :string]: boolean } | null {
  if(c.value != null && isNaN(c.value) || c.value < 1 || c.value >5){
    return { 'range': true};
  }
  return null;
}


// Validation function with param
function ratingRange(min : number,  max: number) :ValidatorFn {
return (c : AbstractControl):{ [key :string]: boolean } | null => {
  if(c.value != null && isNaN(c.value) || c.value < min || c.value >max){
    return { 'range': true};
  }
  return null;
  }
}

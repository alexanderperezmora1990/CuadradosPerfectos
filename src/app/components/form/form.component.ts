import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NumberSquare } from '../../models/number';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  firsNumber: number;
  numbers: NumberSquare = new NumberSquare();
  @Output() numbersEmit: EventEmitter<NumberSquare> = new EventEmitter<NumberSquare>();

  constructor() {
    this.firsNumber = 0;
    this.form = new FormGroup({
      numberOne: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      numberTwo: new FormControl('')
    });

    this.form.get('numberTwo').setValidators([Validators.required, Validators.pattern('^[0-9]*$'), this.validateRange.bind(this.form)]);

  }

  sendNumbers() {
    this.numbers = this.form.value;
    this.numbersEmit.emit(this.numbers);
  }

  validateRange( control: FormControl): any {
    const form: any = this;
    if (Number(control.value) < Number(form.get('numberOne').value)) {
      return {numRange: true};
    }
    return null;
  }


  ngOnInit() {}

}

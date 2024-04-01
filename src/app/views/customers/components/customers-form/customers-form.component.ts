import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fieldsComponents } from '../../../../shared/fields/fields-components';
import { Customer } from '@interfaces/customers/customers';

type FormData = {
  [key in keyof Customer]: FormControl<Customer[key] | unknown>
};

@Component({
  selector: 'customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.scss'
})
export class CostumersFormComponent {
  @Output() addData: EventEmitter<Customer> = new EventEmitter<Customer>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(),
    phone: new FormControl(),
    mail:new FormControl(),
    birthday:new FormControl(),
    address: new FormControl(),
    notas: new FormControl(),
    picture: new FormControl(),
    gender: new FormControl(),
  });


  constructor() {
  }

  saveData(): void{
    const data = this.form.getRawValue();
    this.addData.next(data as Customer);
  }

}

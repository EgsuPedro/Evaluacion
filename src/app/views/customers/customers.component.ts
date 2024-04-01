import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Customer } from '@interfaces/customers/customers';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octEye } from '@ng-icons/octicons';
import { CustomersService } from '@service/customers.service';
import { customersComponents } from './components/customers-components';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [NgIconComponent, ...customersComponents],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  viewProviders: [provideIcons({ octEye })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomersComponent {
customers = signal<Customer[]>(new CustomersService().getAllCustomers());

showForm = signal<boolean>(false);

showFormFn(): void {
  this.showForm.set(!this.showForm());
}
}

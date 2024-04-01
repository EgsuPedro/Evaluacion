import { CustomersResponde } from "@model/customers/customers-response";
import { customer } from "../const-data/customers";
import { CustomersMapper } from "@mapper/customers/customer-mappers";
import { Customer } from "@interfaces/customers/customers";

export class CustomersService{

    getAllCustomers(): Customer[] {
       const customersResponse = customer.map(customer => new CustomersResponde(customer));
        const customersMapper = customersResponse.map(customer => CustomersMapper.map(customer));
        return customersMapper;
    

    }
}
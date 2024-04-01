import { Customer } from '@interfaces/customers/customers';
import { CustomersResponde } from '@model/customers/customers-response';

export class CustomersMapper
    {
    static map(data: CustomersResponde): Customer {

        return {
            id: data.id,
             name: data.nombre_completo,
            phone: data.telefono,
            mail:data.correo_electronico,
            birthday: data.fecha_nacimiento,
            address: data.direccion,
            notas: data.notas,
            picture: data.foto,
            gender: data.genero
        };
        }
    }
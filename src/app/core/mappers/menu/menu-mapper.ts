import { Menu } from '@interfaces/menu/menu';
import { MenuResponse } from '@model/menu/menu-response';

export class MenuMapper {
    static map(data: MenuResponse): Menu {
        return {
            id: data.id,
            namedish: data.nombre_plato,
            platedescription: data.description_plato,
            idcategories: data.id_categoria,
            prece: data.precio_venta,
            cost: data.costo_produccion,
            ingredients: data.ingredientes,
            image: data.imagen_plato

        };

    }
    static toJson(data: Menu):  MenuResponse {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            nombre_plato: data.namedish,
            description_plato: data.platedescription,
            id_categoria: data.idcategories,
            precio_venta: data.prece,
            costo_produccion: data.cost,
            ingredientes: data.ingredients,
            imagen_plato: data.image,
            id: data.id
        };
    }
}
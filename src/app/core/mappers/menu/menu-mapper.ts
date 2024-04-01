import { Menu } from '@interfaces/menu/menu';
import { MenuResponse } from '@model/menu/menu-response';

export class MenuMapper {
    static map(data: MenuResponse): Menu {
        return {
            id: data.id,
            namedish: data.nombre_plato,
            description: data.descripcion_plato,
            idcategory: data.id_categoria,
            pvp: data.precio_venta,
            costo: data.costo_produccion,
            ingredient: data.ingredientes,
            image: data.imagen_plato

        };

    }
    static toJson(data: Menu):  MenuResponse {
        return {
            nombre_plato: data.namedish,
            descripcion_plato: data.platedescription,
            id_categoria: data.idcategories,
            precio_venta: data.prece,
            costo_produccion: data.cost,
            ingredientes: data.ingredients,
            imagen_plato: data.image,
            id: data.id
        };
    }
}
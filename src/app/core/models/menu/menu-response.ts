
export class MenuResponse
{
    id: number;
    nombre_plato: string;
    description_plato: string;
    id_categoria:string ;
    precio_venta: string;
    costo_produccion: string;
    ingredientes: string;
    imagen_plato: string;

    
    constructor(data: { [key: string]: unknown }) {
        this.id = data['id'] as number;
        this.nombre_plato = data['nombre_plato'] as string;
        this.description_plato = data['descripcion_plato'] as string;
        this.id_categoria = data['id_categoria'] as string;
        this.precio_venta = data['precio_venta'] as string;
        this.costo_produccion = data['costo_produccion'] as string;
        this.ingredientes = data['ingredientes'] as string;
        this.imagen_plato = data['imagen_plato'] as string;
    }


}


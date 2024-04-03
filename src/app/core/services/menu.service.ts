import { Menu } from '@interfaces/menu/menu';
import { menu2 } from '../const-data/menu-prueba';
import { MenuResponse } from '@model/menu/menu-response';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, delay, map, tap } from 'rxjs';
import { MenuMapper } from '@mapper/menu/menu-mapper';


type BaseResponse = {
    [key: string]: unknown;
};

@Injectable()
export class MenuService{

    private httpClient = inject(HttpClient);
    private allMenusSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
    allMenus$: Observable<Menu[]> = this.allMenusSubject.asObservable();

    getMenus(): Menu[] {
        const menuResponse: MenuResponse[] = menu2.map((menu2) => new MenuResponse(menu2));
        const finalResponse: Menu[] = menuResponse.map((menu2) => MenuMapper.map(menu2));
        return finalResponse;
    }

    getAllMenus(): Observable<Menu[]> {

        return this.httpClient.get<BaseResponse[]>('http://localhost:5000/menu')
            .pipe(
                delay(5000),
                map((response: BaseResponse[]) => response.map((menu2) => new MenuResponse(menu2))),
                map((response: MenuResponse[]) => response.map((menu2) => MenuMapper.map(menu2))),
                map((response) => response.map((menu2) => ({ ...menu2, name: menu2.namedish + '  Pizza Margarita ' }))),
                tap((response) => this.allMenusSubject.next(response))
            );
    }

    postNewMenu(bodyRequest: Menu): Observable<boolean> {
        return this.httpClient.post('http://localhost:5000/menu', MenuMapper.toJson(bodyRequest))
            .pipe(
                tap((response) => console.log(response)),
                map(() => {
                    this.getAllMenus().subscribe();
                    return true;
                })
            );
    }

    }




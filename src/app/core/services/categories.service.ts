import { Categories } from '@interfaces/categories/categories';
import { categories } from '../const-data/categories';
import { CategoryResponse } from '@model/categories/categories-response';
import { CategoriesMapper } from '@mapper/categories/categories-mapper';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type BaseResponse = {
    [key: string]: unknown;
};

@Injectable()
export class CategoriesServices {

    private httpClient = inject(HttpClient);

    private allCategoriesSubject: BehaviorSubject<Categories[]> = new BehaviorSubject<Categories[]>([]);
    allCategories$: Observable<Categories[]> = this.allCategoriesSubject.asObservable();

    // constructor() {
    //     this.getAllCategories().subscribe();
    // }

    getCategories(): Categories[] {
        const categoriesResponse: CategoryResponse[] = categories.map((category) => new CategoryResponse(category));
        const finalResponse: Categories[] = categoriesResponse.map((category) => CategoriesMapper.map(category));
        return finalResponse;
    }

    getAllCategories(): Observable<Categories[]> {

        return this.httpClient.get<BaseResponse[]>('http://localhost:5000/categoria')
            .pipe(
                delay(5000),
                map((response: BaseResponse[]) => response.map((category) => new CategoryResponse(category))),
                map((response: CategoryResponse[]) => response.map((category) => CategoriesMapper.map(category))),
                map((response) => response.map((categories) => ({ ...categories, name: categories.name + '  jorlan ' }))),
                tap((response) => this.allCategoriesSubject.next(response))
            );
    }

    postNewCategory(bodyRequest: Categories): Observable<boolean> {
        return this.httpClient.post('http://localhost:5000/categoria', CategoriesMapper.toJson(bodyRequest))
            .pipe(
                tap((response) => console.log(response)),
                map(() => {
                    this.getAllCategories().subscribe();
                    return true;
                })
            );
    }
}
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient
    ) {}

    options = {
        observe: 'response',
        accept: 'application/json',
        responseType: 'json'
    }


    getAllAttractions(categoryIds: any): Observable<any> {

        return this.get(`/open-api/zh-tw/Attractions/All?page=1&categoryIds=${categoryIds}`);

    }


    get(url: any): Observable<any> {

        return this.http.get<any>(url, this.options as any);
    }

}
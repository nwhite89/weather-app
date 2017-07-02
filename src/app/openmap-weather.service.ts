import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OpenmapWeatherService {
    appid = 'd1e83f7def626399407ff145a9e8683e';

    constructor(private http: Http) {}

    getLocationData (location: string): Observable<Response> {
        const url = `//api.openweathermap.org/data/2.5/forecast?q=${location},uk&mode=json&appid=${this.appid}&units=metric`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        console.error(error);

        return Observable.throw(error);
    }
}

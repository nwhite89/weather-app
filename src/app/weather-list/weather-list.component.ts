import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';

import { OpenmapWeatherService } from '../openmap-weather.service';

@Component({
    selector: 'app-weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
    weather$: any;
    day = [];
    days =  5;
    timestampDays = [];
    value = 'london';

    constructor (private openmapWeatherService: OpenmapWeatherService) { }

    ngOnInit() {
        const now = new Date();
        for (let index = 0; index < this.days; index++) {
            const startOfDay: any = new Date(now.getFullYear(), now.getMonth(), now.getDate() + index),
                timestamp = startOfDay / 1000;

            this.timestampDays.push(timestamp);

        }

        this.fetchData();
    }

    fetchData() {
        this.openmapWeatherService.getLocationData(this.value).subscribe((data: any) => {

            data.list.map((val: any) => {
                val.unix = parseInt(val.dt + '000', 10);
            });

            this.weather$ = data;
        });
    }

    onEnter(value: string) {
        if (value) {
            this.value = value;
        } else {
            this.value = 'london';
        }

        this.fetchData();
    }
}

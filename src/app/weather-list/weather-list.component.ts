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
        // Get a list of timestamps for today and the next 5 days this will then allow us to group easier within the
        // template to know whether the weather is for the same day or the next day.
        for (let index = 0; index < this.days; index++) {
            const startOfDay: any = new Date(now.getFullYear(), now.getMonth(), now.getDate() + index),
                timestamp = startOfDay / 1000;

            this.timestampDays.push(timestamp);

        }

        this.fetchData();
    }

    fetchData() {
        this.openmapWeatherService.getLocationData(this.value).subscribe((data: any) => {

            // Set a timestamp to allow for using the Angular Date pipe as OpenMap returns not as a full timestamp
            // that is usuable in JS Date format
            data.list.map((val: any) => {
                val.unix = parseInt(val.dt + '000', 10);
            });

            this.weather$ = data;
        });
    }

    onEnter(value: string) {
        // If a user doesn't submit a location default back to London
        if (value) {
            this.value = value;
        } else {
            this.value = 'london';
        }

        this.fetchData();
    }
}

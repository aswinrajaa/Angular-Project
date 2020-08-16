import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/post';
import { WebService } from 'src/app/web.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-Weather',
    templateUrl: './Weather.component.html',
    styleUrls: ['./Weather.component.css']
})

export class WeatherComponent implements OnInit {
    
    weather = null;

    currentLocation = 'Bangalore';
    temperatures = null;
    showChangeLocation = true;

    constructor(
        private WebService: WebService
    ) { }

    toggleLocationOption(){
      this.showChangeLocation = !this.showChangeLocation;
    }

    changeLocation(newLocation){
      if(newLocation.value != ''){
        this.currentLocation = newLocation.value;
        newLocation.value = '';
        this.ngOnInit();
        this.showChangeLocation = !this.showChangeLocation;
      }
    }

    ngOnInit(){
      this.WebService.weather(this.currentLocation)
          .subscribe(weather => {
              this.weather=weather;
          });
    }

}
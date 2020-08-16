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

    currentLocation = 'Bangalore';//Default Location
    temperatures = null;
    showChangeLocation = true;

    constructor(
        private WebService: WebService
    ) { }

    toggleLocationOption(){ //For toggling input for location
      this.showChangeLocation = !this.showChangeLocation;
    }

    changeLocation(newLocation){
      if(newLocation.value != ''){
        this.currentLocation = newLocation.value; //Change current location!
        newLocation.value = '';
        this.ngOnInit(); //Get data with changed location!
        this.showChangeLocation = !this.showChangeLocation; //Toggle back Location input!
      }
    }

    ngOnInit(){ //Get data from API
      this.WebService.weather(this.currentLocation)
          .subscribe(weather => {
              this.weather=weather;
          });
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  readonly Weather_URL;
  
  constructor(private http: HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
    this.Weather_URL = "http://api.openweathermap.org/data/2.5";
  }

  weather(location: string){
    const defaultlocation = "Bangalore";
    if(location == ''){
      location = defaultlocation;
    }
    const token = "APPID=9eab9804fe996fcec7fe0b633835d16f";
    const locationurl = "weather?q=" + location;
    return this.http.get(`${this.Weather_URL}/${locationurl}&${token}`);
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

}

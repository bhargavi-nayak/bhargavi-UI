import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
    selector : 'home',
    templateUrl : './home.component.html'
})
export class HomeComponent {
    constructor (public localStorageService:LocalStorageService) {}
   public get:any;
   public data:any;

    public getPerson(){
        return this.localStorageService.getItem('mystorage');
        }
}
import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
    selector : 'news',
    templateUrl: './news.component.html',
    template : ``
    
})
export class NewsComponent {
    constructor (public localStorageService:LocalStorageService) {}
   public get:any;
   public data:any;

    public getPerson(){
        return this.localStorageService.getItem('mystorage');
        }
}
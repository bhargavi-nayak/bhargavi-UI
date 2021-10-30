import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';


@Component({
    selector : 'contact',
    templateUrl : './contact.component.html'
    
})
export class ContactComponent {
   constructor (public localStorageService:LocalStorageService) {}
   public get:any;
   public data:any;

    public getPerson(){
        return this.localStorageService.getItem('mystorage');
        }
}



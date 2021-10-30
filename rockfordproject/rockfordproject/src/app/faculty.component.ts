import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
    selector : 'faculty',
    templateUrl : './faculty.component.html'
    
})
export class FacultyComponent {
    value:any;
    display1()
    {
        this.value= ["Espensen, Cory",
        "Assistant Registrar, Director for Advising & Retention",
        "cespensen@rockford.edu",
        "Phone : 815-394-5241",
        "Department: Academic Affairs"
        ];
        return (this.value);
    }
    display2(){
        this. value = ["Perry, Michael",
        "Provost & Vice President for Academic Affairs",
        "MPerry@rockford.edu",
        "Phone : 815-226-4067",
        "Department: Academic Affairs"];
        return (this.value);
    }
    display3(){
        this.value=["Forbeck, Ann",
        "Senior Transfer Admission Counselor",
        "DLHarvey@rockford.edu",
        "Phone : 815-226-2847",
        "Department: Admission"];
        return this.value;
    }
    display4(){
        this.value = ["Harvey, Donna",
        "Assistant Registrar, Director for Advising & Retention",
        "cespensen@rockford.edu",
        "Phone : 815-394-5241",
        "Department: Academic Affairs"
        ];
        return this.value;
    }
    display5(){
        this.value=[" Kuhar, Anissa",
        "Director of Adult & Graduate Admission",
        "AKuhar@rockford.edu",
        "Phone : 815-394-5025",
        "Department: Admission, Degree Completion Program, Graduate Studies"];
        return this.value;
    }
    constructor (public localStorageService:LocalStorageService) {}
    public get:any;
    public data:any;

    public getPerson(){
        return this.localStorageService.getItem('mystorage');
        }
}
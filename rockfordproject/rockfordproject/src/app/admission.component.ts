import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './admission.component.html'
})
export class AdmissionComponent {
  constructor(public localStorageService: LocalStorageService) {}
  public txtFname: string = '';
  public txtLname: string = '';
  public get : any;
  data:any;

  public person = {txtFname: this.txtFname, txtLname: this.txtLname};
  public addPerson(){
  this.person.txtFname = this.txtFname
  this.person.txtLname = this.txtLname;
  this.localStorageService.setItem("mystorage",  this.txtFname)
  this.get=this.getPerson();
  //alert(this.get);
}
    public getPerson(){
        this.data = this.localStorageService.getItem("mystorage");
        return this.data;
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProgramsComponent } from './programs.component';
import { AdmissionComponent } from './admission.component';
import { ContactComponent } from './contact.component';
import { NewsComponent } from './newsletter.component';
import { FacultyComponent } from './faculty.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProgramsComponent, AdmissionComponent, ContactComponent,
    NewsComponent, FacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

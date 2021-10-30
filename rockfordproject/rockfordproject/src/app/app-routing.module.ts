import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { ContactComponent } from './contact.component';
import { FacultyComponent } from './faculty.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './newsletter.component';
import { ProgramsComponent } from './programs.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'news', component:NewsComponent},
  {path : 'faculty', component:FacultyComponent},
  {path : 'programs', component:ProgramsComponent},
  {path : 'contact', component:ContactComponent},
  {path : 'admission', component:AdmissionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

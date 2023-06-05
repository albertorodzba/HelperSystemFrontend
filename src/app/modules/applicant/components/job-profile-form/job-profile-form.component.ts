import { Component } from '@angular/core';

@Component({
  selector: 'job-profile-form',
  templateUrl: './job-profile-form.component.html',
  styleUrls: ['./job-profile-form.component.css']
})
export class JobProfileFormComponent {
  workhourList: string[] = ["Planta (con salida cada 8 días)","Planta (con salida cada 15 días)",
  "Entrada por salida (8 horas)","Ocasional"];

  languageList: string[] = ["Español", "Inglés", "Francés", "Portugués", "Italiano"]          

  jobList: string[] = ["Empleado/a doméstica","Chofer","Enfermera","Cuidadora"];

  activityList: string[] = ["Cocina","Cuidado de adultos mayores","Cuidado de bebés","Cuidado de niños","Planchado"];

  



}

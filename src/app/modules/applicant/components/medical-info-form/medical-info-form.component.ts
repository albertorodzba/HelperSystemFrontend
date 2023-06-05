import { Component } from '@angular/core';

@Component({
  selector: 'medical-info-form',
  templateUrl: './medical-info-form.component.html',
  styleUrls: ['./medical-info-form.component.css']
})
export class MedicalInfoFormComponent {
  conditionList: string[] = ["Puedo subir escaleras"];
  allergieList: string[] = ["Tortugas"];
  disabilityList: string[] = ["Amputación de brazo"]
}

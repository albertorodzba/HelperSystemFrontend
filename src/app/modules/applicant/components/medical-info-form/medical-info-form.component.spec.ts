import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInfoFormComponent } from './medical-info-form.component';

describe('MedicalInfoFormComponent', () => {
  let component: MedicalInfoFormComponent;
  let fixture: ComponentFixture<MedicalInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalInfoFormComponent]
    });
    fixture = TestBed.createComponent(MedicalInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

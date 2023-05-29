import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPreferencesFormComponent } from './work-preferences-form.component';

describe('WorkPreferencesComponent', () => {
  let component: WorkPreferencesFormComponent;
  let fixture: ComponentFixture<WorkPreferencesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPreferencesFormComponent]
    });
    fixture = TestBed.createComponent(WorkPreferencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineAddmissionComponent } from './offline-addmission.component';

describe('OfflineAddmissionComponent', () => {
  let component: OfflineAddmissionComponent;
  let fixture: ComponentFixture<OfflineAddmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineAddmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineAddmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

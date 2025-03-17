import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDeskComponent } from './principal-desk.component';

describe('PrincipalDeskComponent', () => {
  let component: PrincipalDeskComponent;
  let fixture: ComponentFixture<PrincipalDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

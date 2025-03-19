import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpdComponent } from './mpd.component';

describe('MpdComponent', () => {
  let component: MpdComponent;
  let fixture: ComponentFixture<MpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

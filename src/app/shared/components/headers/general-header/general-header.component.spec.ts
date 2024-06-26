import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHeaderComponent } from './general-header.component';

describe('GeneralHeaderComponent', () => {
  let component: GeneralHeaderComponent;
  let fixture: ComponentFixture<GeneralHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralHeaderComponent]
    });
    fixture = TestBed.createComponent(GeneralHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

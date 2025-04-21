import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula3Component } from './atv-aula3.component';

describe('AtvAula3Component', () => {
  let component: AtvAula3Component;
  let fixture: ComponentFixture<AtvAula3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

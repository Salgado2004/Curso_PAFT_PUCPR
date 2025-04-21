import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula2Component } from './atv-aula2.component';

describe('AtvAula2Component', () => {
  let component: AtvAula2Component;
  let fixture: ComponentFixture<AtvAula2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

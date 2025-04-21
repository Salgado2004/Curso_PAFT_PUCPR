import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula4Component } from './atv-aula4.component';

describe('AtvAula4Component', () => {
  let component: AtvAula4Component;
  let fixture: ComponentFixture<AtvAula4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

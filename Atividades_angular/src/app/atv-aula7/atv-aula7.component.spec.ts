import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula7Component } from './atv-aula7.component';

describe('AtvAula7Component', () => {
  let component: AtvAula7Component;
  let fixture: ComponentFixture<AtvAula7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

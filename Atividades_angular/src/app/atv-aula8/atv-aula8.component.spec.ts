import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula8Component } from './atv-aula8.component';

describe('AtvAula8Component', () => {
  let component: AtvAula8Component;
  let fixture: ComponentFixture<AtvAula8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

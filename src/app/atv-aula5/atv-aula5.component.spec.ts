import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvAula5Component } from './atv-aula5.component';

describe('AtvAula5Component', () => {
  let component: AtvAula5Component;
  let fixture: ComponentFixture<AtvAula5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvAula5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvAula5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

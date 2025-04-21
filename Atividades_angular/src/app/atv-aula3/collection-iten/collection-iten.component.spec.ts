import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItenComponent } from './collection-iten.component';

describe('CollectionItenComponent', () => {
  let component: CollectionItenComponent;
  let fixture: ComponentFixture<CollectionItenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionItenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsDemoComponent } from './generics-demo.component';

describe('GenericsDemoComponent', () => {
  let component: GenericsDemoComponent;
  let fixture: ComponentFixture<GenericsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

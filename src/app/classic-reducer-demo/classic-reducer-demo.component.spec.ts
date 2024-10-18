import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicReducerDemoComponent } from './classic-reducer-demo.component';

describe('ClassicReducerDemoComponent', () => {
  let component: ClassicReducerDemoComponent;
  let fixture: ComponentFixture<ClassicReducerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicReducerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicReducerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

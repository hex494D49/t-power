import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDemoComponent } from './entity-demo.component';

describe('EntityDemoComponent', () => {
  let component: EntityDemoComponent;
  let fixture: ComponentFixture<EntityDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

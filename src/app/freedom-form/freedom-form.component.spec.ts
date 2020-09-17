import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomFormComponent } from './freedom-form.component';

describe('FreedomFormComponent', () => {
  let component: FreedomFormComponent;
  let fixture: ComponentFixture<FreedomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreedomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

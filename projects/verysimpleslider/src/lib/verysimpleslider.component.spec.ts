import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerysimplesliderComponent } from './verysimpleslider.component';

describe('VerysimplesliderComponent', () => {
  let component: VerysimplesliderComponent;
  let fixture: ComponentFixture<VerysimplesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerysimplesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerysimplesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

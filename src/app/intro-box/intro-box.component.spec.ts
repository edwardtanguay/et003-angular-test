import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBoxComponent } from './intro-box.component';

describe('IntroBoxComponent', () => {
  let component: IntroBoxComponent;
  let fixture: ComponentFixture<IntroBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

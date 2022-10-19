import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDetailsComponent } from './flash-details.component';

describe('FlashDetailsComponent', () => {
  let component: FlashDetailsComponent;
  let fixture: ComponentFixture<FlashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

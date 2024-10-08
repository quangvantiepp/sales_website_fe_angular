import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillComponent } from './fill.component';

describe('FillComponent', () => {
  let component: FillComponent;
  let fixture: ComponentFixture<FillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

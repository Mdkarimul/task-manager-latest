import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesAreaComponent } from './uses-area.component';

describe('UsesAreaComponent', () => {
  let component: UsesAreaComponent;
  let fixture: ComponentFixture<UsesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsesAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeScreenComponent } from './exchange-screen.component';

describe('ExchangeScreenComponent', () => {
  let component: ExchangeScreenComponent;
  let fixture: ComponentFixture<ExchangeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

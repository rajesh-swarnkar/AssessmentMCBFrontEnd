import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedTransactionsComponent } from './view-submitted-transactions.component';

describe('ViewSubmittedTransactionsComponent', () => {
  let component: ViewSubmittedTransactionsComponent;
  let fixture: ComponentFixture<ViewSubmittedTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubmittedTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmittedTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

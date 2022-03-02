import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInvoiceListComponent } from './show-invoice-list.component';

describe('ShowInvoiceListComponent', () => {
  let component: ShowInvoiceListComponent;
  let fixture: ComponentFixture<ShowInvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInvoiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

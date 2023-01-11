import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSideComponent } from './portfolio-side.component';

describe('PortfolioSideComponent', () => {
  let component: PortfolioSideComponent;
  let fixture: ComponentFixture<PortfolioSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

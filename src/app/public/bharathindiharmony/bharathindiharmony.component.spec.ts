import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharathindiharmonyComponent } from './bharathindiharmony.component';

describe('BharathindiharmonyComponent', () => {
  let component: BharathindiharmonyComponent;
  let fixture: ComponentFixture<BharathindiharmonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BharathindiharmonyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BharathindiharmonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

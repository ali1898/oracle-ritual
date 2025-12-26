import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherCardComponent } from './cipher-card.component';

describe('CipherCardComponent', () => {
  let component: CipherCardComponent;
  let fixture: ComponentFixture<CipherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CipherCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CipherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHijoComponent } from './component-hijo.component';

describe('ComponentHijoComponent', () => {
  let component: ComponentHijoComponent;
  let fixture: ComponentFixture<ComponentHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

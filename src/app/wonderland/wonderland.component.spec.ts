import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderlandComponent } from './wonderland.component';

describe('WonderlandComponent', () => {
  let component: WonderlandComponent;
  let fixture: ComponentFixture<WonderlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonderlandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonderlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

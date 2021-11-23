import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowbarComponent } from './nowbar.component';

describe('NowbarComponent', () => {
  let component: NowbarComponent;
  let fixture: ComponentFixture<NowbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

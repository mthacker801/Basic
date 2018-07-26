import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectdbComponent } from './connectdb.component';

describe('ConnectdbComponent', () => {
  let component: ConnectdbComponent;
  let fixture: ComponentFixture<ConnectdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

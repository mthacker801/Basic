import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradedbComponent } from './upgradedb.component';

describe('UpgradedbComponent', () => {
  let component: UpgradedbComponent;
  let fixture: ComponentFixture<UpgradedbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradedbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

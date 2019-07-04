import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from '../version-child/version-child.component';

describe('VersionParentComponent', () => {
  let component: VersionParentComponent;
  let fixture: ComponentFixture<VersionParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionParentComponent, VersionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase minor when it is clicked', ()=>{
    component.minor = 0;
    component.newMinor();
    expect(component.minor).toEqual(1);
    component.newMinor();
    expect(component.minor).toEqual(2);
  });

  it('should increase major when it is clicked', ()=>{
    component.major = 1;
    component.newMajor();
    expect(component.major).toEqual(2);
    component.newMajor();
    expect(component.major).toEqual(3);
  });

  it('should reset minor to zeor when major increased', ()=>{
    component.major = 1;
    component.minor = 10;
    component.newMajor();
    expect(component.major).toEqual(2);
    expect(component.minor).toEqual(0);
  })
});

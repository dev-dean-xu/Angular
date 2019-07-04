import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloParentComponent } from './hello-parent.component';
import { HelloChildComponent } from '../hello-child/hello-child.component';
import { element } from '@angular/core/src/render3';
import {By} from '@angular/platform-browser';
import { HeroNameComponent } from '../hero-name/hero-name.component';

describe('HelloParentComponent', () => {
  let component: HelloParentComponent;
  let fixture: ComponentFixture<HelloParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloParentComponent, HelloChildComponent, HeroNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

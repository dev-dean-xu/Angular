import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloChildComponent } from './hello-child.component';
import { HeroNameComponent } from '../hero-name/hero-name.component';

describe('HelloChildComponent', () => {
  let component: HelloChildComponent;
  let fixture: ComponentFixture<HelloChildComponent>;
  let expectedHero = {name:"TestHero"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloChildComponent, HeroNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloChildComponent);
    component = fixture.componentInstance;
    component.hero = expectedHero;
    component.masterName = "Master";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

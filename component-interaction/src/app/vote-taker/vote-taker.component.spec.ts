import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTakerComponent } from './vote-taker.component';
import { VoterComponent } from '../voter/voter.component';

describe('VoteTakerComponent', () => {
  let component: VoteTakerComponent;
  let fixture: ComponentFixture<VoteTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteTakerComponent, VoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

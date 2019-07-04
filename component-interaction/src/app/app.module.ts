import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloChildComponent } from './hello-child/hello-child.component';
import { HelloParentComponent } from './hello-parent/hello-parent.component';
import { HeroNameComponent } from './hero-name/hero-name.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { MissionControlComponent } from './mission-control/mission-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloChildComponent,
    HelloParentComponent,
    HeroNameComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    AstronautComponent,
    MissionControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

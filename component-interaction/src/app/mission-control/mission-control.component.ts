import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {
  astronauts = ['Dean', 'Lisa', 'Jonathan','Joey'];
  missions = ['Fly to the moon!','Fly to Mars!','Fly to Vegas!'];
  history: string[] = [];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    this.missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
   }

  ngOnInit() {
  }

  announce(){
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission: "${mission}" announced.`);
    if (this.nextMission >= this.missions.length) this.nextMission = 0;
  }
}

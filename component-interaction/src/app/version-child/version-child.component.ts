import { Component, OnInit, Input, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLogs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let log : string[] = [];
    for(let propName in changes){
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()){
        log.push(`Initial value of ${propName} set to ${to}`);
      }else{
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }

    this.changeLogs.push(log.join(', '));
  }
}

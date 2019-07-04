import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hello-child',
  templateUrl: './hello-child.component.html',
  styleUrls: ['./hello-child.component.css']
})
export class HelloChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') masterName: string;

  constructor() { }

  ngOnInit() {
  }

}

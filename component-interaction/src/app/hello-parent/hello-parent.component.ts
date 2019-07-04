import { Component, OnInit } from '@angular/core';
import { Heros } from '../hero';

@Component({
  selector: 'app-hello-parent',
  templateUrl: './hello-parent.component.html',
  styleUrls: ['./hello-parent.component.css']
})
export class HelloParentComponent implements OnInit {
  heros = Heros;
  master = "Dean";
  
  constructor() { }

  ngOnInit() {
  }

}

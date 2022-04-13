import { Component, OnInit } from '@angular/core';
import { Ci } from '../ci.model';

@Component({
  selector: 'app-ci-list',
  templateUrl: './ci-list.component.html',
  styleUrls: ['./ci-list.component.css']
})
export class CiListComponent implements OnInit {
  CIs:Ci[] = [
    new Ci('A test computer','this is a test', 'https://freesvg.org/img/1545450625.png'),
    new Ci('Another test computer','this is a test', 'https://freesvg.org/img/1545450625.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

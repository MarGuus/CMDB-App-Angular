import { Component, OnInit } from '@angular/core';
import { Ci } from './ci.model';

@Component({
  selector: 'app-ci-main',
  templateUrl: './ci-main.component.html',
  styleUrls: ['./ci-main.component.css']
})
export class CiMainComponent implements OnInit {
  selectedCi: Ci;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/component.model';

@Component({
  selector: 'app-ci-order',
  templateUrl: './ci-order.component.html',
  styleUrls: ['./ci-order.component.css']
})
export class CiOrderComponent implements OnInit {
  parts:Part[] = [
    new Part('Kingston Ram 8GB',2),
    new Part('Asus motherboard',1)
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

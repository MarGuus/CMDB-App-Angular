import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';
import { CiOrderService } from './ci-order.service';

@Component({
  selector: 'app-ci-order',
  templateUrl: './ci-order.component.html',
  styleUrls: ['./ci-order.component.css']
})
export class CiOrderComponent implements OnInit {
  parts:Part[];

  constructor(private ciOrderService : CiOrderService) { }

  ngOnInit(): void {
    this.parts = this.ciOrderService.getParts();
    this.ciOrderService.partsChanged.subscribe(
      (parts:Part[]) => {
        this.parts = parts;
      }
    );
  }


}

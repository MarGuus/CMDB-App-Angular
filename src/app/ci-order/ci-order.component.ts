import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Part } from '../shared/part.model';
import { CiOrderService } from './ci-order.service';

@Component({
  selector: 'app-ci-order',
  templateUrl: './ci-order.component.html',
  styleUrls: ['./ci-order.component.css']
})
export class CiOrderComponent implements OnInit,OnDestroy {
  parts:Part[];
  private igChangeSub: Subscription;

  constructor(private ciOrderService : CiOrderService) { }

  ngOnInit(): void {
    this.parts = this.ciOrderService.getParts();
    this.igChangeSub = this.ciOrderService.partsChanged.subscribe(
      (parts:Part[]) => {
        this.parts = parts;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }


}

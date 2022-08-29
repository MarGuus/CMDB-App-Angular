import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CiOrderService } from '../ci-order/ci-order.service';
import { Part } from '../shared/part.model';
import { Ci } from './ci.model';

@Injectable()
export class CiService {
  ciChanged = new Subject<Ci[]>();

  constructor(private orderService: CiOrderService) {}

  private CIs: Ci[] = [
    new Ci(
      'A test computer',
      'this is a test',
      'https://freesvg.org/img/1545450625.png',
      [new Part('Pirkka motherboard', 1), new Part('processor: intel i5', 1)]
    ),

    new Ci(
      'Another test computer',
      'this is a test',
      'https://freesvg.org/img/1545450625.png',
      [new Part('Pirkka motheboard', 1), new Part('processor: intel i7', 1)]
    ),
  ];

  getCis() {
    //return a new array and not a reference by calling slice
    return this.CIs.slice();
  }
  getCi(index: number) {
    return this.CIs[index];
  }

  addPartsToOrder(parts: Part[]) {
    this.orderService.addParts(parts);
  }

  addCi(ci: Ci) {
    this.CIs.push(ci);
    this.ciChanged.next(this.CIs.slice());
  }

  updateCi(index: number, newCi: Ci) {
    this.CIs[index] = newCi;
    this.ciChanged.next(this.CIs.slice());
  }

  deleteCi(index: number) {
    this.CIs.splice(index, 1);
    this.ciChanged.next(this.CIs.slice());
  }
}

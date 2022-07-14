import { EventEmitter, Injectable } from "@angular/core";
import { CiOrderService } from "../ci-order/ci-order.service";
import { Part } from "../shared/part.model";
import { Ci } from "./ci.model";

@Injectable()
export class CiService {
    ciSelected = new EventEmitter<Ci>();

    constructor(private orderService : CiOrderService){}

    private CIs:Ci[] = [
        new Ci('A test computer',
        'this is a test', 
        'https://freesvg.org/img/1545450625.png',
        [
            new Part('Pirkka motherboard',1),
            new Part('processor: intel i5', 1)
        ]),


        new Ci('Another test computer',
        'this is a test',
         'https://freesvg.org/img/1545450625.png',
         [
             new Part('Pirkka motheboard',1),
             new Part('processor: intel i7', 1)
         ])
      ];

      getCis(){
          //return a new array and not a reference by calling slice
          return this.CIs.slice();
      }

      addPartsToOrder(parts : Part[]){
        this.orderService.addParts(parts);
      }
}
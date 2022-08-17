import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Part } from "../shared/part.model";

export class CiOrderService {
    partsChanged = new Subject<Part[]>();
    private parts:Part[] = [
        new Part('Kingston Ram 8GB',2),
        new Part('Asus motherboard',1)
      ]; 


      getParts(){
          return this.parts.slice();
      }

      addPart(part : Part){
        this.parts.push(part);
        this.partsChanged.next(this.parts.slice());
      }

      addParts(parts : Part[]){
        this.parts.push(...parts);
        this.partsChanged.next(this.parts.slice());
      }
}
import { EventEmitter } from "@angular/core";
import { Part } from "../shared/part.model";

export class CiOrderService {
    partsChanged = new EventEmitter<Part[]>();
    private parts:Part[] = [
        new Part('Kingston Ram 8GB',2),
        new Part('Asus motherboard',1)
      ]; 


      getParts(){
          return this.parts.slice();
      }

      addPart(part : Part){
        this.parts.push(part);
        this.partsChanged.emit(this.parts.slice());
      }

      addParts(parts : Part[]){
        this.parts.push(...parts);
        this.partsChanged.emit(this.parts.slice());
      }
}
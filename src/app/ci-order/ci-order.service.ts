import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Part } from '../shared/part.model';

export class CiOrderService {
  partsChanged = new Subject<Part[]>();
  startedEditing = new Subject<number>();
  private parts: Part[] = [
    new Part('Kingston Ram 8GB', 2),
    new Part('Asus motherboard', 1),
  ];

  getParts() {
    return this.parts.slice();
  }

  getPart(index: number) {
    return this.parts[index];
  }

  addPart(part: Part) {
    this.parts.push(part);
    this.partsChanged.next(this.parts.slice());
  }

  updatePart(index: number, part: Part) {
    this.parts[index] = part;
    this.partsChanged.next(this.parts.slice());
  }

  addParts(parts: Part[]) {
    this.parts.push(...parts);
    this.partsChanged.next(this.parts.slice());
  }

  deletePart(index: number) {
    this.parts.splice(index, 1);
    this.partsChanged.next(this.parts.slice());
  }
}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Part } from 'src/app/shared/component.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  @Output() partAdded = new EventEmitter<Part>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const partName = this.nameInputRef.nativeElement.value;
    const partAmount = this.amountInputRef.nativeElement.value;
    const newPart = new Part(partName,partAmount);
    this.partAdded.emit(newPart)
  }

}

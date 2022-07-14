import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { Part } from 'src/app/shared/part.model';
import { CiOrderService } from '../ci-order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  //@Output() partAdded = new EventEmitter<Part>();

  constructor(private ciOrderService : CiOrderService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const partName = this.nameInputRef.nativeElement.value;
    const partAmount = this.amountInputRef.nativeElement.value;
    const newPart = new Part(partName,partAmount);
    this.ciOrderService.addPart(newPart)
  }

}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Part } from 'src/app/shared/part.model';
import { CiOrderService } from '../ci-order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
})
export class OrderEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  subscription: Subscription;
  editmode = false;
  editedItemIndex: number;
  editedItem: Part;

  constructor(private ciOrderService: CiOrderService) {}

  ngOnInit(): void {
    this.subscription = this.ciOrderService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editmode = true;
        this.editedItem = this.ciOrderService.getPart(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newPart = new Part(value.name, value.amount);

    if (this.editmode) {
      this.ciOrderService.updatePart(this.editedItemIndex, newPart);
    } else {
      this.ciOrderService.addPart(newPart);
    }
    this.editmode = false;
    form.reset();
  }

  onClear() {
    this.form.reset();
    this.editmode = false;
  }

  onDelete() {
    this.ciOrderService.deletePart(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

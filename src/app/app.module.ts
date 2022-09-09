import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CiMainComponent } from './ci-main/ci-main.component';
import { CiListComponent } from './ci-main/ci-list/ci-list.component';
import { CiDetailComponent } from './ci-main/ci-detail/ci-detail.component';
import { CiItemComponent } from './ci-main/ci-list/ci-item/ci-item.component';
import { CiOrderComponent } from './ci-order/ci-order.component';
import { OrderEditComponent } from './ci-order/order-edit/order-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { CiOrderService } from './ci-order/ci-order.service';
import { AppRoutingModule } from './app-routing.module';
import { CiStartComponent } from './ci-main/ci-start/ci-start.component';
import { CiEditComponent } from './ci-main/ci-edit/ci-edit.component';
import { CiService } from './ci-main/ci.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CiMainComponent,
    CiListComponent,
    CiDetailComponent,
    CiItemComponent,
    CiOrderComponent,
    OrderEditComponent,
    DropdownDirective,
    CiStartComponent,
    CiEditComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [CiOrderService, CiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

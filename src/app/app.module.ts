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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CiMainComponent,
    CiListComponent,
    CiDetailComponent,
    CiItemComponent,
    CiOrderComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

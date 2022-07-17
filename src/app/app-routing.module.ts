import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CiDetailComponent } from "./ci-main/ci-detail/ci-detail.component";
import { CiEditComponent } from "./ci-main/ci-edit/ci-edit.component";
import { CiMainComponent } from "./ci-main/ci-main.component";
import { CiStartComponent } from "./ci-main/ci-start/ci-start.component";
import { CiOrderComponent } from "./ci-order/ci-order.component";

const appRoutes : Routes = [
    {path : '', redirectTo : '/cis',pathMatch: 'full'},
    {path : 'cis', component: CiMainComponent, children:
    [
        {path: '',component:CiStartComponent},
        {path: 'new', component:CiEditComponent},
        {path: ':id',component:CiDetailComponent},
        {path: ':id/edit', component:CiEditComponent}
    ]
},
    {path : 'order', component: CiOrderComponent}
 
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
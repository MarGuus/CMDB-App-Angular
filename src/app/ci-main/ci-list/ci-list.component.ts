import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ci } from '../ci.model';
import { CiService } from '../ci.service';

@Component({
  selector: 'app-ci-list',
  templateUrl: './ci-list.component.html',
  styleUrls: ['./ci-list.component.css'],
})
export class CiListComponent implements OnInit, OnDestroy {
  //@Output() listCiSelected = new EventEmitter<Ci>();
  CIs: Ci[];
  subscription: Subscription;

  constructor(
    private ciService: CiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.ciService.ciChanged.subscribe((cis: Ci[]) => {
      this.CIs = cis;
    });
    this.CIs = this.ciService.getCis();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewCi() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  // onCiSelected(ci:Ci){
  //   this.listCiSelected.emit(ci);
  // }
}

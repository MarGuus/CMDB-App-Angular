import { Component, OnInit,Input } from '@angular/core';
import { Ci } from '../ci.model';
import { CiService } from '../ci.service';

@Component({
  selector: 'app-ci-detail',
  templateUrl: './ci-detail.component.html',
  styleUrls: ['./ci-detail.component.css']
})
export class CiDetailComponent implements OnInit {
  @Input() ci: Ci

  constructor(private ciService : CiService) { }

  ngOnInit(): void {
  }

  onAddToOrder(){
    this.ciService.addPartsToOrder(this.ci.parts);
  }

}

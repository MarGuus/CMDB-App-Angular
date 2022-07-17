import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ci } from '../ci.model';
import { CiService } from '../ci.service';

@Component({
  selector: 'app-ci-detail',
  templateUrl: './ci-detail.component.html',
  styleUrls: ['./ci-detail.component.css']
})
export class CiDetailComponent implements OnInit {
  ci: Ci;
  id :number;

  constructor(private ciService : CiService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = parseInt(params['id']);
        this.ci = this.ciService.getCi(this.id);
      }
    )
  }

  onAddToOrder(){
    this.ciService.addPartsToOrder(this.ci.parts);
  }

}

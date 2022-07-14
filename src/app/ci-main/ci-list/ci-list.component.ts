import { Component, OnInit } from '@angular/core';
import { Ci } from '../ci.model';
import { CiService } from '../ci.service';

@Component({
  selector: 'app-ci-list',
  templateUrl: './ci-list.component.html',
  styleUrls: ['./ci-list.component.css']
})
export class CiListComponent implements OnInit {
  //@Output() listCiSelected = new EventEmitter<Ci>();
  CIs:Ci[];

  constructor(private ciService : CiService) { }

  ngOnInit(): void {
    this.CIs = this.ciService.getCis();
  }

  // onCiSelected(ci:Ci){
  //   this.listCiSelected.emit(ci);
  // }

}

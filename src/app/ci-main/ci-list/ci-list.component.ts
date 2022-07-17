import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private ciService : CiService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CIs = this.ciService.getCis();
  }

  onNewCi(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  // onCiSelected(ci:Ci){
  //   this.listCiSelected.emit(ci);
  // }

}

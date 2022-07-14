import { Component, OnInit } from '@angular/core';
import { Ci } from './ci.model';
import { CiService } from './ci.service';

@Component({
  selector: 'app-ci-main',
  templateUrl: './ci-main.component.html',
  styleUrls: ['./ci-main.component.css'],
  providers: [CiService]
})
export class CiMainComponent implements OnInit {
  selectedCi: Ci;

  constructor(private ciService : CiService) { }

  ngOnInit(): void {
    this.ciService.ciSelected.subscribe(
      (ci:Ci) => {
        this.selectedCi = ci;
      }
    )
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ci } from '../../ci.model';
import { CiService } from '../../ci.service';

@Component({
  selector: 'app-ci-item',
  templateUrl: './ci-item.component.html',
  styleUrls: ['./ci-item.component.css']
})
export class CiItemComponent implements OnInit {
  @Input() ci : Ci;
  //@Output() ciSelected = new EventEmitter<void>();
  constructor(private ciService: CiService) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.ciService.ciSelected.emit(this.ci);
  }

}

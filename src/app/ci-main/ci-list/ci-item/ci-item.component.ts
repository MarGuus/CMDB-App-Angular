import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ci } from '../../ci.model';


@Component({
  selector: 'app-ci-item',
  templateUrl: './ci-item.component.html',
  styleUrls: ['./ci-item.component.css']
})
export class CiItemComponent implements OnInit {
  @Input() ci : Ci;
  @Input() index : number;
  

  ngOnInit(): void {
  }
}

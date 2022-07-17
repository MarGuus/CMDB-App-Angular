import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ci-edit',
  templateUrl: './ci-edit.component.html',
  styleUrls: ['./ci-edit.component.css']
})
export class CiEditComponent implements OnInit {
  id : number;
  editMode : boolean = false;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=> {
        this.id = params['id'];
        this.editMode = params['id'] != null;
      }
    )
  }

}

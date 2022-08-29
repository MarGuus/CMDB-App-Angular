import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CiService } from '../ci.service';

@Component({
  selector: 'app-ci-edit',
  templateUrl: './ci-edit.component.html',
  styleUrls: ['./ci-edit.component.css'],
})
export class CiEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  ciForm: FormGroup;

  constructor(private route: ActivatedRoute, private ciService: CiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      //route params changed --> reload form
      this.initForm();
    });
  }

  getControls() {
    console.log((<FormArray>this.ciForm.get('parts')).controls);
    return (<FormArray>this.ciForm.get('parts')).controls;
  }

  private initForm() {
    let ciName = '';
    let ciImagePath = '';
    let ciDesc = '';
    let partsArr = new FormArray([]);

    if (this.editMode) {
      const ci = this.ciService.getCi(this.id);

      ciName = ci.name;
      ciImagePath = ci.imagePath;
      ciDesc = ci.description;
      if (ci['parts']) {
        for (let part of ci.parts) {
          partsArr.push(
            new FormGroup({
              name: new FormControl(part.name, Validators.required),
              amount: new FormControl(part.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
                Validators.min(1),
              ]),
            })
          );
        }
      }
    }

    this.ciForm = new FormGroup({
      name: new FormControl(ciName, Validators.required),
      imagePath: new FormControl(ciImagePath, Validators.required),
      description: new FormControl(ciDesc, Validators.required),
      parts: partsArr,
    });

    console.log(this.ciForm);
  }

  //add a part to parts array
  onAddPart() {
    (<FormArray>this.ciForm.get('parts')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
          Validators.min(1),
        ]),
      })
    );
  }

  onSubmit() {
    console.log(this.ciForm);
  }
}

import { NgModule, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/Rx';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  observable: Observable<number>;
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);


  constructor(fb: FormBuilder) {
    this.observable = this.getObservable();
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges.pipe(
      filter(data => this.form.valid),
      map(data => {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, ' ');
        return data
      }),
      map(data => {
        data.lastUpdateTS = new Date();
        return data
      })
    ).subscribe(data => console.log(JSON.stringify(data)));

  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * 2);
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log("Form submitted!");
  }

}

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  PatternValidator
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  addRoutesForm: FormGroup;
  title = "transport-web-app";
  addedRoutesArr = [];
  arrlength = 0;
  consecutive_count = 0;

  constructor(private formBuilder: FormBuilder) {
    this.addRoutesForm = this.formBuilder.group({
      startPoint: [null, [Validators.required, Validators.minLength(3)]],
      endPoint: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {}
  onAddPickupPoints() {
    let startPoint = this.addRoutesForm.value.startPoint
      .substring(0, 3)
      .toUpperCase();
    let endPoint = this.addRoutesForm.value.endPoint
      .substring(0, 3)
      .toUpperCase();
    if (startPoint == endPoint) {
      alert("Start point and End point should not be same");
      return false;
    }
    this.addedRoutesArr.push({
      startPoint: startPoint,
      endPoint: endPoint
    });
    this.arrlength = this.addedRoutesArr.length;

    if (this.consecutive_count == 0)
      this.addedRoutesArr[this.arrlength - 1].type = "straightline";
    if (this.arrlength > 1) {
      if (
        this.addedRoutesArr[this.arrlength - 2].startPoint !=
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
        this.addedRoutesArr[this.arrlength - 2].startPoint !=
          this.addedRoutesArr[this.arrlength - 1].endPoint &&
        this.addedRoutesArr[this.arrlength - 2].endPoint ==
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
        this.addedRoutesArr[this.arrlength - 2].endPoint !=
          this.addedRoutesArr[this.arrlength - 1].endPoint
      ) {
        if (this.consecutive_count != 0) {
          this.addedRoutesArr[this.arrlength - 2].type = "connectordown";
        } else {
          this.addedRoutesArr[this.arrlength - 2].type = "straightline";
        }
        this.consecutive_count = 0;
      } else if (
        (this.addedRoutesArr[this.arrlength - 2].startPoint !=
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
          this.addedRoutesArr[this.arrlength - 2].startPoint !=
            this.addedRoutesArr[this.arrlength - 1].endPoint &&
          this.addedRoutesArr[this.arrlength - 2].endPoint !=
            this.addedRoutesArr[this.arrlength - 1].startPoint &&
          this.addedRoutesArr[this.arrlength - 2].endPoint ==
            this.addedRoutesArr[this.arrlength - 1].endPoint) ||
        (this.addedRoutesArr[this.arrlength - 2].startPoint !=
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
          this.addedRoutesArr[this.arrlength - 2].startPoint ==
            this.addedRoutesArr[this.arrlength - 1].endPoint &&
          this.addedRoutesArr[this.arrlength - 2].endPoint !=
            this.addedRoutesArr[this.arrlength - 1].startPoint &&
          this.addedRoutesArr[this.arrlength - 2].endPoint !=
            this.addedRoutesArr[this.arrlength - 1].endPoint)
      ) {
        console.log("entered arrow");
        if (this.consecutive_count != 0) {
          this.addedRoutesArr[this.arrlength - 2].type = "connectordown";
          this.addedRoutesArr[this.arrlength - 1].type = "connectordown";
        } else {
          console.log("entered arrow1");
          this.addedRoutesArr[this.arrlength - 2].type = "arrow";
        }

        this.consecutive_count = 0;
      } else if (
        this.addedRoutesArr[this.arrlength - 2].startPoint ==
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
        this.addedRoutesArr[this.arrlength - 2].startPoint !=
          this.addedRoutesArr[this.arrlength - 1].endPoint &&
        this.addedRoutesArr[this.arrlength - 2].endPoint !=
          this.addedRoutesArr[this.arrlength - 1].startPoint &&
        this.addedRoutesArr[this.arrlength - 2].endPoint ==
          this.addedRoutesArr[this.arrlength - 1].endPoint
      ) {
        ++this.consecutive_count;
        this.addedRoutesArr[this.arrlength - 2].type = "levelup";
        this.addedRoutesArr[this.arrlength - 1].type = "levelup";
        if (this.addedRoutesArr[this.arrlength - 2 - this.consecutive_count])
          this.addedRoutesArr[
            this.arrlength - 2 - this.consecutive_count
          ].type = "connectorup";
      } else {
      }
    } else {
      this.addedRoutesArr[this.arrlength - 1].type = "straightline";
      this.consecutive_count = 0;
    }

    console.log(this.addedRoutesArr);
    // console.log(this.addedRoutesArr[0]);
    // var result = this.addedRoutesArr.map(function(el) {
    //   var o = Object.assign({}, el);
    //   o.isActive = true;
    //   return o;
    // });
    // const result = this.addedRoutesArr.map(v => ({ ...v, isActive: true }));
    // console.log(result);
    this.addRoutesForm.reset();
  }
}

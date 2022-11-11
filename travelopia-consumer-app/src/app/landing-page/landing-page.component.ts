import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TravelRequest } from '../interfaces/TravelReques.interface';
import { TravelRequestService } from '../travel-request.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  countryList: Array<string> = ["India","Africa", "Europe"];
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private travelRequestService: TravelRequestService) {
   }

  ngOnInit(): void {
  }


  _travelReqForm = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    destination: this.formBuilder.control('', Validators.required),
    no_of_pax: this.formBuilder.control('', Validators.required),
    budget_per_pax: this.formBuilder.control('', Validators.required)
  })

  onSubmit() {
    console.warn(this._travelReqForm.value);
    let payload: any = this._travelReqForm.value
    payload.total_price = payload.budget_per_pax * payload.no_of_pax;
    payload.currency = "USD";
    this.travelRequestService.createTravelRequest(payload)
          .subscribe((data: any)=>{
            // this._snackBar.open(data.message, );
          })

  }
}

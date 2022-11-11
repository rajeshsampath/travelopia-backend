import { Component, OnInit, ViewChild } from '@angular/core';
import { TravelRequest } from '../interfaces/TravelReques.interface';
import { TravelRequestService } from '../travel-request.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ITravelRequest {
  name: string, 
  email: string, 
  destination: string, 
  no_of_pax: number, 
  total_price: number
}


@Component({
  selector: 'app-travel-request-list',
  templateUrl: './travel-request-list.component.html',
  styleUrls: ['./travel-request-list.component.css']
})
export class TravelRequestListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'destination', 'no_of_pax','total_price'];
  

  public loading: boolean = true;
  public errorMsg: string = '';
  public successMsg: string = '';
  public travelRequests!: ITravelRequest[];
  // public travelReqests: TravelRequest[] = [];
  constructor(private travelRequestService: TravelRequestService) { 
    this.travelRequestService.getTravelRequests()
          .subscribe((results: any) => {
            this.travelRequests = results.data;
            this.loading = false;
          },(error: ErrorEvent) => {
            this.errorMsg = error.error.message;
            this.loading = false
          })
  }

  ngOnInit(): void {}

}

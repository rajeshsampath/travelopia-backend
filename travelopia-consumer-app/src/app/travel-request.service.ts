import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TravelRequest } from './interfaces/TravelReques.interface';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {

  private HOST_URL = environment.API_URL
  constructor(private http: HttpClient) { }

  getTravelRequests(): Observable<TravelRequest[]> {
      return this.http.get<TravelRequest[]>(`${this.HOST_URL}/api/travel-request/all`)
  }

  createTravelRequest(travelReq :TravelRequest): Observable<TravelRequest> {
    console.log("travelReq", travelReq)
    return this.http.post<TravelRequest>(`${this.HOST_URL}/api/travel-request/create`, travelReq)
  }

}

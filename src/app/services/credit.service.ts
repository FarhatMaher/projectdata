import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: "root"
})
export class CreditService {
  constructor(private http: HttpClient) {}

  getCredits(): Observable<any> {
    return this.http.get<any>(baseURL + "credits");
  }
}

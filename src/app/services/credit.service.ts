import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "../shared/baseURL";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CreditService {
  constructor(private http: HttpClient) {}

  getCredits(): Observable<any> {
    return this.http
      .get<any>(baseURL + "api/type-credit")
      .pipe(map(tab => tab.map(tabb => tabb.Type_Credit)));
  }
  getCredit(id): Observable<any> {
    return this.http.get<any>(baseURL + `api/type-credit/${id}`);
  }

  getCreditss(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/credits");
  }

  PostSimulation(body): Observable<any> {
    const headers = new HttpHeaders({
      ContentType: "application/json"
    });

    return this.http.post(baseURL + "api/dossier-prospect", body, {
      headers: headers
    });
  }
}

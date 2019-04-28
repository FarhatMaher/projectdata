import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(this.url + "users");
  }

  postUser(user): Observable<any> {
    const headers = new HttpHeaders({
      ContentType: "application/json"
    });

    return this.http.post(this.url + "users", user, { headers: headers });
  }
  putUser(user): Observable<any> {
    const headers = new HttpHeaders({
      ContentType: "application/json"
    });

    return this.http.put(this.url + "users/" + user._id, user, {
      headers: headers
    });
  }
  DeleteUser(id): Observable<any> {
    const headers = new HttpHeaders({
      ContentType: "application/json"
    });

    return this.http.delete(this.url + "users/" + id, { headers: headers });
  }
}

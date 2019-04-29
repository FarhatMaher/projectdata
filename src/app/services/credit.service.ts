import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "../shared/baseURL";
import { map, filter } from "rxjs/operators";

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

  getEchans(id): Observable<any> {
    return this.http.get<any>(baseURL + `api/simulation-historique/${id}`);
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

  getSimulations(id): Observable<any> {
    return this.http.get<any>(
      baseURL + `api/historique-prospect?PROCODE=${id}`
    );
  }

  getDocuments(id): Observable<any> {
    return this.http.get<any>(baseURL + `api/doc-credit/${id}`);
  }

  PostDemande(file, DCRID, DPRID, CreditID): Observable<any> {
    const formData: any = new FormData();

    formData.append("DocumentFile", file);

    return this.http.post(
      baseURL + `api/demande-credit/${DCRID}/${DPRID}/${CreditID}`,
      formData
    );
  }

  getDemandes(): Observable<any> {
    return this.http.get<any>(baseURL + "api/list-demande");
  }
  getDemandesValides(): Observable<any> {
    return this.http.get<any>(baseURL + "api/list-demande");
  }

  getDemandeDocuments(id): Observable<any> {
    return this.http.get<any>(baseURL + `api/list-document?ID=${id}`);
  }

  putDemande(user) {
    const headers = new HttpHeaders({
      ContentType: "application/json"
    });

    return this.http.put(baseURL + `api/update-etat/${user.id}`, user, {
      headers: headers
    });
  }

  calcule(iduser, iddemande) {
    return this.http.get<any>(
      baseURL + `api/calcul-score/${iduser}/${iddemande}`
    );
  }

  getEcheanciers(idsim) {
    return this.http.get<any>(baseURL + `api/simulation-echeance?ID=${idsim}`);
  }

  getStatSimulation() {
    return this.http.get<any>(baseURL + `api/statistique`);
  }
  getStatDemande() {
    return this.http.get<any>(baseURL + `api/statistique-demande`);
  }
  getStataccepte() {
    return this.http.get<any>(baseURL + `api/statistique-accepte`);
  }
}

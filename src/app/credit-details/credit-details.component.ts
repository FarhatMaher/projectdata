import { TableComponent } from "./../table/table.component";
import { CreditService } from "./../services/credit.service";
import { ComparateurComponent } from "./../comparateur/comparateur.component";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { AddDemandeComponent } from "../add-demande/add-demande.component";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-credit-details",
  templateUrl: "./credit-details.component.html",
  styleUrls: ["./credit-details.component.css"]
})
export class CreditDetailsComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  maxDPRCAPITAL = "";
  maxDPRNBRECHEANCE = "";
  Simulation;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 25000;
  value1 = 50;
  vertical = false;

  body = {
    PROCODE: "1", // code utilisateur
    DPRCAPITAL: 15000, // max de type credit
    DPRTAUXINTERET: "4.5", // mel type mta credit
    DPRNBRECHEANCE: 240, // duree de type de credit
    DPRMENSUALITE: "Trimestrielle"
  };
  periodes: any[] = [
    { value: "Mensuelle", viewValue: "Mensuelle" },
    { value: "Trimestrielle", viewValue: "Trimestrielle" },
    { value: "Semestrielle", viewValue: "Semestrielle" },
    { value: "Annuelle", viewValue: "Annuelle" }
  ];

  constructor(
    private dialog: MatDialog,
    private creditservice: CreditService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.creditservice.getCredit(params["id"]);
        })
      )
      .subscribe(data => this.handel(data));
  }
  handel(data) {
    this.maxDPRCAPITAL = data.TCRMAXCAPITAL;
    this.body.DPRTAUXINTERET = data.TCRTAUXINTERT;
    this.maxDPRNBRECHEANCE = data.TCRDUREEMAX;
  }

  private _tickInterval = 1;

  openComparateur() {
    this.dialog.open(ComparateurComponent, { width: "800px", height: "500px" });
  }

  openAdddemande() {
    this.dialog.open(AddDemandeComponent, { width: "800px", height: "500px" });
  }
  Simuler() {
    console.log(this.body);
    this.creditservice.PostSimulation(this.body).subscribe(data => {
      console.log(data);
      this.Simulation = data;
    });
  }
}

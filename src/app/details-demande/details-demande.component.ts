import { MAT_DIALOG_DATA } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import { CreditService } from "../services/credit.service";

@Component({
  selector: "app-details-demande",
  templateUrl: "./details-demande.component.html",
  styleUrls: ["./details-demande.component.css"]
})
export class DetailsDemandeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private creditservice: CreditService
  ) {}

  len;
  ngOnInit() {
    console.log("modalllllll" + this.data.data);
  }

  complet() {
    this.data.demande.ETATDOCUMENT = "complet";
    this.creditservice
      .putDemande(this.data.demande)
      .subscribe(next => console.log(next));
  }

  incomplet() {
    this.data.demande.ETATDOCUMENT = "incomplet";
    this.creditservice.putDemande(this.data.demande).subscribe();
  }
}

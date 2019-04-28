import { CreditService } from "./../services/credit.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-calculescore",
  templateUrl: "./calculescore.component.html",
  styleUrls: ["./calculescore.component.css"]
})
export class CalculescoreComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private creditservice: CreditService
  ) {}

  ngOnInit() {}

  complet() {
    this.data.demande.ETATACCEPTATION = "Accepté";
    this.creditservice
      .putDemande(this.data.demande)
      .subscribe(next => console.log(next));
  }

  incomplet() {
    this.data.demande.ETATACCEPTATION = "Refusé";
    this.creditservice.putDemande(this.data.demande).subscribe();
  }
}

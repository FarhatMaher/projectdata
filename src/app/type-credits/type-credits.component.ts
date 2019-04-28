import { Component, OnInit } from "@angular/core";
import { CreditService } from "../services/credit.service";

@Component({
  selector: "app-type-credits",
  templateUrl: "./type-credits.component.html",
  styleUrls: ["./type-credits.component.css"]
})
export class TypeCreditsComponent implements OnInit {
  constructor(private creditServie: CreditService) {}
  credits;
  ngOnInit() {
    this.creditServie.getCredits().subscribe(credits => {
      this.credits = credits;
      console.log(credits);
    });
  }
}

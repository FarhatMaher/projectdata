import { MAT_DIALOG_DATA } from "@angular/material";
import { CreditService } from "./../services/credit.service";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-add-demande",
  templateUrl: "./add-demande.component.html",
  styleUrls: ["./add-demande.component.css"]
})
export class AddDemandeComponent implements OnInit {
  fileList = new Array<any>();
  urls = new Array<any>();
  files = new Array<any>();
  constructor(
    private creditServie: CreditService,
    @Inject(MAT_DIALOG_DATA) public data,
    private creditservice: CreditService
  ) {}

  onFilesChange(fileList, i) {
    // console.log("fileeeeeeeeeeeeeeeeeee" + file);
    this.urls = [];
    this.fileList[i] = fileList;
    console.log("fileeeeee" + this.fileList);
  }
  onFilesChangef(event, i) {
    this.urls = [];
    this.fileList[i] = event.target.files.item(0);
    console.log("fileeeeee" + this.fileList);
  }

  ngOnInit() {
    console.log(this.data.data);
    this.creditServie.getDocuments(this.data.data).subscribe(credits => {
      this.files = credits;
      console.log(credits);
    });
  }

  sendDemande() {
    /* this.creditservice
      .PostDemande(this.fileList[0], "1", "1")
      .subscribe(next => console.log(next));*/
    for (let i = 0; i < this.files.length; i++) {
      console.log(this.files[i]);
      this.creditservice
        .PostDemande(
          this.fileList[i],
          this.files[i].id,
          localStorage.getItem("idsimu"),
          this.data.data
        )
        .subscribe(next => console.log(next));
    }
  }
}

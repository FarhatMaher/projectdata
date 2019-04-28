import { CreditService } from "./../services/credit.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-demande",
  templateUrl: "./add-demande.component.html",
  styleUrls: ["./add-demande.component.css"]
})
export class AddDemandeComponent implements OnInit {
  fileList = new Array<any>();
  urls = new Array<any>();
  files;
  constructor(private creditServie: CreditService) {}

  onFilesChange(fileList, i) {
    // console.log("fileeeeeeeeeeeeeeeeeee" + file);
    this.urls = [];
    this.fileList[i] = fileList;
    console.log("fileeeeee" + this.fileList);
  }
  onFilesChangef(event, i) {
    this.urls = [];
    this.fileList[i] = event.target.files;
    console.log("fileeeeee" + this.fileList);
  }

  ngOnInit() {
    this.creditServie.getCreditss().subscribe(credits => {
      this.files = credits;
      console.log(credits);
    });
  }
}

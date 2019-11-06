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
  fileList = new Array<any>();
  urls = new Array<any>();
  files = new Array<any>();
  ngOnInit() {
    this.creditServie.getCredits().subscribe(credits => {
      this.credits = credits;
      console.log(credits);
    });
  }
  onFilesChange(fileList) {
    // console.log("fileeeeeeeeeeeeeeeeeee" + file);
    let i = -1 ;
    i++ ;
    this.urls = [];
    this.fileList[i] = fileList[0];
   
    console.log("fileeeeeWWWe");
    console.log(fileList);
  }
  onFilesChangef(event, i) {
    this.urls = [];
    this.fileList[i] = event.target.files.item(0);
    console.log("fileeeeeeXXXX" + this.fileList);
  }
}

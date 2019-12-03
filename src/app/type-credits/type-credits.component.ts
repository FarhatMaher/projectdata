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
  filename: any;
  text: any ;
  imgURL= new Array<any>();
  tmp; templa; pdf;
  name: String ;
  ngOnInit() {
 
  }
  onFilesChange(fileList) {
   
    this.urls = [];
    this.fileList= fileList;
   
    this.pdf = this.fileList[0].name

  this.creditServie.upload_file(this.fileList[0]).subscribe(
      next => console.log(next)
  );

}
 onFilesChangef(event) {
    this.fileList = event.target.files;
    //this.filename = this.fileList[0].name


      this.pdf = this.fileList[0].name
        this.creditServie.upload_file(this.fileList[0]).subscribe(
          next => {
          
            console.log(next);
          }
          );

  }
  getText() {

   this.text= ''
    this.creditServie.getText(this.pdf).subscribe(
      next => {
        
        this.text = next;
        this.text.prenom=  this.text.prenom.replace('***','');
        this.text.adresse=  this.text.adresse.replace('***','');
        console.log(this.text.prenom);
        console.log(this.text);
      }
      );
  }
  delete () {
    this.fileList = []
    this.imgURL= []
  }
}

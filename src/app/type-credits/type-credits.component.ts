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
    console.log("ff",this.fileList);
    let j = 0;
    for(let i = 0 ; i<this.fileList.length; i++) {
      let chaine:string = this.fileList[i].name;
     let result = chaine.split('.')
      if(result[1]=='jpg' || result[1]=='png' || result[1]=='jpeg'){
    const reader = new FileReader();
    reader.readAsDataURL(this.fileList[i]);
    reader.onload = (_event) => { 
      this.imgURL[j] = reader.result; 
      j++
    }
      }
    }
  if(this.fileList.length==3){
    this.tmp = this.fileList[2].name
    this.templa = this.fileList[1].name
    this.pdf = this.fileList[0].name

    for (let i=0 ; i<this.fileList.length;i++) {
      this.creditServie.upload_file(this.fileList[i]).subscribe(
      next => console.log(next)
  );

  }
 

}
   

  }
 onFilesChangef(event) {
    this.fileList = event.target.files;
    //this.filename = this.fileList[0].name
    console.log(this.fileList)
    let j = 0;
    for(let i = 0 ; i<this.fileList.length; i++) {
      let chaine:string = this.fileList[i].name;
     let result = chaine.split('.')
      if(result[1]=='jpg' || result[1]=='png' || result[1]=='jpeg'){
    const reader = new FileReader();
    reader.readAsDataURL(this.fileList[i]);
    reader.onload = (_event) => { 
      this.imgURL[j] = reader.result; 
      j++
    }
      }
    }
    if(this.fileList.length==3){
      this.tmp = this.fileList[2].name
      this.templa = this.fileList[1].name
      this.pdf = this.fileList[0].name
      for (let i=0; i<this.fileList.length;i++) {
        this.creditServie.upload_file(this.fileList[i]).subscribe(
     next => console.log(next)
    );

    }
    }

  }
  getText() {

   this.text= ''
    this.creditServie.getText(this.tmp,this.templa,this.pdf).subscribe(
      next => {this.text = next; console.log(this.text);}
      );
  }
  delete () {
    this.fileList = []
    this.imgURL= []
  }
}

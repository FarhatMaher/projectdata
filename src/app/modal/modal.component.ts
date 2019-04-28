import { MAT_DIALOG_DATA } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  message;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.message = data.message;
  }
  ngOnInit() {}
}

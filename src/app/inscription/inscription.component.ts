import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  user = { username: "", password: "" };

  constructor(
    /*private userservice: UserService ,*/ private dialog: MatDialog,
    private router: Router
  ) /*private dialogref: MatDialogRef<InscriptionComponent>*/
  {}

  ngOnInit() {}

  inscription() {
    /* this.userservice.Adduser(this.user).subscribe(data => {

      this.openModal('you are registered successfully');


    }) ;

*/
  }

  /*openModal(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "300px";
    dialogConfig.height = "200px";
    dialogConfig.data = {
      message: msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => this.dialogref.close());
  }

  verifier() {
    this.userservice.CheckUserName(this.user.username).subscribe(user => {
      if (user) {
        this.user.username = "";
        this.openModal2("username existe");
      }
    });
  }

  openModal2(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "300px";
    dialogConfig.height = "200px";
    dialogConfig.data = {
      message: msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
  }*/
}

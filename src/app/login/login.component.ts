import { MatDialogConfig, MatDialog, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { InscriptionComponent } from "../inscription/inscription.component";
import { ToastComponent } from "../toast/toast.component";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  password;
  user;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private auth: UserService,
    private dialog1: MatDialog
  ) {}

  ngOnInit() {
    this.openSnackBar("Welcome to our management system");
  }

  authentification() {
    let userr = { username: this.user, password: this.password };
    this.auth.Auth(userr).subscribe(user => {
      console.log(user);
      if (user) {
        localStorage.setItem("id", "1");
        localStorage.setItem("username", user.username);
        this.router.navigate(["/home"]);
      } else {
        //  this.do("Please check your data");
        this.user = "";
        this.password = "";
      }
    });
  }

  openSnackBar(msg) {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: 2000,
      data: { message: msg }
    });
  }

  /*do(msg) {
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

     dialogConfig.width = '300px' ;
    dialogConfig.height = '200px' ;
    dialogConfig.data = {
    message : msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);


  }*/
  OpenInscriptionModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "400px";
    dialogConfig.height = "400px";

    this.dialog1.open(InscriptionComponent, dialogConfig);
  }
}

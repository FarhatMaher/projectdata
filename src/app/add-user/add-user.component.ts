import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { MatDialogConfig, MatDialog, MatDialogRef } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  user = {
    icon: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    ordertotal: ""
  };
  choice: any;
  gender: string[] = ["Male", "Female"];
  constructor(
    private userservice: UserService,
    private dialog: MatDialog,
    private AdduserDialog: MatDialogRef<AddUserComponent>
  ) {}

  ngOnInit() {}

  adduser() {
    if (this.choice === "Male") {
      this.user.icon = "fas fa-male";
    } else {
      this.user.icon = "fas fa-female";
    }
    this.userservice.postUser(this.user).subscribe(user => {
      this.OpenSuccModal("User added successfully");
      this.user.address = "";
      this.user.city = "";
      this.user.firstname = "";
      this.user.state = "";
      this.user.lastname = "";
      this.choice = "";
      this.user.icon = "";
      this.user.ordertotal = "";
    });
  }

  OpenSuccModal(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "300px";
    dialogConfig.height = "200px";
    dialogConfig.data = {
      message: msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.AdduserDialog.close();
    });
  }
}

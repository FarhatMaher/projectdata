import { UserService } from "./../services/user.service";
import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
  MatDialogRef
} from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data,
    private userservice: UserService,
    private dialog: MatDialog,
    private UpdateUserDialog: MatDialogRef<UpdateUserComponent>
  ) {
    console.log(data.data);
  }

  ngOnInit() {
    this.user = this.data.data;
    if (this.user.icon === "fas fa-female") {
      this.choice = "Female";
    } else {
      this.choice = "Male";
    }
  }

  UpdateUser() {
    if (this.choice === "Male") {
      this.user.icon = "fas fa-male";
    } else {
      this.user.icon = "fas fa-female";
    }
    this.userservice.putUser(this.user).subscribe(user => {
      this.user = user;

      this.user.icon = "";
      this.OpenSuccModal("User updated successfully");
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
      this.UpdateUserDialog.close();
    });
  }
}

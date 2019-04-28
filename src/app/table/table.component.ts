import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";

import { AddUserComponent } from "../add-user/add-user.component";

import { ConfirmationComponent } from "../confirmation/confirmation.component";
import { UpdateUserComponent } from "../update-user/update-user.component";
import { UserService } from "../services/user.service";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource<any>();

  constructor(private dialog: MatDialog, private userservice: UserService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "icon",
    "firstname",
    "lastname",
    "address",
    "city",
    "state",
    "ordertotal",
    "operations"
  ];

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.userservice.getAllUsers().subscribe(
      users => {
        this.dataSource.data = users.reverse();
      },

      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }

  openAdduser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "400px",
      height: "800px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userservice.getAllUsers().subscribe(
        users => {
          this.dataSource.data = users.reverse();
        },

        error => console.log(error),
        () => {
          console.log("completed");
        }
      );
    });
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  deleteUser(id) {
    this.confirmer("Are you sure ?", id);
  }

  confirmer(msg, id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "300px";
    dialogConfig.height = "200px";
    dialogConfig.data = {
      message: msg
    };

    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userservice.DeleteUser(id).subscribe(result => {
          this.OpenSuccModal("User deleted successfully");

          this.userservice.getAllUsers().subscribe(
            users => {
              this.dataSource.data = users.reverse();
            },

            error => console.log(error),
            () => {
              console.log("completed");
            }
          );
        });
      }
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
  }

  UpdateUser(user) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { data: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userservice.getAllUsers().subscribe(
        users => {
          this.dataSource.data = users.reverse();
        },

        error => console.log(error),
        () => {
          console.log("completed");
        }
      );
    });
  }
}

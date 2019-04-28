import { CreditService } from "./../services/credit.service";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { ComparateurDataSource } from "./comparateur-datasource";
import { AddDemandeComponent } from "../add-demande/add-demande.component";

@Component({
  selector: "app-comparateur",
  templateUrl: "./comparateur.component.html",
  styleUrls: ["./comparateur.component.css"]
})
export class ComparateurComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "DPRCAPITAL",
    "DPRTAUXINTERET",
    "DPRTOTALINTERET",
    "DPRMENSUALITE",
    "DPRNBRECHEANCE",
    "DPRECHEANCE",
    "operations"
  ];

  constructor(
    private creditservice: CreditService,
    private dialog: MatDialog
  ) {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.creditservice.getSimulations(localStorage.getItem("iduser")).subscribe(
      users => {
        this.dataSource.data = users.reverse();
      },

      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }

  openAdddemande(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "800px";
    dialogConfig.height = "500px";
    dialogConfig.data = {
      data: element.TCID
    };
    this.dialog.open(AddDemandeComponent, dialogConfig);
  }
}

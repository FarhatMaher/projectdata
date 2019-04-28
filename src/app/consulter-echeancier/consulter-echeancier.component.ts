import { CreditService } from "./../services/credit.service";
import { OnInit } from "@angular/core";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { ConsulterEcheancierDataSource } from "./consulter-echeancier-datasource";

@Component({
  selector: "app-consulter-echeancier",
  templateUrl: "./consulter-echeancier.component.html",
  styleUrls: ["./consulter-echeancier.component.css"]
})
export class ConsulterEcheancierComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "DPRORDER",
    "DPRID",
    "DPRINTERETN",
    "DPRCAPITALN",
    "DPRECHEANCEN",
    "DPRDATE"
  ];

  constructor(private creditservice: CreditService) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.creditservice.getEchans(localStorage.getItem("idsimu")).subscribe(
      users => {
        this.dataSource.data = users.reverse();
      },

      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }
}

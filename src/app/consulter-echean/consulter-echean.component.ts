import { CreditService } from "./../services/credit.service";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { ConsulterEcheanDataSource } from "./consulter-echean-datasource";

@Component({
  selector: "app-consulter-echean",
  templateUrl: "./consulter-echean.component.html",
  styleUrls: ["./consulter-echean.component.css"]
})
export class ConsulterEcheanComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<any>();
  constructor(private creditservice: CreditService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "DPRORDER",
    "DPRINTERETN",
    "DPRCAPITALN",
    "DPRECHEANCEN",
    "DPRDATE"
  ];

  ngAfterViewInit() {
    this.creditservice
      .getEcheanciers(localStorage.getItem("idsimu"))
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }
}

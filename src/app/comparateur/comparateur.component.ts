import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { ComparateurDataSource } from "./comparateur-datasource";

@Component({
  selector: "app-comparateur",
  templateUrl: "./comparateur.component.html",
  styleUrls: ["./comparateur.component.css"]
})
export class ComparateurComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ComparateurDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  ngAfterViewInit() {
    this.dataSource = new ComparateurDataSource(this.paginator, this.sort);
  }
}

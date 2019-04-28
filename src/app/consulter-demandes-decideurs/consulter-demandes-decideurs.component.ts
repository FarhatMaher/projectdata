import { CalculescoreComponent } from "./../calculescore/calculescore.component";
import { filter } from "rxjs/operators";
import { CreditService } from "./../services/credit.service";
import { AfterViewInit, Component, ViewChild, Inject } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MAT_DIALOG_DATA
} from "@angular/material";
import { ConsulterDemandesDecideursDataSource } from "./consulter-demandes-decideurs-datasource";

@Component({
  selector: "app-consulter-demandes-decideurs",
  templateUrl: "./consulter-demandes-decideurs.component.html",
  styleUrls: ["./consulter-demandes-decideurs.component.css"]
})
export class ConsulterDemandesDecideursComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<any>();
  score;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "ETATACCEPTATION",
    "ETATDOCUMENT",
    "COMMENTAIREAGENT",
    "DPRID",
    "Calcule Score"
  ];
  constructor(
    private creditservice: CreditService,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.creditservice.getDemandesValides().subscribe(
      users => {
        this.dataSource.data = users.filter(
          user => user.ETATDOCUMENT === "complet"
        );
      },

      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }

  calculeScore(demande) {
    this.creditservice
      .calcule(localStorage.getItem("iduser"), demande.id)
      .subscribe(score => {
        this.score = score;
        this.dialog.open(CalculescoreComponent, {
          width: "400px",
          height: "400px",
          data: { data: this.score, demande: demande }
        });
      });
  }
}

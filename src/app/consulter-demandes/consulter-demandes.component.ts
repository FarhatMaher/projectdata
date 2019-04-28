import { CreditService } from "./../services/credit.service";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";

import { DetailsDemandeComponent } from "../details-demande/details-demande.component";

@Component({
  selector: "app-consulter-demandes",
  templateUrl: "./consulter-demandes.component.html",
  styleUrls: ["./consulter-demandes.component.css"]
})
export class ConsulterDemandesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  files = new Array<any>();
  lastdata = new Array<any>();
  public dataSource = new MatTableDataSource<any>();
  constructor(
    private dialog: MatDialog,
    private creditservice: CreditService
  ) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "ETATACCEPTATION",
    "ETATDOCUMENT",
    "COMMENTAIREAGENT",
    "DPRID"
  ];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.creditservice.getDemandes().subscribe(
      users => {
        this.dataSource.data = users.reverse();
      },

      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }

  ConsulterDemande(demande) {
    this.lastdata = [];
    this.creditservice.getDocuments(demande.TCID).subscribe(data => {
      this.files = data;

      this.creditservice.getDemandeDocuments(demande.id).subscribe(next => {
        console.log("fffffff" + next.length);
        let j = 0;
        if (next.length > 0) {
          for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].id === next[j].DCRID) {
              let obj = { DCRNOM: "", DocumentFile: "" };
              obj.DCRNOM = this.files[i].DCRNOM;
              obj.DocumentFile = next[j].DocumentFile;
              this.lastdata.push(obj);
              j++;
            }
          }
        }

        console.log(this.lastdata);
        const dialogRef = this.dialog.open(DetailsDemandeComponent, {
          width: "400px",
          height: "500px",
          data: { data: this.lastdata, demande: demande }
        });

        dialogRef.afterClosed().subscribe(next => {
          this.dataSource.sort = this.sort;
          this.creditservice.getDemandes().subscribe(
            users => {
              this.dataSource.data = users.reverse();
            },

            error => console.log(error),
            () => {
              console.log("completed");
            }
          );
        });
      });
    });
  }
}

import { ConsulterDemandesDecideursComponent } from "./consulter-demandes-decideurs/consulter-demandes-decideurs.component";
import { ComparateurComponent } from "./comparateur/comparateur.component";
import { ConsulterDemandesComponent } from "./consulter-demandes/consulter-demandes.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TypeCreditsComponent } from "./type-credits/type-credits.component";
import { CreditDetailsComponent } from "./credit-details/credit-details.component";
import { TableComponent } from "./table/table.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ConsulterEcheanComponent } from "./consulter-echean/consulter-echean.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "typecredit", component: TypeCreditsComponent },
      { path: "creditDelais/:id", component: CreditDetailsComponent },
      { path: "gestionUser", component: TableComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "Admindashboard", component: AdminDashboardComponent },
      { path: "listeDemandes", component: ConsulterDemandesComponent },
      { path: "historiques", component: ComparateurComponent },
      { path: "decideur", component: ConsulterDemandesDecideursComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

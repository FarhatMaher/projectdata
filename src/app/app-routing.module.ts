import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TypeCreditsComponent } from "./type-credits/type-credits.component";
import { CreditDetailsComponent } from "./credit-details/credit-details.component";
import { TableComponent } from "./table/table.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

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
      { path: "Admindashboard", component: AdminDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

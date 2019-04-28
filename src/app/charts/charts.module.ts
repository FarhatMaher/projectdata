import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsModule as Ng2Charts } from "ng2-charts";

import { ChartsComponent } from "./charts.component";

@NgModule({
  imports: [CommonModule, Ng2Charts],
  declarations: [ChartsComponent]
})
export class ChartsModule {}

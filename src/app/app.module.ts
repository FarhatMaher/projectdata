import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InscriptionComponent } from "./inscription/inscription.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ToastComponent } from "./toast/toast.component";
import { HomeComponent } from "./home/home.component";
import { LayoutModule } from "@angular/cdk/layout";
import { TypeCreditsComponent } from "./type-credits/type-credits.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    ToastComponent,
    HomeComponent,
    TypeCreditsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, InscriptionComponent, ToastComponent]
})
export class AppModule {}

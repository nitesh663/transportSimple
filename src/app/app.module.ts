import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
// import { TripsModule } from "./trips/trips.module";
import { ConnectorDownComponent } from "./trips/connector-down/connector-down";
import { ConnectorUpComponent } from "./trips/connector-up/connector-up";

@NgModule({
  declarations: [AppComponent, ConnectorDownComponent, ConnectorUpComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
    // TripsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

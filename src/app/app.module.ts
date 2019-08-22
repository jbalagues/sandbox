import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JackpotComponent } from "./jackpot/jackpot.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { AwsService } from "./servicios/aws.service";
import { ContactoComponent } from "./contact/contacto.component";
import { FormsModule } from "@angular/forms";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JackpotComponent,
    MainComponent,
    ContactoComponent,
    DialogComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AwsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

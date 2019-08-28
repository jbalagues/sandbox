import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JackpotComponent } from "./jackpot/jackpot.component";
import { MainComponent } from "./main/main.component";
import { ContactoComponent } from "./contact/contacto.component";
import { MnistComponent } from "./mnist/mnist.component";

const routes: Routes = [
  { path: "jackpot", component: JackpotComponent },
  { path: "home", component: MainComponent },
  { path: "mnist", component: MnistComponent },
  { path: "contact", component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JackpotComponent } from "./jackpot/jackpot.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "jackpot", component: JackpotComponent },
  { path: "home", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

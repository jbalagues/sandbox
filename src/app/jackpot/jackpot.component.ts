import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jackpot",
  templateUrl: "./jackpot.component.html",
  styleUrls: ["./jackpot.component.css"]
})
export class JackpotComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  pullHandle(e) {
    console.log("pullHandle");
  }

  initiatePull(e) {
    console.log("initiatePull");
  }
}

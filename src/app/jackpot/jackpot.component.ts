import { Component, OnInit } from "@angular/core";
import { AwsService } from "../servicios/aws.service";

@Component({
  selector: "app-jackpot",
  templateUrl: "./jackpot.component.html",
  styleUrls: ["./jackpot.component.css"]
})
/*
export const handler = async (event: any = {}): Promise<any> => {
  console.log('Hello World!');
  const response = JSON.stringify(event, null, 2);
  return response;
}*/
export class JackpotComponent implements OnInit {
  /// CLIENT UI CODE ///

  // Application global variables
  isSpinning: boolean = false;

  constructor(private awsService: AwsService) {}

  ngOnInit() {}

  pullHandle(e) {
    console.log("pullHandle");
  }

  initiatePull(e) {
    console.log("initiatePull");
  }
}

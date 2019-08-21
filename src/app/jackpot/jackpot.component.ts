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
  slot_L = "../../assets/img/slot/hart_q.png";
  slot_M = "../../assets/img/slot/hart_q.png";
  slot_R = "../../assets/img/slot/hart_q.png";

  winner_IMG = "../../assets/img/slot/winner.png";
  slot_handle = "../../assets/img/slot/lever-up.png";

  winner_visible = false;

  pullParams: {
    FunctionName: "slotpull";
    InvocationType: "RequestResponse";
    LogType: "None";
  };

  pullResults = null;

  /// CLIENT UI CODE ///

  /// VARIABLES AND DATA MAP NEEDED ///
  pullReturned = null;
  slotResults;

  // Application global variables
  isSpinning: boolean = false;

  constructor(private awsService: AwsService) {}

  ngOnInit() {}

  pullHandle(e) {
    console.log("pullHandle");
    if (this.isSpinning === false) {
      // Show the handle pulled down
      this.slot_handle = "../../assets/img/slot/lever-dn.png";
    }
  }

  initiatePull(e) {
    console.log("initiatePull");
    // Show the handle flipping back up
    this.slot_handle = "../../assets/img/slot/lever-up.png";
    // Set all three wheels "spinning"
    this.slot_L = "../../assets/img/slot/slotpullanimation.gif";
    this.slot_M = "../../assets/img/slot/slotpullanimation.gif";
    this.slot_R = "../../assets/img/slot/slotpullanimation.gif";

    // Set app status to spinning
    this.isSpinning = true;

    this.winner_visible = false;

    // Call the Lambda function to collect the spin results
    //this.pullResults = this.awsService.tirada();
    //this.displayPull();
    // this.awsService.tirada().subscribe(data => console.log("data-->" + data));

    this.awsService
      .tirada()
      .then(res => {
        console.log("data res-->" + res);
        this.displayPull(res);
      })
      .catch(err => console.log("data err -->" + err));
  }

  displayPull(datos) {
    console.log("displayPull=" + datos);
    var jsonParsed = JSON.parse(datos.Payload);

    this.isSpinning = false;
    if (jsonParsed.isWinner) {
      this.winner_visible = true;
    }
    this.slot_L = "../../assets/img/slot/" + jsonParsed.leftWheelImage.file.S;
    this.slot_M = "../../assets/img/slot/" + jsonParsed.middleWheelImage.file.S;
    this.slot_R = "../../assets/img/slot/" + jsonParsed.rightWheelImage.file.S;
  }
}

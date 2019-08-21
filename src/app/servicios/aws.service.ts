import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

var AWS = require("aws-sdk");

AWS.config.region = "us-east-2"; // Region

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:ecf243b5-aa65-4020-9e57-a1b6f2d5746d"
});

/// Prepare to call Lambda function
var lambda = new AWS.Lambda({
  region: "us-east-2",
  apiVersion: "2015-03-31"
});

@Injectable()
export class AwsService implements OnInit {
  //

  /*
  arn:aws:lambda:us-east-2:718930781757:function:slotpull
  {
    "isWinner": false,
    "leftWheelImage": {
      "file": {
        "S": "hart_k.png"
      }
    },
    "middleWheelImage": {
      "file": {
        "S": "hart_a.png"
      }
    },
    "rightWheelImage": {
      "file": {
        "S": "diam_k.png"
      }
    }
  }
  */
  //lambda = null;

  /*constructor() {
   
    const creds = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "us-east-2:ecf243b5-aa65-4020-9e57-a1b6f2d5746d"
    });

    this.AWS.config.update({
      region: "us-east-2",
      apiVersion: "2015-03-31",
      credentials: creds
    });

    this.lambda = new this.AWS.Lambda({
      region: "us-east-2",
      apiVersion: "2015-03-31"
    });
    
  }*/

  ngOnInit() {}

  pullParams = {
    FunctionName: "arn:aws:lambda:us-east-2:718930781757:function:slotpull",
    InvocationType: "RequestResponse",
    LogType: "None"
  };

  tirada() {
    console.log("tirada");

    const creds = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "us-east-2:ecf243b5-aa65-4020-9e57-a1b6f2d5746d"
    });

    AWS.config.update({
      region: "us-east-2",
      apiVersion: "2015-03-31",
      credentials: creds
    });

    lambda = new AWS.Lambda({
      region: "us-east-2",
      apiVersion: "2015-03-31"
    });
    return lambda
      .invoke(this.pullParams, function(err, data) {
        console.log("ret");
        if (err) console.log(err, err.stack);
        // an error occurred
        else console.log(data); // successful response
      })
      .promise();
  }
}

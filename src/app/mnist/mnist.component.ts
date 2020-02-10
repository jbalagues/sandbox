import { Component, ViewChild, OnInit } from "@angular/core";
import { DrawableDirective } from "../directiva/drawable.directive";

import * as tf from "@tensorflow/tfjs";

@Component({
  selector: "app-mnist",
  templateUrl: "./mnist.component.html",
  styleUrls: ["./mnist.component.css"]
})
/*
export const handler = async (event: any = {}): Promise<any> => {
  console.log('Hello World!');
  const response = JSON.stringify(event, null, 2);
  return response;
}*/
export class MnistComponent implements OnInit {
  //linearModel: tf.Sequential;
  prediction: any;
  predictedNumber: string;
  predictions: any;

  model: tf.Model;
  //predictions: any;

  @ViewChild(DrawableDirective) canvas;

  ngOnInit() {
    this.loadModel();
  }

  //// LOAD PRETRAINED KERAS MODEL ////

  async loadModel() {
    this.model = await tf.loadLayersModel("../../assets/mnist/model.json");
  }

  async predict(imageData: ImageData) {
    const pred = await tf.tidy(() => {
      // Convert the canvas pixels to
      //let img = tf.fromPixels(imageData, 1);
      let img = tf.browser.fromPixels(imageData, 1);

      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, "float32");

      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());

      for (let i = 0; i < this.predictions.length; i++) {
        if (this.predictions[i] == "1") {
          this.predictedNumber = i.toString();
        }
      }
      if (this.predictedNumber == "") {
        this.predictedNumber = ":(";
      }
    });
  }

  async predict2(imageData: ImageData) {
    const pred = await tf.tidy(() => {
      // Convert the canvas pixels to
      let img = tf.browser.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, "float32");

      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());

      for (let i = 0; i < this.predictions.length; i++) {
        if (this.predictions[i] == "1") {
          this.predictedNumber = i.toString();
        }
      }
      if (this.predictedNumber == "") {
        this.predictedNumber = ":(";
      }
    });
  }

  clear() {
    this.predictedNumber = "";
  }
}

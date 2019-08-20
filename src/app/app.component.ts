import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Jaumne";

  ngOnInit() {
    // Menu-toggle button
    $(document).ready(function() {
      $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
      });
    });

    // Scrolling Effect
    $(window).on("scroll", function() {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });
  }
}

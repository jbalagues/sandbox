import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}

import { Component, OnInit } from "@angular/core";
import * as emailjs from "emailjs-com";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  ngOnInit() {}

  nombre: string = "";
  asunto: string = "";
  email: string = "";
  mensaje: string = "";

  doTextareaValueChange(ev) {
    try {
      this.mensaje = ev.target.value;
    } catch (e) {
      console.info("could not set textarea-value");
    }
  }

  enviar() {
    console.log("enviar");

    console.log("nombre = " + this.nombre);
    console.log("email = " + this.email);
    console.log("asunto = " + this.asunto);
    console.log("mensaje = " + this.mensaje);

    let templateParams = {
      from_name: this.nombre + "(" + this.email + ")",
      to_name: "Jaume Balagué",
      subject: this.asunto,
      message_html: this.mensaje
    };

    emailjs
      .send(
        "gmail",
        "template_hOFvcnFc",
        templateParams,
        "user_TlVVJadF7S2hxXLWcuNCF"
      )
      .then(
        function(res) {
          console.log("I'm a toast!", "Success!");
          console.log("Mail enviado", res.status, res.text);
        },
        function(err) {
          console.log("I'm a toast!", "Success!");
          console.log(err);
        }
      );

    this.nombre = "";
    this.asunto = "";
    this.email = "";
    this.mensaje = "";
  }
}

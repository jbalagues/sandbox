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
  showDialog: boolean = false;
  resultadoMail: string = "Mail enviado correctamente !!!";

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
          //toastr.success('Mail enviado');
          console.log("Mail enviado", res.status, res.text);
          this.showDialog = true;
          this.resultadoMail = "Mail enviado correctamente !!!";
        },
        function(err) {
          //toastr.error(err);
          console.log(err);
        }
      );

    this.nombre = "";
    this.asunto = "";
    this.email = "";
    this.mensaje = "";
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

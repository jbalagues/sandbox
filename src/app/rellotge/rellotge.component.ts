import { Component, OnInit } from "@angular/core";
import { TEXTE_LLETRES } from "./constants";

@Component({
  selector: "app-rellotge",
  templateUrl: "./rellotge.component.html",
  styleUrls: ["./rellotge.component.css"]
})
export class RellotgeComponent implements OnInit {
  horaTexto: string;

  texte_lletres = TEXTE_LLETRES;

  texte: string[] = [
    "La",
    "Les",
    "Mig",
    "Un",
    "Dos",
    "Tres",
    "quart",
    "quarts",
    "i mig",
    "ben",
    "tocat",
    "tocats",
    "passat",
    "passats",
    "d'",
    "de",
    "deu",
    "una",
    "dues",
    "vuit",
    "quatre",
    "tres",
    "sis",
    "set",
    "cinc",
    "nou",
    "onze",
    "dotze",
    "en punt",
    "tocada",
    "tocades"
  ];

  texte_stils: string[];

  ngOnInit() {
    var d = new Date();
    this.horaTexto = this.calcularHora(d.getHours(), d.getMinutes());
    var i = this.texte.length;
    this.texte_stils = Array(i).fill([0]);
  }

  getClass(indice: number) {
    return "grid-item grid-item-selected";
  }
  /*
  calcularHora(hour: number, minute: number) {
    if (minute > 6) hour = hour + 1;

    if (minute === 0 || minute === 1)
      return this.get_article(hour) + " " + this.get_hour(hour) + " en punt";
    if (minute === 2 || minute === 3 || minute === 4)
      return (
        this.get_article(hour) +
        " " +
        this.get_hour(hour) +
        " " +
        this.get_tocades(hour)
      );
    if (minute === 5 || minute === 6)
      return (
        this.get_article(hour) +
        " " +
        this.get_hour(hour) +
        " ben " +
        this.get_tocades(hour)
      );
    if (minute === 7 || minute === 8)
      return "Mig quart " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 9 || minute === 10 || minute === 11)
      return "Mig quart passat " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 12 || minute === 13)
      return "Mig quart ben passat " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 14 || minute === 15 || minute === 16)
      return "Un quart " + this.get_de(hour) + this.get_hour(hour);

    if (minute === 17 || minute === 18 || minute === 19)
      return "Un quart tocat " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 20 || minute === 21)
      return "Un quart ben tocat " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 22 || minute === 23)
      return "Un quart i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 24 || minute === 25 || minute === 26)
      return "Un quart i mig passat " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 27 || minute === 28)
      return (
        "Un quart i mig ben passat " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 29 || minute === 30 || minute === 31)
      return "Dos quarts " + this.get_de(hour) + this.get_hour(hour);

    if (minute === 32 || minute === 33 || minute === 34)
      return "Dos quarts tocats " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 35 || minute === 36)
      return "Dos quarts ben tocats " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 37 || minute === 38)
      return "Dos quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 39 || minute === 40 || minute === 41)
      return (
        "Dos quarts i mig passats " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 42 || minute === 43)
      return (
        "Dos quarts i mig ben passats " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 44 || minute === 45 || minute === 46)
      return "Tres quarts " + this.get_de(hour) + this.get_hour(hour);

    if (minute === 47 || minute === 48 || minute === 49)
      return "Tres quarts tocats " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 50 || minute === 51)
      return (
        "Tres quarts ben tocats " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 52 || minute === 53)
      return "Tres quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 54 || minute === 55 || minute === 56)
      return (
        "Tres quarts i mig passats " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 57 || minute === 58)
      return (
        "Tres quarts i mig ben passats " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 59)
      return this.get_article(hour) + " " + this.get_hour(hour);

    return "no ho sé";
  }*/

  get_de(hour) {
    if (hour === 1 || hour === 13 || hour === 11 || hour === 23) return "d'";

    return "de ";
  }

  get_article(hour) {
    if (hour === 1 || hour === 13) return "La";

    return "Les";
  }

  get_tocades(hour) {
    if (hour === 1 || hour === 13) return "tocada";

    return "tocades";
  }

  get_hour(hour) {
    if (hour === 1 || hour === 13) return "una";
    if (hour === 2 || hour === 14) return "dues";
    if (hour === 3 || hour === 15) return "tres";
    if (hour === 4 || hour === 16) return "quatre";
    if (hour === 5 || hour === 17) return "cinc";
    if (hour === 6 || hour === 18) return "sis";
    if (hour === 7 || hour === 19) return "set";
    if (hour === 8 || hour === 20) return "vuit";
    if (hour === 9 || hour === 21) return "nou";
    if (hour === 10 || hour === 22) return "deu";
    if (hour === 11 || hour === 23) return "onze";
    if (hour === 12 || hour === 24 || hour === 0) return "dotze";

    return "no sé noi";
  }

  // Sistema campanar tal com està definit a la Gramàtica Essencial de la llengua catalana
  // https://geiec.iec.cat/capitol_veure.asp?id_gelc=337&capitol=28
  get_time_campanar(hour, minute) {
    if (minute > 14 || minute === 7 || minute === 8) hour = hour + 1;

    if (minute === 0)
      return this.get_article(hour) + " " + this.get_hour(hour) + " en punt";
    if (minute === 1)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i un (minut)"
      );
    if (minute === 2)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i dos (minuts)"
      );
    if (minute === 3)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i tres (minuts)"
      );
    if (minute === 4)
      return (
        this.get_article(hour) +
        " " +
        this.get_hour(hour) +
        " i quatre (minuts)"
      );
    if (minute === 5)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i cinc (minuts)"
      );
    if (minute === 6)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i sis (minuts)"
      );
    if (minute === 7)
      return "Mig quart " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 8)
      return "Mig quart " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 9)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i nou (minuts)"
      );
    if (minute === 10)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i deu (minuts)"
      );
    if (minute === 11)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i onze (minuts)"
      );
    if (minute === 12)
      return (
        this.get_article(hour) + " " + this.get_hour(hour) + " i dotze (minuts)"
      );
    if (minute === 13)
      return (
        this.get_article(hour) +
        " " +
        this.get_hour(hour) +
        " i tretze (minuts)"
      );
    if (minute === 14)
      return (
        this.get_article(hour) +
        " " +
        this.get_hour(hour) +
        " i catorze (minuts)"
      );
    if (minute === 15)
      return "Un quart " + this.get_de(hour) + this.get_hour(hour);

    if (minute === 16)
      return "Un quart i un (minut) " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 17)
      return (
        "Un quart i dos (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 18)
      return (
        "Un quart i tres (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 19)
      return (
        "Un quart i quatre (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 20)
      return (
        "Un quart i cinc (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 21)
      return (
        "Un quart i sis (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 22)
      return "Un quart i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 23)
      return "Un quart i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 24)
      return (
        "Un quart i nou (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 25)
      return (
        "Un quart i deu (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 26)
      return (
        "Un quart i onze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 27)
      return (
        "Un quart i dotze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 28)
      return (
        "Un quart i tretze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 29)
      return (
        "Un quart i catorze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 30)
      return "Dos quarts " + this.get_de(hour) + this.get_hour(hour);

    if (minute === 31)
      return (
        "Dos quarts i un (minut) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 32)
      return (
        "Dos quarts i dos (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 33)
      return (
        "Dos quarts i tres (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 34)
      return (
        "Dos quarts i quatre (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 35)
      return (
        "Dos quarts i cinc (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 36)
      return (
        "Dos quarts i sis (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 37)
      return "Dos quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 38)
      return "Dos quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 39)
      return (
        "Dos quarts i nou (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 40)
      return (
        "Dos quarts i deu (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 41)
      return (
        "Dos quarts i onze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 42)
      return (
        "Dos quarts i dotze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 43)
      return (
        "Dos quarts i tretze (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 44)
      return (
        "Dos quarts i catorze (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );

    if (minute === 45)
      return "Tres quarts " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 46)
      return (
        "Tres quarts i un (minut) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 47)
      return (
        "Tres quarts i dos (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 48)
      return (
        "Tres quarts i tres (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 49)
      return (
        "Tres quarts i quatre (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 50)
      return (
        "Tres quarts i cinc (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 51)
      return (
        "Tres quarts i sis (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 52)
      return "Tres quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 53)
      return "Tres quarts i mig " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 54)
      return (
        "Tres quarts i nou (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 55)
      return (
        "Tres quarts i deu (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 56)
      return (
        "Tres quarts i onze (minuts) " + this.get_de(hour) + this.get_hour(hour)
      );
    if (minute === 57)
      return (
        "Tres quarts i dotze (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 58)
      return (
        "Tres quarts i tretze (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );
    if (minute === 59)
      return (
        "Tres quarts i catorze (minuts) " +
        this.get_de(hour) +
        this.get_hour(hour)
      );

    return "no ho sé";
  }

  texte_campanar: string[] = [
    "La",
    "Les",

    "Un",
    "Dos",
    "Tres",
    "Mig",
    "quart",
    "quarts",
    "de",
    "d'",
    "i",

    "deu",
    "una",
    "dues",
    "dos",
    "vuit",
    "tretze",
    "quatre",
    "tres",
    "sis",
    "set",
    "cinc",
    "catorze",
    "nou",
    "onze",
    "dotze",

    "mig",
    "minut",
    "minuts",

    "i",
    "en",
    "punt",
    "de",
    "d'",

    "deu",
    "una",
    "dos",
    "dues",
    "vuit",
    "tretze",
    "quatre",
    "tres",
    "sis",
    "set",
    "cinc",
    "catorze",
    "nou",
    "onze",
    "dotze"
  ];
}

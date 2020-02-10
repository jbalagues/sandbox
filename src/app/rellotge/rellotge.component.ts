import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rellotge",
  templateUrl: "./rellotge.component.html",
  styleUrls: ["./rellotge.component.css"]
})
export class RellotgeComponent implements OnInit {
  horaTexto: string;

  ngOnInit() {
    var d = new Date();

    this.horaTexto = this.calcularHora(d.getHours(), d.getMinutes());
  }

  calcularHora(hour, minute) {
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
  }

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
}

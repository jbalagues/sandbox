import { Component, OnInit } from "@angular/core";
import {
  TEXTE_LLETRES,
  UN_Q,
  LES,
  LA,
  DOS_Q,
  TRES_Q,
  QUART,
  QUARTS,
  QUART_I,
  DE,
  DE_APOS,
  UNA_H,
  UN_H,
  VUIT_H,
  TRETZE_H,
  QUATRE_H,
  TRES_H,
  SIS_H,
  SET_H,
  CINC_H,
  CATORZE_H,
  NOU_H,
  ONZE_H,
  DOTZE_H,
  DUES_H,
  DEU_H,
  DOS_H,
  I,
  EN,
  PUNT,
  DE_M,
  D_M,
  UNA_M,
  VUIT_M,
  UN_M,
  TRETZE_M,
  QUATRE_M,
  TRES_M,
  SIS_M,
  SET_M,
  CINC_M,
  CATORZE_M,
  DOS_M,
  NOU_M,
  DOTZE_M,
  ONZE_M,
  DUES_M,
  DEU_M
} from "./constants";

@Component({
  selector: "app-rellotge",
  templateUrl: "./rellotge.component.html",
  styleUrls: ["./rellotge.component.css"]
})
export class RellotgeComponent implements OnInit {
  horaTexto: string;
  hora: number;
  minut: number;
  texte_lletres = TEXTE_LLETRES;

  //texte_stils: string[];
  lletres: number[];

  ngOnInit() {
    var d = new Date();
    this.hora = d.getHours();
    this.minut = d.getMinutes();
    //this.horaTexto = this.get_time_campanar(this.hora, this.minut);
    this.actualitzarHora();

    /*for (let i in this.texte_lletres) {
      this.texte_stils[i]="grid-item";
    }*/

    //var i = this.texte.length;
    //this.texte_stils = Array(i).fill([0]);
  }

  getClass(indice: number) {
    //console.log(this.lletres);
    // return "grid-item grid-item-selected";
    // if(indice in this.lletres) return true;
    //if (this.hora === 18) return true;

    if (this.lletres.includes(indice)) return true;
    return false;
  }

  onChangeHora(event: any) {
    this.hora = +event.target.value;
    //this.minut = this.hora;
    this.actualitzarHora();
  }

  onChangeMinut(event: any) {
    this.minut = +event.target.value;
    //this.minut = this.hora;
    this.actualitzarHora();
  }

  actualitzarHora() {
    this.horaTexto = this.get_time_campanar(this.hora, this.minut);
    this.lletres = this.get_word_time_campanar(this.hora, this.minut);

    if (3 in this.lletres) console.log(this.lletres + "-->a");
    /*for (let i of this.lletres) {
      console.log(i); // "4", "5", "6"
    }*/
  }

  get_word_de(hour) {
    if (hour === 1 || hour === 13 || hour === 11 || hour === 23) return DE_APOS;

    return DE;
  }

  get_word_de_quart(hour) {
    if (hour === 1 || hour === 13 || hour === 11 || hour === 23) return D_M;

    return DE_M;
  }

  get_word_article(hour) {
    if (hour === 1 || hour === 13) return LA;

    return LES;
  }

  get_word_hour(hour: number) {
    //console.log(hour === 13);
    if (hour === 1 || hour === 13) return UNA_H;
    if (hour === 2 || hour === 14) return DUES_H;
    if (hour === 3 || hour === 15) return TRES_H;
    if (hour === 4 || hour === 16) return QUATRE_H;
    if (hour === 5 || hour === 17) return CINC_H;
    if (hour === 6 || hour === 18) return SIS_H;
    if (hour === 7 || hour === 19) return SET_H;
    if (hour === 8 || hour === 20) return VUIT_H;
    if (hour === 9 || hour === 21) return NOU_H;
    if (hour === 10 || hour === 22) return DEU_H;
    if (hour === 11 || hour === 23) return ONZE_H;
    if (hour === 12 || hour === 24 || hour === 0) return DOTZE_H;
    //return "no sé noi";
  }

  get_word_hour_quart(hour: number) {
    console.log(hour === 13);
    if (hour === 1 || hour === 13) return UNA_M;
    if (hour === 2 || hour === 14) return DUES_M;
    if (hour === 3 || hour === 15) return TRES_M;
    if (hour === 4 || hour === 16) return QUATRE_M;
    if (hour === 5 || hour === 17) return CINC_M;
    if (hour === 6 || hour === 18) return SIS_M;
    if (hour === 7 || hour === 19) return SET_M;
    if (hour === 8 || hour === 20) return VUIT_M;
    if (hour === 9 || hour === 21) return NOU_M;
    if (hour === 10 || hour === 22) return DEU_M;
    if (hour === 11 || hour === 23) return ONZE_M;
    if (hour === 12 || hour === 24 || hour === 0) return DOTZE_M;
    //return "no sé noi";
  }

  get_word_time_campanar(hour: number, minute: number) {
    //console.log(this.hora + ":" + this.minut);
    if (minute > 14 || minute === 7 || minute === 8) hour = hour + 1;

    if (minute === 0)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(EN)
        .concat(PUNT);
    if (minute === 1)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(UN_M);
    if (minute === 2)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(DOS_M);
    if (minute === 3)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(TRES_M);
    if (minute === 4)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(QUATRE_M);

    if (minute === 5)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(CINC_M);
    if (minute === 6)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(SIS_M);
    if (minute === 7)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(SET_M);
    if (minute === 8)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(VUIT_M);
    if (minute === 9)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(NOU_M);
    if (minute === 10)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(DEU_M);
    if (minute === 11)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(ONZE_M);
    if (minute === 12)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(DOTZE_M);
    if (minute === 13)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(TRETZE_M);
    if (minute === 14)
      return this.get_word_article(hour)
        .concat(this.get_word_hour(hour))
        .concat(I)
        .concat(CATORZE_M);

    if (minute === 15)
      return UN_Q.concat(QUART)
        .concat(this.get_word_de(hour))
        .concat(this.get_word_hour(hour));

    if (minute === 16)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(UN_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    //  return "Un quart i un (minut) " + this.get_de(hour) + this.get_hour(hour);
    if (minute === 17)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(DOS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 18)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(TRES_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 19)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(QUATRE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 20)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(CINC_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 21)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(SIS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 22)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(SET_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 23)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(VUIT_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 24)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(NOU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 25)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(DEU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 26)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(ONZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 27)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(DOTZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 28)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(TRETZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 29)
      return UN_Q.concat(QUART)
        .concat(QUART_I)
        .concat(CATORZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 30)
      return DOS_Q.concat(QUARTS)
        .concat(this.get_word_de(hour))
        .concat(this.get_word_hour(hour));

    if (minute === 31)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(UN_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 32)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DOS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 33)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(TRES_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 34)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(QUATRE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 35)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(CINC_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 36)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(SIS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 37)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(SET_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 38)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(VUIT_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 39)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(NOU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 40)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DEU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 41)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(ONZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 42)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DOTZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 43)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(TRETZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 44)
      return DOS_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(CATORZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));

    if (minute === 45)
      return TRES_Q.concat(QUARTS)
        .concat(this.get_word_de(hour))
        .concat(this.get_word_hour(hour));
    if (minute === 46)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(UN_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 47)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DOS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 48)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(TRES_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 49)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(QUATRE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 50)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(CINC_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 51)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(SIS_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 52)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(SET_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 53)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(VUIT_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 54)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(NOU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 55)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DEU_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 56)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(ONZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 57)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(DOTZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 58)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(TRETZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));
    if (minute === 59)
      return TRES_Q.concat(QUARTS)
        .concat(QUART_I)
        .concat(CATORZE_H)
        .concat(this.get_word_de_quart(hour))
        .concat(this.get_word_hour_quart(hour));

    //return "no ho sé";
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

  get_hour(hour: number) {
    console.log(hour === 13);
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
  get_time_campanar(hour: number, minute: number) {
    console.log(this.hora + ":" + this.minut);
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

  /*
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
}*/
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
}

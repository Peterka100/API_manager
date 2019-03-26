import { Component, OnInit } from '@angular/core';
import { ENVIROMENTS} from "./enviroments";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  pocetProstredi = ENVIROMENTS.length;
  prostredi = ENVIROMENTS;
  dropdown;
  dropdowns = [] ;
  hodnotaNaDropdown = 'Prostředí';
  hodnotaEntity = 'Entita';
  hodnotaCiloveProstredi = 'Prostředí';
  hodnotaEntitaProstredi = 'Zvolte hodnotu';

constructor(private http: HttpClient, config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }

  ngOnInit(){
    this.vypisProstredi();
  }


  vypisProstredi() {
    let i;
    for (i = 0; i < this.pocetProstredi; i++) {
      this.dropdowns.push(this.prostredi[i].name);
      // console.log(this.dropdowns);
    }
  }

  ZmenaHodnoty(novaHodnotaNaDropdown: string) {
    this.hodnotaNaDropdown = novaHodnotaNaDropdown;
  }

  ZmenaEntity(novaHodnotaEntity: string) {
    this.hodnotaEntity = novaHodnotaEntity;
  }

  ZmenaCilovehoProstredi(novaHodnotaCilovehoProstredi: string) {
    this.hodnotaCiloveProstredi = novaHodnotaCilovehoProstredi;
  }


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AyaService } from '../services/aya.service';

@Component({
  selector: 'app-soura',
  templateUrl: './soura.component.html',
  styleUrls: ['./soura.component.css']
})
export class SouraComponent implements OnInit {
  oneSoura:string;
  interpretation:string;
  idAya:number;
  constructor(private ayaService:AyaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
        // on recupère le id envoyé dans l'url
    const id = this.route.snapshot.params['id'];
        // on recupère le idSoura envoyé dans l'url
    const idSoura = this.route.snapshot.params['idSoura'];
    this.oneSoura = this.ayaService.getSouraById(+id, +idSoura).texte1
    this.interpretation = this.ayaService.getSouraById(+id, +idSoura).texte3
    this.idAya=id;
    
  }

}

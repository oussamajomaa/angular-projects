import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AyaService } from '../services/aya.service';

@Component({
  selector: 'app-one-aya',
  templateUrl: './one-aya.component.html',
  styleUrls: ['./one-aya.component.css']
})
export class OneAyaComponent implements OnInit {
  oneAya:any;
  constructor(private aya:AyaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // on recupère le id envoyé dans l'url
    const id = this.route.snapshot.params['id'];
    // on ajoute le plus devant id car il est de type nombre
    this.oneAya = this.aya.getAyaById(+id);

    
  }

}

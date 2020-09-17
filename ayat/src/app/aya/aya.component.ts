import { Component, OnInit } from '@angular/core';
import { AyaService } from '../services/aya.service';

@Component({
  selector: 'app-aya',
  templateUrl: './aya.component.html',
  styleUrls: ['./aya.component.css']
})
export class AyaComponent implements OnInit {

  aya_list = [];
  soura: {};

  constructor(private ayaService: AyaService) {
    this.aya_list = this.ayaService.aya;
  }

  ngOnInit(): void {
  }

}

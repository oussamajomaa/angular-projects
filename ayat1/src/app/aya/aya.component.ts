import { Component } from '@angular/core';
import { AyaService } from '../services/aya.service';

@Component({
  selector: 'app-aya',
  templateUrl: './aya.component.html',
  styleUrls: ['./aya.component.css']
})
export class AyaComponent{

  aya_list = [];
  
  constructor(private ayaService: AyaService) {
    this.aya_list = this.ayaService.aya;
  }

  ngOnInit(): void {
  }
  

}

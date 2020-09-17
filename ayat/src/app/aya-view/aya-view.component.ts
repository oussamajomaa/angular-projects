import { Component, Input, OnInit } from '@angular/core';
import { AyaService } from '../services/aya.service';

@Component({
  selector: 'app-aya-view',
  templateUrl: './aya-view.component.html',
  styleUrls: ['./aya-view.component.css']
})
export class AyaViewComponent implements OnInit {
  @Input() tabou:string;
  @Input() numero:number;
  @Input() id:number;
  @Input() idSoura:number;

  soura:any;
  isClicked=false;
  
  constructor(private ayaService:AyaService) {
   }

  ngOnInit(): void {
  }
  
  onButton() {
    this.soura = this.ayaService.onGetOne(this.numero)
    
    if (this.isClicked===true){

      this.isClicked=false;
    }else{
      this.isClicked = true;
    }
    
  }
}

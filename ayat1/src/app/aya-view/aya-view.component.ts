import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aya-view',
  templateUrl: './aya-view.component.html',
  styleUrls: ['./aya-view.component.css']
})
export class AyaViewComponent implements OnInit {
  @Input() tabou:string;
  @Input() id:number;

  constructor() {
   }

  ngOnInit(): void {

    
  }

}

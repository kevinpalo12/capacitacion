import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-region',
  templateUrl: './lista-region.component.html',
  styleUrls: ['./lista-region.component.scss']
})
export class ListaRegionComponent implements OnInit {

  region: string;

  constructor(private route: ActivatedRoute) {
    this.region = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.region = params.get('region')||""
      console.log(this.region)
    })
  }

}

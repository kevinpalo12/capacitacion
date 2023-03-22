import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regiones: any[]

  constructor(private pokemonService: PokemonService,
    private router: Router) {
    this.regiones = []
  }

  ngOnInit(): void {
    this.pokemonService.getRegions().subscribe(
      res => {
        let regiones: any = res;
        this.regiones = regiones['results'];
      }
    )
  }

  enrutar(region: string) {
    let numero = region.split("/")[6];


    this.router.navigate(['pokedex/' + numero]);
  }

}

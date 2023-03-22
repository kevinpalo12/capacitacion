import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-region',
  templateUrl: './lista-region.component.html',
  styleUrls: ['./lista-region.component.scss']
})
export class ListaRegionComponent implements OnInit {

  region: string;
  pokemones: any[];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.region = "";
    this.pokemones = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.region = params.get('region') || ""
      this.getInfo(this.region)
    })
  }


  getInfo(region: string) {
    this.pokemonService.getInfoRegion(region).subscribe(
      (res: any) => {
        this.getPokemons(res['pokedexes'][0]['url'])
      }
    )
  }

  getPokemons(url: string) {
    this.pokemonService.getPokemons(url).subscribe(
      (res: any) => {
        this.pokemones = res['pokemon_entries'];
      }
    )
  }
}

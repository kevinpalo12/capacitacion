import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getRegions() {
    return this.httpClient.get("https://pokeapi.co/api/v2/region/");
  }

  public getInfoRegion(numero: string) {
    return this.httpClient.get("https://pokeapi.co/api/v2/region/" + numero)
  }

  public getPokemons(url:string){
    return this.httpClient.get(url);
  }
}

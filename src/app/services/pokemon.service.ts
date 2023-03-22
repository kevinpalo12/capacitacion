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
}

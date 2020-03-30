import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  //styleUrls: ['./heros.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Heros = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}

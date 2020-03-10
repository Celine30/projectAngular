import { Component, OnInit } from '@angular/core';
import { Cocktail} from '../cocktail'

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail =  new Cocktail(
    'Mojito', 
    "https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg",
    'Oh le beau mojito ! Ce cocktail hyper frais et savoureux fait toujours l\'unanimité à l\'heure de l\'apéritif. Du rhum blanc, de la menthe fraîche, du jus de citron, du sucre roux, de la glace pilée... Un vrai bonheur et un coup de fraîcheur qui sent bon l\'été, les vacances, et qui vous emmène illico à Cuba ! Alors testez cette super recette, régalez-vous, et dansez la salsa, vous ne le regretterez pas, et vos invités non plus ;)'
    );

  constructor() { }

  ngOnInit(): void {
  }

}

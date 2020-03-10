import { Component, OnInit } from '@angular/core';
import { Cocktail} from '../cocktail'

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {

  public cocktails : Cocktail[] = [
    new Cocktail(
      'Mojito', 
      "https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg",
      'Oh le beau mojito ! Ce cocktail hyper frais et savoureux fait toujours l\'unanimité à l\'heure de l\'apéritif. Du rhum blanc, de la menthe fraîche, du jus de citron, du sucre roux, de la glace pilée... Un vrai bonheur et un coup de fraîcheur qui sent bon l\'été, les vacances, et qui vous emmène illico à Cuba ! Alors testez cette super recette, régalez-vous, et dansez la salsa, vous ne le regretterez pas, et vos invités non plus ;)'
      ),

      
    new Cocktail('Margarita', 'https://static.cuisineaz.com/240x192/i15538-margarita.jpg', 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila '),
    new Cocktail('Sour', 'https://static.cuisineaz.com/240x192/i146528-pisco-sour.jpeg', 'Voilà un cocktail bien étrange ! Sa couleur opaline vous intrigue. Et son nom est encore plus insolite que son allure ! Le cocktail au pisco vous fait donc face : allez-vous battre en retraite ou tenter une approche timide ? Ni l\'un ni l\'autre ! Car une fois plongé dans ce breuvage mousseux, votre palais, pas si timoré, englouti le mélange d\'un trait ! Vous découvrez bientôt le secret de cette recette de cocktail : le pisco, une eau-de-vie originaire du Chili !')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

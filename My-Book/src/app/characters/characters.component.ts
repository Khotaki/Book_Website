import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  details: string;
  image: string;
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  selectedCharacter: Character | null = null;

  characters: Character[] = [
    {
      id: 'elara',
      name: 'Elara Vance',
      role: 'The Protagonist',
      description: 'A young historian who discovers she is the key to the Hidden Realm.',
      details: 'Elara spent her life thinking she was ordinary, burying herself in books and ancient languages. When she inherits her grandmother’s estate, she finds more than just heirlooms; she finds a lineage of guardians sworn to protect the veil between worlds. Brave but unconvinced of her own power, Elara must learn to wield magic she never believed existed.',
      image: 'assets/images/elara.png'
    },
    {
      id: 'kael',
      name: 'Kaelen Thorne',
      role: 'The Shadow Walker',
      description: 'A mercenary from the Hidden Realm with a mysterious past.',
      details: 'Kaelen is a master of shadow magic, able to slip between cracks in reality. Cynical and war-weary, he initially agrees to guide Elara for coin, but finds himself drawn to her determination. His past holds a dark secret that connects him to the very enemy they fight.',
      image: 'assets/images/kaelen.png'
    },
    {
      id: 'lyra',
      name: 'Lyra of the Mist',
      role: 'The Oracle',
      description: 'An ethereal being who sees the threads of fate.',
      details: 'Lyra exists in the spaces between moments. She speaks in riddles and guides the heroes not with maps, but with whispers of what might be. Her loyalty is to the balance of the realms, making her an unpredictable ally who might sacrifice a pawn to save the board.',
      image: 'assets/images/lyra.png'
    }
  ];

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

  clearSelection() {
    this.selectedCharacter = null;
  }
}

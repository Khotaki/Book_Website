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
      id: 'Delayna',
      name: 'Delayna Valoren',
      role: 'The Fallen Heir',
      description: 'A noble daughter shaped into perfection and fractured by love.',
      details: 'Born into a house that values power over blood, Delayna grows up performing obedience while quietly yearning for freedom. Between political expectation and forbidden affection, she is forced to choose who she will become. Her journey follows the slow collapse of privilege and the painful forging of identity, as she learns that survival sometimes demands more than becoming someone unrecognizable.',
      image: 'assets/images/Delayna.png'
    },
    {
      id: 'Kyren',
      name: 'Kyren Lockwood',
      role: 'The Silent Blade',
      description: 'An orphan raised as a weapon.',
      details: 'Kyren is brought into the Valoren household after losing everything and is raised among soldiers. His life is defined by discipline, loyalty, and restraint. Over time, personal attachment complicates his sense of duty, forcing him into choices that challenge the limits of obedience and sacrifice.',
      image: 'assets/images/Kyren.png'
    },
    {
     id: 'Lucious',
      name: 'Lucious Draven',
      role: 'The Heir Tyrant',
      description: 'A calculated nobleman who values control and reputation.',
      details: 'Lucius is a man shaped by power, alliances, and certainty. To him, people are assets, affection is leverage, and resistance is an insult. His path intertwines ambition with possession, and his presence warps every space he enters. He believes order must be enforced — and that inevitability excuses cruelty.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Lord1',
      name: 'Lord Valoren',
      role: 'The Architect of Chains',
      description: 'A merchant lord focused on influence and legacy.',
      details: 'As the head of a vast economic empire, Lord Valoren engineers alliances with precision and pride. He sees the world as a board to be controlled through promises and pressure. In pursuing legacy, he fails to see the human cost of his designs — and the fractures forming within his own house.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Lady1',
      name: 'Lady Valoren',
      role: 'The Polished Warden',
      description: 'A woman who disciplines love out of existence.',
      details: 'Lady Valoren embodies the belief that emotion is weakness and reputation is survival. She molds her daughter with cold exactness, convinced that perfection is protection. Her influence is quiet but relentless, shaping a cage so elegant it almost passes for care.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Lord2',
      name: 'Lord Draven',
      role: 'The Calculated Ally',
      description: 'A respected leader who trusts systems over instincts.',
      details: 'Lord Draven believes in strategy, order, and the long game of power. He supports alliances for the greater balance of the continent, convinced that structure prevents chaos. His confidence in tradition blinds him to the darker currents growing within his own lineage.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Lady2',
      name: 'Lady Draven',
      role: 'The Silent Counterweight',
      description: 'A refined presence who chooses peace over confrontation.',
      details: 'Lady Draven values civility, restraint, and appearances. Though not cruel, she is distant, preferring harmony to conflict. Her quietness allows others to speak louder — and her absence of resistance becomes a form of permission.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Uncle',
      name: 'Cassian Draven',
      role: 'Enforcer of House Draven',
      description: 'A pragmatic noble who believes fear is the most reliable tool.',
      details: 'Cassian plays a quiet but decisive role within House Draven, as the younger brother of Lord Draven, he handles matters that require discretion and firmness. He holds a rigid view of human nature, believing people must be controlled to maintain order. During Lucius’s formative years, Cassian served as an example of authority without sentiment, reinforcing the idea that compassion weakens command and that hesitation invites failure. His influence lingers in how power is exercised and justified within the family.',
      image: 'assets/images/Lucious.png'
    },
    {
     id: 'Dareth',
      name: 'Dareth',
      role: 'The Wandering Hand',
      description: 'A traveler who teaches survival without asking for names.',
      details: 'He moves through the world with practical wisdom and few questions. He recognizes brokenness without prying and strength without demanding proof. His path briefly intersects with a fleeing soul, offering not rescue — but the tools to endure what comes next.',
      image: 'assets/images/Lucious.png'
    },
    
  ];

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

  clearSelection() {
    this.selectedCharacter = null;
  }
}

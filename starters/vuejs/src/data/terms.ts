export interface Term {
  id: string;
  word: string;
  definition: string;
  category: 'Frontend' | 'Backend' | 'Général' | 'Base de données';
}

export const glossaryTerms: Term[] = [
  {
    id: '1',
    word: 'React',
    definition: 'Une bibliothèque JavaScript pour créer des interfaces utilisateur.',
    category: 'Frontend'
  },
  {
    id: '2',
    word: 'Vue.js',
    definition: 'Un framework progressif pour construire des interfaces utilisateur.',
    category: 'Frontend'
  },
  {
    id: '3',
    word: 'Vite',
    definition: 'Un outil de construction (build tool) ultra-rapide pour le développement web moderne.',
    category: 'Général'
  },
  {
    id: '4',
    word: 'Component',
    definition: 'Une unité de code réutilisable qui gère son propre affichage et sa propre logique.',
    category: 'Général'
  },
  {
    id: '5',
    word: 'State',
    definition: 'Un objet qui contient des données pouvant changer au cours de la vie d\'un composant.',
    category: 'Général'
  },
  {
    id: '6',
    word: 'Props',
    definition: 'Arguments passés aux composants pour leur transmettre des données.',
    category: 'Général'
  },
  {
    id: '7',
    word: 'Virtual DOM',
    definition: 'Une représentation légère en mémoire du DOM réel, utilisée pour optimiser les mises à jour.',
    category: 'Frontend'
  },
  {
    id: '8',
    word: 'Node.js',
    definition: 'Un environnement d\'exécution JavaScript côté serveur.',
    category: 'Backend'
  },
  {
    id: '9',
    word: 'SQL',
    definition: 'Langage de requête structuré utilisé pour interagir avec des bases de données relationnelles.',
    category: 'Base de données'
  },
  {
    id: '10',
    word: 'API Rest',
    definition: 'Une interface de programmation respectant les contraintes de l\'architecture REST.',
    category: 'Backend'
  }
];

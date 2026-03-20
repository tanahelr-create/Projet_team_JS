# Projet Dico-IT : Le Glossaire Collaboratif de la Team_JS

**Formation :** Licence 3 - Génie Informatique  
**Objectif :** Développement d'une application Fullstack (Client-Serveur) interactive.

---

## 1. But du Projet
Le projet **Dico-IT** a pour but de créer une plateforme centralisée pour définir et partager les termes techniques de l'informatique. L'idée est de passer d'un document statique (`glossaire.md`) à une application web dynamique où chaque étudiant peut consulter et enrichir la base de connaissances.

## 2. Objectifs Pédagogiques
Ce projet vise à maîtriser les piliers du développement web moderne :
1.  **Frontend :** Gestion des composants, de l'état (State) et du cycle de vie avec React ou Vue.js.
2.  **Communication API :** Consommer des données via des requêtes asynchrones (`fetch` ou `axios`).
3.  **Backend :** Comprendre le fonctionnement d'un serveur Node.js et la création de routes API (REST).
4.  **Data :** Manipuler des données au format JSON sans base de données relationnelle complexe.

## 3. Fonctionnalités Attendues

### Niveau 1 : Consultation (Indispensable)
*   Affichage de la liste des termes sous forme de cartes (Cards).
*   Recherche textuelle dynamique sur les mots et les définitions.
*   Filtrage par catégories (Frontend, Backend, Réseaux, etc.).

### Niveau 2 : Interaction (Essentiel)
*   Formulaire d'ajout de nouveaux termes.
*   Envoi des données du formulaire vers le serveur via une requête **POST**.
*   Mise à jour automatique de l'interface après l'ajout.

### Niveau 3 : Persistance (Expert)
*   Modification du serveur pour enregistrer les nouveaux termes dans le fichier `data.json` (utilisation du module `fs`).
*   Gestion des erreurs (ex: éviter les doublons de mots).

## 4. Architecture Technique

```text
Projet_team_JS/
├── glossaire.md       # La source d'inspiration (Dictionnaire texte)
├── server/            # Le "Cerveau" (API Node.js/Express)
│   └── data.json      # La "Mémoire" (Stockage JSON)
└── starters/          # Les "Visages" (Interface Utilisateur)
    ├── react/         # Modèle React + Vite
    └── vuejs/         # Modèle Vue 3 + Vite
```

## 5. Guide de Démarrage Rapide

### Étape A : Lancer le Serveur (Backend)
```bash
cd server
npm install
node index.js
```
*Le serveur tourne sur `http://localhost:3000`*

### Étape B : Lancer l'Interface (Frontend)
```bash
cd starters/react  # ou starters/vuejs
npm install
npm run dev
```
*L'application est accessible sur l'URL indiquée par Vite.*

---
*Projet proposé dans le cadre du parcours Génie Informatique - Team_JS.*

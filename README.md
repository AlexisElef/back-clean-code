# 📘 Guide d'installation et d'exécution des tests end-to-end

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Playwright](https://playwright.dev/)

## 🏃 Exécution des tests

### 📌 Lancer le test end-to-end

```sh
npx playwright test end-to-end.test.ts
```

## 📝 Scénario Gherkin

Le test end-to-end repose sur le scénario suivant, écrit en **Gherkin** :

```gherkin
Feature: Création de fiches Leitner

  Scenario: Un utilisateur connecté crée une nouvelle fiche
    Given L'utilisateur est connecté
    When Il clique sur le bouton "Ajouter une fiche"
    And Il saisit la question "Quelle est la capitale de la France ?"
    And Il saisit la réponse "Paris"
    And Il saisit le tag "Capitale" et appuie sur Entrée
    And Il clique sur le bouton "Ajouter"
    Then La fiche apparaît dans la liste avec la catégorie 1
```


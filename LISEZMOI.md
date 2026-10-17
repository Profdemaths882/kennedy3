# Kennedy 3.0 · mise en ligne

Application de formation des enseignants du CEM J.F. Kennedy (IA et applications éducatives).
Même fonctionnement que ProfDeMaths 2.0 : une page installable sur GitHub Pages, et un script Google Apps Script
qui range les comptes et l'avancement des profs dans une feuille Google Sheets.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (pages, comptes, atelier Claude, espace formateur) |
| `data.js` | Les contenus : programme, activités, demandes types, méthode, parcours. À modifier pour faire évoluer la formation |
| `Code.gs` | Le serveur Google Apps Script |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Installation sur téléphone et fonctionnement hors connexion |
| `img/` | Captures de ProfDeMaths 2.0 (page « La méthode ProfDeMaths ») |

## Étape 1 · Le serveur Apps Script (10 minutes)

1. Ouvrir **script.google.com** › **Nouveau projet**, effacer le contenu, coller tout `Code.gs`, **Enregistrer**.
2. En haut du code, remplacer `KENNEDY2026` par votre **code formateur**.
3. Choisir la fonction **installer** › **Exécuter** › **Autoriser**
   (si Google avertit : Paramètres avancés › Accéder au projet). Le script crée lui-même
   la feuille **Kennedy 3.0 – données** dans votre Drive (onglets Profs, Avancement, Livrables, AutoEval).
4. **Déployer › Nouveau déploiement** › roue ⚙ › **Application Web** :
   - Exécuter en tant que : **Moi**
   - Qui a accès : **Tout le monde**
   - **Déployer**, puis copier l'**URL de l'application Web** (elle se termine par `/exec`).

## Étape 2 · Brancher l'application

Dans `index.html`, remplacer :

```js
const API_URL = "COLLER_ICI_L_URL_DU_SCRIPT";
```

par l'URL copiée à l'étape 1. Tant que l'URL n'est pas collée, l'application fonctionne en
« mode démonstration » : les données restent sur l'appareil.

## Étape 3 · GitHub Pages

1. Sur github.com : **New repository** › nom `kennedy3` › Public › Create.
2. **Add file › Upload files** : glisser **tout le contenu** du dossier (avec le dossier `img`) › Commit.
3. **Settings › Pages** › Branch : `main` / `(root)` › Save.
4. Après une minute, l'application est en ligne à l'adresse :
   `https://<votre-compte>.github.io/kennedy3/`

Le QR code à partager se trouve dans l'application : **Mon compte › Partager Kennedy 3.0**.

## Utilisation

- **Profs** : « Créer mon compte » (pseudo + code secret à 4 chiffres). Sur un autre appareil : « Me connecter ».
- **Formateurs** : bouton **Espace formateur** (page de connexion) avec le code formateur. Suivi en direct :
  avancement des 3 activités, missions du parcours, liens des tests de positionnement et des mini-applications,
  cahiers des charges par cellule.
- **Auto-évaluations** : dans l'application (Accueil › Auto-évaluations, ou le lien `?eval=entree`).
  Le **tableau de bord** en direct (`?tableau`) se projette avec le bouton Projeter.

## Faire évoluer la formation

Tout se modifie dans `data.js`, sans toucher au reste :
`PROGRAMME`, `ACTIVITES`, `TACHES` (les demandes types de l'atelier Claude), `METHODE`, `PARCOURS`.
Après une modification, changer la version dans `sw.js` (`const V = 'k3-…'`) pour que les téléphones
récupèrent la nouvelle version.

Après une modification de `Code.gs` : **Déployer › Gérer les déploiements › Modifier › Nouvelle version**
(l'URL ne change pas).

/* Kennedy 3.0 · contenus de la formation (programme, activités, atelier Claude, parcours) */

const FORMS = {
  entree: "https://docs.google.com/forms/d/e/1FAIpQLSe-yFV2IwTX8U1WCWdTbEVTp-Iul4fJBAOifuQoq4lnLRxGww/viewform",
  sortie: "https://docs.google.com/forms/d/e/1FAIpQLSfv2ckgr79aX32IhyOxJXPQcsNkuo3DObtW6jWwDf7MHOIjLg/viewform"
};

const CELLULES = ["A1 · Maths et sciences", "A2 · Français", "A3 · Langues vivantes", "A4 · Histoire-Géographie", "A5 · Arts, Musique, EPS", "Administration"];
const NIVEAUX = ["6e", "5e", "4e", "3e"];
const PRECEDENTE = { "6e": "CM2", "5e": "6e", "4e": "5e", "3e": "4e" };

const JOUR = { date: "2026-10-20", label: "Mardi 20 octobre 2026", lieu: "Salle multimédia du CEM J.F. Kennedy" };
const PROGRAMME = [
  { h: "09:00", f: "09:20", t: "Accueil et auto-évaluation d'entrée", d: "Scanner le QR code d'entrée, s'installer, vérifier ses comptes", go: "evaluations" },
  { h: "09:20", f: "09:45", t: "Cérémonie d'ouverture", d: "Autorités académiques, administration" },
  { h: "09:45", f: "10:15", t: "Du Google Forms à l'IA", d: "Bilan 2025-2026, les quatre objectifs, le kit de chaque prof", go: "objectifs" },
  { h: "10:15", f: "10:45", t: "Pause petit-déjeuner", pause: true },
  { h: "10:45", f: "11:15", t: "Démonstrations", d: "ProfDeMaths 2.0 et la journée d'un prof automatisé", go: "methode" },
  { h: "11:15", f: "12:15", t: "Activité 1 · Mon projet Claude", d: "Individuel", go: "act:a1" },
  { h: "12:15", f: "13:15", t: "Activité 2 · Le test de positionnement", d: "Par cellule, un prof par niveau", go: "act:a2" },
  { h: "13:15", f: "14:15", t: "Pause déjeuner", pause: true },
  { h: "14:15", f: "15:15", t: "Activité 3 · L'application de ma cellule", d: "Par cellule", go: "act:a3" },
  { h: "15:15", f: "15:45", t: "Restitution des cellules", d: "5 minutes par cellule + questions", go: "cellule" },
  { h: "15:45", f: "16:00", t: "Évaluation de sortie et clôture", d: "Scanner le QR code de sortie", go: "evaluations" }
];

const OBJECTIFS = [
  { n: 1, t: "Chaque prof automatisé", d: "Mon projet Claude connaît mon emploi du temps, mes classes, mes programmes et mes manuels. Il prépare mes cours et remplit mon cahier de textes." },
  { n: 2, t: "Des évaluations en minutes", d: "Je crée mes évaluations Google Forms à partir des compétences exigibles, je les vérifie, puis Claude écrit le script." },
  { n: 3, t: "Un test de positionnement par cellule", d: "Chaque niveau a son test, construit sur les compétences de la classe précédente, avec groupes de besoin." },
  { n: 4, t: "Une application par cellule", d: "Chaque cellule construit son application sur le modèle de ProfDeMaths 2.0, en trois mois." }
];

const KIT = [
  { k: "edt", t: "Mon emploi du temps", d: "Le même que dans PLANETE 3.0" },
  { k: "classes", t: "La liste de mes classes", d: "Niveaux, effectifs, horaires" },
  { k: "programmes", t: "Les programmes de mes classes", d: "En PDF si possible" },
  { k: "progression", t: "La progression harmonisée", d: "Celle de ma cellule" },
  { k: "competences", t: "Les compétences exigibles", d: "De mes niveaux et des classes précédentes" },
  { k: "manuels", t: "Mes manuels et documents de référence", d: "En PDF, découpés par chapitre si très lourds" },
  { k: "claude", t: "Mon compte Claude", d: "claude.ai, testé avant la formation" },
  { k: "google", t: "Mon compte Google (Gmail)", d: "Avec son mot de passe" }
];

/* ---------- les trois activités du jour ---------- */
const ACTIVITES = [
  {
    id: "a1", n: 1, titre: "Mon projet Claude", horaire: "11h15 – 12h15", duree: "60 min", modalite: "Individuel", couleur: "green",
    objectif: "J'automatise mon année : Claude connaît mon emploi du temps, mes classes, mes programmes et mes manuels.",
    livrable: "Mon projet prêt, mon agenda rempli, 3 productions vérifiées",
    etapes: [
      { t: "Se connecter à claude.ai", m: 5, d: "Avec son compte Google ou son adresse e-mail." },
      { t: "Créer le projet et y déposer le kit", m: 15, d: "Projets › Nouveau projet « Mon année 2026-2027 · [discipline] ». Ajouter dans les connaissances : emploi du temps, classes, programmes, progression, compétences, manuels.", tache: "instructions" },
      { t: "Coller les instructions du projet", m: 5, d: "Les adapter à sa discipline et à ses classes.", tache: "instructions" },
      { t: "Connecter Google Agenda", m: 10, d: "Bouton + › Connecteurs › Google Agenda, puis placer son emploi du temps.", tache: "agenda" },
      { t: "Produire pour la leçon de la semaine", m: 20, d: "Un résumé, une carte mentale et des flashcards.", tache: "resume" },
      { t: "Vérifier avec le programme et le manuel", m: 5, d: "Corriger si besoin, ranger dans Drive." }
    ]
  },
  {
    id: "a2", n: 2, titre: "Le test de positionnement de ma cellule", horaire: "12h15 – 13h15", duree: "60 min", modalite: "Par cellule, un prof par niveau", couleur: "blue",
    objectif: "Il vérifie les acquis de la classe précédente : des compétences exigibles au formulaire Google Forms, en quelques minutes.",
    livrable: "Le test de positionnement de mon niveau, validé et en ligne",
    etapes: [
      { t: "Se répartir les niveaux", m: 5, d: "Un prof par niveau (6e, 5e, 4e, 3e), en binôme si besoin." },
      { t: "Donner les compétences de la classe précédente", m: 5, d: "Dans son projet : par exemple les compétences de 5e pour le test d'entrée en 4e.", tache: "positionnement" },
      { t: "Demande 1 : obtenir les questions", m: 10, d: "20 QCM en tableau : compétence, question, 4 choix, bonne réponse, explication.", tache: "positionnement" },
      { t: "Vérifier et valider avec un collègue", m: 15, d: "Justesse, niveau, couverture des compétences. Rien ne part sans validation." },
      { t: "Demande 2 : le script, puis l'exécuter", m: 15, d: "script.google.com › Nouveau projet › coller › Enregistrer › Exécuter › Autoriser.", tache: "positionnement" },
      { t: "Tester et déposer le lien", m: 10, d: "Ouvrir le lien élève sur tablette, puis déposer le lien dans « Ma cellule »." }
    ]
  },
  {
    id: "a3", n: 3, titre: "L'application de ma cellule", horaire: "14h15 – 15h15", duree: "60 min", modalite: "Par cellule, sur le poste du référent", couleur: "gold",
    objectif: "Une première mini-application aujourd'hui, puis le cahier des charges de l'application complète, sur le modèle de ProfDeMaths 2.0.",
    livrable: "La mini-application et son lien, le cahier des charges, le référent",
    etapes: [
      { t: "Désigner le rapporteur et le référent", m: 5, d: "Le référent coche « Je suis référent » dans Mon compte." },
      { t: "Rédiger ensemble la demande", m: 5, d: "Classe, contenu, règles, « utilisable sur tablette ».", tache: "miniapp" },
      { t: "Générer la mini-application", m: 10, d: "Sur le poste du référent, une seule conversation.", tache: "miniapp" },
      { t: "Tester et demander 3 améliorations", m: 10, d: "Sur tablette, une amélioration à la fois." },
      { t: "Déposer le lien de partage", m: 5, d: "Dans « Ma cellule »." },
      { t: "Remplir le cahier des charges", m: 10, d: "Dans « Ma cellule », en s'inspirant de la méthode ProfDeMaths." },
      { t: "Demander à Claude le plan de l'application", m: 10, d: "À partir du cahier des charges.", tache: "plan-app" },
      { t: "Fixer l'échéancier", m: 5, d: "Qui fait quoi jusqu'au 3 novembre." }
    ]
  }
];

/* ---------- l'atelier Claude : demandes types et consignes ---------- */
const GROUPES = [
  { id: "annee", t: "Mon année automatisée", d: "Projet, agenda, semaine, cahier de textes" },
  { id: "cours", t: "Préparer mes cours", d: "Fiches, résumés, cartes mentales, exercices" },
  { id: "evaluer", t: "Évaluer et remédier", d: "Google Forms, positionnement, groupes de besoin" },
  { id: "creer", t: "Créer des applications", d: "Mini-applis, chapitre complet, application de cellule" }
];

const CH = {
  discipline: { label: "Discipline", ph: "Mathématiques" },
  niveau: { label: "Classe", type: "niveau" },
  lecon: { label: "Leçon ou chapitre", ph: "Le théorème de Pythagore" },
  difficulte: { label: "Difficulté observée chez les élèves", ph: "confondent hypoténuse et côtés de l'angle droit", opt: true },
  classes: { label: "Mes classes", ph: "3A, 4B, 5C" },
  debut: { label: "Du", type: "date", def: "2026-10-21" },
  fin: { label: "Au", type: "date", def: "2026-12-19" },
  date: { label: "Date", type: "date" },
  classe: { label: "Classe", ph: "3A" },
  devoirs: { label: "Travail donné", ph: "Exercices 3 et 4 de la fiche", opt: true },
  nbq: { label: "Nombre de questions", type: "number", def: 10 },
  competences: { label: "Compétences évaluées", ph: "Collez la liste des compétences exigibles", type: "area" },
  type_app: { label: "Type d'application", ph: "quiz auto-corrigé, flashcards, frise, calculateur…" },
  contenu: { label: "Contenu", ph: "Les questions, mots, dates ou barèmes à utiliser", type: "area", opt: true },
  cdc: { label: "Cahier des charges", ph: "Collez le cahier des charges de la cellule", type: "area" },
  theme: { label: "Thème", ph: "Révision du chapitre Pythagore" }
};

const TACHES = [
  /* ---- Mon année ---- */
  {
    id: "instructions", g: "annee", t: "Les instructions de mon projet", court: "Instructions du projet",
    d: "Le texte qui dit à Claude qui vous êtes et comment utiliser vos documents. À coller une seule fois.",
    besoin: "Un projet Claude (gratuit : jusqu'à 5 projets)",
    champs: ["discipline", "classes"],
    prompts: v => [{ titre: "Instructions à coller dans le projet", texte:
`Je suis professeur de ${v.discipline} au CEM J.F. Kennedy (Dakar, IEF de Dakar Plateau), en ${v.classes}.
Mon emploi du temps, la liste de mes classes, mes programmes, la progression harmonisée de ma cellule, les compétences exigibles et mes manuels sont dans les connaissances de ce projet.

Règles :
- Appuie-toi toujours sur ces documents et suis la progression harmonisée.
- Rédige en français simple, avec des exemples du contexte sénégalais.
- Pour chaque production, indique la compétence visée et la page du manuel utilisée.
- Quand je dis « J'ai terminé mon cours de… », prépare l'entrée du cahier de textes : classe, date, contenu de la séance, travail à faire.
- Quand je demande une évaluation, propose d'abord les questions en tableau ; n'écris le script Google Apps Script qu'après ma validation.` }],
    etapes: ["Ouvrir claude.ai › Projets › Nouveau projet.", "Nommer le projet « Mon année 2026-2027 · " + "[discipline] ».", "Ajouter les documents du kit dans les connaissances du projet.", "Ouvrir « Instructions » et coller le texte ci-dessus.", "Toujours travailler dans ce projet : toutes les conversations y utilisent vos documents."],
    verifier: ["Claude répond « Quel chapitre cette semaine en [classe] ? » en citant la progression.", "Les documents apparaissent dans les connaissances du projet."]
  },
  {
    id: "agenda", g: "annee", t: "Mon emploi du temps dans Google Agenda", court: "Agenda",
    d: "Claude place tous vos cours du trimestre dans votre agenda.",
    besoin: "Connecteur Google Agenda (gratuit)",
    champs: ["discipline", "debut", "fin"],
    prompts: v => [{ titre: "Demande à envoyer dans le projet", texte:
`À partir de mon emploi du temps (dans les connaissances du projet), prépare dans Google Agenda un événement récurrent pour chacun de mes cours, du ${dateFr(v.debut)} au ${dateFr(v.fin)} :
- titre : « ${v.discipline} – [classe] » ;
- salle si elle est indiquée ;
- rappel 10 minutes avant.
Montre-moi d'abord la liste complète des événements dans un tableau. Ne les crée qu'après ma confirmation.` }],
    etapes: ["Dans la conversation : bouton + › Connecteurs › activer Google Agenda (une seule fois, avec votre compte Google).", "Envoyer la demande.", "Vérifier le tableau proposé, puis répondre « Oui, crée-les ».", "Claude demande votre accord avant chaque ajout : acceptez."],
    verifier: ["Les cours apparaissent dans Google Agenda, avec le bon horaire.", "Les jours fériés et congés ne sont pas remplis par erreur."]
  },
  {
    id: "semaine", g: "annee", t: "Ma semaine de cours", court: "Ma semaine",
    d: "Chaque lundi : ce que je dois faire dans chaque classe, d'après la progression.",
    besoin: "Votre projet Claude",
    champs: ["date"],
    prompts: v => [{ titre: "Demande à envoyer chaque lundi", texte:
`D'après la progression harmonisée et mon emploi du temps, que dois-je traiter cette semaine (à partir du ${dateFr(v.date) || "[date]"}) dans chacune de mes classes ?
Présente un tableau : jour, heure, classe, leçon, objectif de la séance, matériel à prévoir.
Signale les classes en retard sur la progression et propose comment rattraper.` }],
    etapes: ["Ouvrir votre projet.", "Envoyer la demande.", "Demander ensuite les fiches de cours des leçons de la semaine."],
    verifier: ["Les leçons correspondent bien à la progression harmonisée."]
  },
  {
    id: "planete", g: "annee", t: "Mon cahier de textes dans PLANETE 3.0", court: "Cahier de textes",
    d: "Après le cours, une phrase : Claude prépare l'entrée et la remplit dans PLANETE 3.0, vous validez.",
    besoin: "Extension Claude pour Chrome (offres payantes) · vous vous connectez vous-même à PLANETE 3.0",
    champs: ["classe", "date", "lecon", "devoirs"],
    prompts: v => [{ titre: "Après le cours", texte:
`J'ai terminé mon cours de ${v.classe} du ${dateFr(v.date) || "[date]"} sur ${v.lecon}.${v.devoirs ? " Travail donné : " + v.devoirs + "." : ""}
1. Prépare l'entrée du cahier de textes : classe, date, horaire (d'après mon emploi du temps), titre de la séance, contenu (3 lignes maximum), travail à faire.
2. Quand je te le confirme, ouvre PLANETE 3.0 dans l'onglet où je suis connecté et remplis le formulaire du cahier de textes avec ces informations, sans valider : je relirai et validerai moi-même.` }],
    etapes: ["Dans Chrome, se connecter soi-même à PLANETE 3.0 (ne jamais donner son mot de passe).", "Ouvrir l'extension Claude dans le panneau latéral.", "Envoyer la demande, relire l'entrée proposée, confirmer.", "Claude remplit le formulaire : relire chaque champ, puis valider vous-même."],
    verifier: ["Classe, date et horaire sont justes.", "C'est vous qui cliquez sur « Valider »."]
  },
  /* ---- Préparer mes cours ---- */
  {
    id: "fiche", g: "cours", t: "Une fiche de cours", court: "Fiche de cours",
    d: "Une leçon rédigée comme dans ProfDeMaths 2.0 : avant de commencer, définitions, exemples corrigés, à retenir.",
    besoin: "Votre projet Claude",
    champs: ["discipline", "niveau", "lecon", "difficulte"],
    prompts: v => [{ titre: "Demande", texte:
`Tu es professeur de ${v.discipline} en ${v.niveau} au Sénégal. Prépare la fiche de cours « ${v.lecon} » en suivant le programme et le manuel du projet.${v.difficulte ? "\nMes élèves " + v.difficulte + "." : ""}
Structure :
1. « Avant de commencer » : ce que l'élève sait déjà et ce qu'il va apprendre (3 lignes, en le tutoyant).
2. Les notions, une par une : définition encadrée, propriété ou règle, puis un exemple corrigé pas à pas.
3. « Méthode » : comment faire, en étapes numérotées.
4. « À retenir » : 5 points maximum.
5. Trois exercices d'application, du plus simple au plus difficile, avec le corrigé détaillé à la fin.
Vocabulaire simple, exemples tirés de la vie au Sénégal. Indique la compétence visée et la page du manuel.` }],
    etapes: ["Envoyer la demande dans votre projet.", "Ajuster : « plus court », « plus simple », « ajoute un exemple ».", "Demander une version imprimable (document) si besoin."],
    verifier: ["Contenu conforme au programme et au manuel.", "Corrigés justes, calculs vérifiés."]
  },
  {
    id: "resume", g: "cours", t: "Résumé, carte mentale et flashcards", court: "Résumé et carte mentale",
    d: "Trois supports de révision pour la même leçon.",
    besoin: "Votre projet Claude",
    champs: ["niveau", "lecon"],
    prompts: v => [
      { titre: "1 · Résumé et carte mentale", texte:
`Pour la leçon « ${v.lecon} » en ${v.niveau}, appuie-toi sur le manuel du projet :
1. Un résumé de 10 lignes maximum, pour un élève.
2. Une carte mentale : la notion au centre et 4 à 6 branches (définitions, propriétés, méthodes, exemples, pièges). Affiche-la sous forme visuelle.` },
      { titre: "2 · Flashcards", texte:
`Crée 15 flashcards sur « ${v.lecon} » (${v.niveau}) sous forme d'application interactive : la question au recto, la réponse au verso en touchant la carte, un bouton « Je savais / À revoir », et un score à la fin. Utilisable sur téléphone.` }
    ],
    etapes: ["Envoyer la demande 1, vérifier, puis la demande 2.", "Partager le lien des flashcards avec les élèves si besoin."],
    verifier: ["Aucune erreur de contenu.", "Les flashcards s'ouvrent sur téléphone."]
  },
  {
    id: "exercices", g: "cours", t: "Des exercices corrigés pas à pas", court: "Exercices corrigés",
    d: "Une série graduée avec corrections rédigées, comme l'onglet « S'entraîner ».",
    besoin: "Votre projet Claude",
    champs: ["discipline", "niveau", "lecon"],
    prompts: v => [{ titre: "Demande", texte:
`Prépare une série d'exercices sur « ${v.lecon} » en ${v.niveau} (${v.discipline}) :
- 3 exercices de niveau 1 (application directe), 3 de niveau 2, 2 de niveau 3 (problème en contexte sénégalais) ;
- pour chaque exercice : la compétence visée, l'énoncé, puis une correction rédigée pas à pas, avec les justifications ;
- à la fin, les erreurs fréquentes et comment les éviter.` }],
    etapes: ["Envoyer la demande.", "Demander des variantes : « 3 autres exercices du même type avec d'autres valeurs »."],
    verifier: ["Corrections justes et complètes."]
  },
  {
    id: "affiche", g: "cours", t: "Une affiche de révision", court: "Affiche",
    d: "Une affiche claire pour la classe, à imprimer ou à ouvrir dans Canva.",
    besoin: "Votre projet Claude · connecteur Canva facultatif",
    champs: ["niveau", "theme"],
    prompts: v => [{ titre: "Demande", texte:
`Crée une affiche de révision A4 sur « ${v.theme} » pour des élèves de ${v.niveau} : un titre, 4 encadrés (définition, propriété, méthode, exemple), des couleurs sobres et lisibles de loin. Donne-la en format prêt à imprimer.` }],
    etapes: ["Envoyer la demande.", "Avec le connecteur Canva : « Crée cette affiche dans Canva »."],
    verifier: ["Lisible à 3 mètres.", "Aucune faute."]
  },
  /* ---- Évaluer ---- */
  {
    id: "forms", g: "evaluer", t: "Une évaluation Google Forms", court: "Évaluation Forms",
    d: "De la compétence au formulaire auto-corrigé, en deux demandes et une validation.",
    besoin: "Votre projet Claude · compte Google",
    champs: ["discipline", "niveau", "lecon", "nbq", "competences"],
    prompts: v => [
      { titre: "Demande 1 · les questions", texte:
`Évaluation de ${v.discipline} en ${v.niveau} sur « ${v.lecon} ».
Compétences évaluées :
${v.competences}
Propose ${v.nbq} questions à choix multiple, en tableau : compétence, question, 4 choix, bonne réponse, explication courte. Niveau progressif. N'écris pas encore de script.` },
      { titre: "Demande 2 · après votre validation", texte:
`Les questions sont validées. Écris le script Google Apps Script complet qui crée ce quiz Google Forms auto-corrigé :
- 1 point par question, correction expliquée à l'élève ;
- nom, prénom et classe de l'élève demandés ;
- réponses envoyées dans une nouvelle feuille Google Sheets ;
- liens du formulaire et de la feuille affichés dans le journal d'exécution.` }
    ],
    etapes: ["Envoyer la demande 1.", "Vérifier chaque question avec un collègue ; demander les corrections nécessaires.", "Envoyer la demande 2 et copier le script.", "script.google.com › Nouveau projet › effacer › coller › Enregistrer.", "Choisir la fonction › Exécuter › Autoriser (Paramètres avancés › Accéder au projet si Google avertit).", "Copier le lien qui se termine par /viewform depuis le journal."],
    verifier: ["Le formulaire s'ouvre sur téléphone et donne la note à la fin.", "Les réponses arrivent dans la feuille Sheets."]
  },
  {
    id: "positionnement", g: "evaluer", t: "Le test de positionnement", court: "Test de positionnement",
    d: "Le test de début d'année, construit sur les compétences de la classe précédente.",
    besoin: "Votre projet Claude · compte Google",
    champs: ["discipline", "niveau", "competences"],
    prompts: v => [
      { titre: "Demande 1 · les questions", texte:
`Test de positionnement d'entrée en ${v.niveau} en ${v.discipline}. Il vérifie les acquis de la classe précédente (${PRECEDENTE[v.niveau] || "classe précédente"}).
Compétences exigibles de la classe précédente :
${v.competences}
Propose 20 questions à choix multiple, en tableau : compétence, question, 4 choix, bonne réponse, explication. Au moins 2 questions par compétence, de la plus simple à la plus exigeante. N'écris pas encore de script.` },
      { titre: "Demande 2 · après votre validation", texte:
`Les questions sont validées. Écris le script Google Apps Script qui crée ce test de positionnement Google Forms auto-corrigé : 1 point par question, nom, prénom et classe demandés, compétence indiquée sous chaque question, réponses dans une feuille Google Sheets, liens affichés dans le journal.` },
      { titre: "Demande 3 · après la passation", texte:
`Voici les résultats du test (feuille Sheets ou fichier joint). Calcule le score de chaque élève sur 20 et par compétence, puis forme trois groupes de besoin : Approfondissement (14 et plus), Consolidation (10 à 14), Remédiation (moins de 10). Pour chaque groupe, propose 3 activités adaptées et les compétences prioritaires.` }
    ],
    etapes: ["Un prof par niveau dans la cellule.", "Demande 1, puis vérification à deux.", "Demande 2, exécution dans Apps Script, test sur tablette.", "Déposer le lien dans « Ma cellule ».", "Après la passation : demande 3 pour les groupes de besoin."],
    verifier: ["Toutes les compétences de la classe précédente sont couvertes.", "Le test dure moins de 30 minutes."]
  },
  {
    id: "groupes", g: "evaluer", t: "Analyser des résultats et former des groupes", court: "Groupes de besoin",
    d: "Des notes aux groupes de besoin et à la remédiation.",
    besoin: "Votre projet Claude · fichier des résultats (CSV ou Sheets)",
    champs: ["niveau", "lecon"],
    prompts: v => [{ titre: "Demande (avec le fichier des résultats joint)", texte:
`Voici les résultats de mes élèves de ${v.niveau} pour « ${v.lecon} ».
1. Calcule la moyenne de la classe et la réussite par question et par compétence.
2. Classe les élèves en trois groupes : Approfondissement (14 et plus), Consolidation (10 à 14), Remédiation (moins de 10).
3. Pour le groupe Remédiation, propose une séance de 30 minutes ciblée sur les deux compétences les moins réussies.
Présente le tout en tableaux.` }],
    etapes: ["Télécharger les réponses (Fichier › Télécharger › CSV) ou les copier.", "Joindre le fichier dans votre projet et envoyer la demande."],
    verifier: ["Aucun nom d'élève partagé hors de votre compte.", "Les calculs correspondent à la feuille."]
  },
  /* ---- Créer ---- */
  {
    id: "miniapp", g: "creer", t: "Une mini-application pour la classe", court: "Mini-application",
    d: "Quiz, flashcards, frise, calculateur… prête à tester sur tablette.",
    besoin: "Votre projet Claude",
    champs: ["discipline", "niveau", "type_app", "contenu"],
    prompts: v => [{ titre: "Demande", texte:
`Crée une application web de ${v.type_app} pour mes élèves de ${v.niveau} en ${v.discipline}.
- Utilisable sur téléphone et tablette, en français, couleurs sobres.
- Contenu : ${v.contenu || "propose un contenu conforme au programme du projet"}.
- Score à la fin, correction expliquée pour chaque erreur, bouton « Recommencer ».` }],
    etapes: ["Envoyer la demande : l'application s'affiche dans la conversation.", "Tester sur tablette, puis demander les améliorations une par une.", "Publier ou partager pour obtenir le lien, puis le déposer dans « Ma cellule »."],
    verifier: ["Fonctionne sur téléphone.", "Contenu exact."]
  },
  {
    id: "chapitre", g: "creer", t: "Un chapitre complet, méthode ProfDeMaths", court: "Chapitre complet",
    d: "Cours, S'entraîner, Quiz, Évaluation et fiche de résultats, exactement comme ProfDeMaths 2.0.",
    besoin: "Votre projet Claude (une offre payante est conseillée pour les longues applications)",
    champs: ["discipline", "niveau", "lecon", "competences"],
    prompts: v => [{ titre: "Demande", texte:
`Crée une application web pour le chapitre « ${v.lecon} » en ${v.niveau} (${v.discipline}), sur le modèle de ProfDeMaths 2.0, à partir du programme et du manuel du projet.
Quatre onglets, dans cet ordre :
1. Cours : « Avant de commencer », puis chaque notion avec définition, propriété et exemple corrigé.
2. S'entraîner : exercices corrigés pas à pas, avec de nouvelles valeurs à chaque essai si possible.
3. Quiz : 10 questions, une compétence par question, correction expliquée ; 7/10 débloque l'évaluation.
4. Évaluation : notée sur 20, puis une fiche de résultats (élève, classe, chapitre, date, durée, note, compétences à revoir) à envoyer au professeur par WhatsApp ou capture d'écran.
Compétences : ${v.competences}
Application en une seule page, utilisable sur téléphone, en français, aux couleurs sobres.` }],
    etapes: ["Envoyer la demande dans votre projet.", "Tester chaque onglet, demander les corrections une par une.", "Faire valider le contenu par un collègue de la cellule.", "Partager le lien et le déposer dans « Ma cellule »."],
    verifier: ["Le quiz bloque bien l'évaluation sous 7/10.", "La fiche de résultats contient toutes les informations."]
  },
  {
    id: "plan-app", g: "creer", t: "Le plan de l'application de cellule", court: "Plan de l'application",
    d: "Du cahier des charges au plan des pages et à l'ordre de construction.",
    besoin: "Votre projet Claude",
    champs: ["discipline", "cdc"],
    prompts: v => [{ titre: "Demande", texte:
`Voici le cahier des charges de l'application de la cellule de ${v.discipline} du CEM Kennedy :
${v.cdc}
Propose le plan de l'application sur le modèle de ProfDeMaths 2.0 :
- les pages et ce que chacune permet de faire (élève, professeur) ;
- les données à préparer (programmes, progressions, banques de questions) ;
- l'ordre de construction des modules, avec un échéancier jusqu'à fin novembre.` }],
    etapes: ["Copier le cahier des charges depuis « Ma cellule ».", "Envoyer la demande, ajuster le plan avec la cellule."],
    verifier: ["Le plan tient en trois mois."]
  },
  {
    id: "site", g: "creer", t: "Un site pour ma classe", court: "Site de classe",
    d: "Une page avec les cours, les exercices et les liens de la classe.",
    besoin: "Votre projet Claude",
    champs: ["discipline", "niveau"],
    prompts: v => [{ titre: "Demande", texte:
`Crée un site d'une page pour ma classe de ${v.niveau} en ${v.discipline} : les chapitres de la progression du projet avec, pour chacun, un résumé, des liens vers les exercices et le quiz, et les dates des évaluations. Lisible sur téléphone.` }],
    etapes: ["Envoyer la demande, vérifier, publier et partager le lien."],
    verifier: ["Toutes les dates sont justes."]
  }
];

/* ---------- la méthode ProfDeMaths (traitement des connaissances) ---------- */
const METHODE = [
  { t: "Programme et progression", d: "Tout part des documents du projet : programme, progression harmonisée, manuel.", tache: "instructions" },
  { t: "Test de positionnement", d: "En début d'année, sur les compétences de la classe précédente. Obligatoire avant le reste.", tache: "positionnement", img: "s3_test_question" },
  { t: "Groupes de besoin", d: "Approfondissement, consolidation, remédiation, avec un plan de révision par élève.", tache: "groupes", img: "s4_groupe" },
  { t: "Cours", d: "Avant de commencer, définitions, propriétés, exemples corrigés, à retenir.", tache: "fiche", img: "s5_cours" },
  { t: "S'entraîner", d: "Exercices corrigés pas à pas, de nouvelles valeurs à chaque essai.", tache: "exercices" },
  { t: "Quiz", d: "10 questions, une compétence par question ; 7/10 débloque l'évaluation.", tache: "forms", img: "s6_quiz" },
  { t: "Évaluation et fiche de résultats", d: "Notée sur 20, la fiche part chez le prof.", tache: "chapitre", img: "s7_eval_fiche" },
  { t: "Suivi et classement", d: "Le prof suit chaque élève ; le classement n'affiche que des pseudos.", img: "s8_classement" }
];

/* ---------- formation continue : le parcours sur l'année ---------- */
const PARCOURS = [
  { id: "p0", t: "Avant le 20 octobre", missions: [
    { id: "m-comptes", t: "Créer mon compte Claude et vérifier mon compte Google" },
    { id: "m-kit", t: "Réunir mon kit en PDF", go: "kit" } ] },
  { id: "p1", t: "Jour J · 20 octobre", missions: [
    { id: "m-entree", t: "Remplir l'auto-évaluation d'entrée", go: "evaluations" },
    { id: "m-a1", t: "Terminer l'activité 1 · Mon projet Claude", go: "act:a1" },
    { id: "m-a2", t: "Terminer l'activité 2 · Le test de positionnement", go: "act:a2" },
    { id: "m-a3", t: "Terminer l'activité 3 · L'application de ma cellule", go: "act:a3" },
    { id: "m-sortie", t: "Remplir l'évaluation de sortie", go: "evaluations" } ] },
  { id: "p2", t: "Semaine 1 · 21 – 27 octobre", missions: [
    { id: "m-semaine", t: "Utiliser « Ma semaine » lundi matin", tache: "semaine" },
    { id: "m-fiches", t: "Préparer une fiche et une carte mentale par classe", tache: "fiche" },
    { id: "m-cdt", t: "Préparer mon cahier de textes avec Claude trois fois", tache: "planete" } ] },
  { id: "p3", t: "Semaines 2 et 3 · jusqu'au 10 novembre", missions: [
    { id: "m-forms", t: "Créer une évaluation Google Forms et la faire passer", tache: "forms" },
    { id: "m-passation", t: "Faire passer le test de positionnement à une classe", tache: "positionnement" },
    { id: "m-groupes", t: "Former les groupes de besoin et mener une remédiation", tache: "groupes" } ] },
  { id: "p4", t: "Novembre · version 1 de l'application", missions: [
    { id: "m-chapitre", t: "Construire un chapitre complet, méthode ProfDeMaths", tache: "chapitre" },
    { id: "m-contrib", t: "Contribuer à l'application de ma cellule", go: "cellule" },
    { id: "m-etape", t: "Présenter l'avancée au point d'étape de mi-novembre" } ] },
  { id: "p5", t: "Décembre · test pilote", missions: [
    { id: "m-pilote", t: "Tester l'application avec une classe pilote" },
    { id: "m-retours", t: "Noter les retours des élèves et corriger" } ] },
  { id: "p6", t: "Janvier 2027 · formation n°2", missions: [
    { id: "m-presente", t: "Présenter l'application de ma cellule" } ] }
];

const LIVRABLES = [
  { k: "projet", t: "Mon projet Claude", ph: "Ex. : créé, 6 documents déposés", type: "text" },
  { k: "test", t: "Lien de mon test de positionnement", ph: "https://docs.google.com/forms/…/viewform", type: "url" },
  { k: "miniapp", t: "Lien de la mini-application", ph: "https://…", type: "url" }
];

const MODULES_APP = ["Test de positionnement", "Cours rédigés", "Exercices corrigés", "Quiz auto-corrigés", "Évaluations notées sur 20", "Groupes de besoin", "Fiche de résultats", "Classement (pseudos)", "Emplois du temps", "Planification des séances", "Suivi des notes par le prof"];

const REGLES = [
  { t: "Je vérifie", d: "L'IA peut se tromper : je relis et je valide avant la classe." },
  { t: "Je protège", d: "Données fictives ou anonymisées ; pas de données d'élèves sans autorisation." },
  { t: "J'adapte", d: "Au programme, au niveau de mes élèves et au contexte sénégalais." },
  { t: "Je partage", d: "Mes réussites et mes demandes avec ma cellule." }
];

function dateFr(s) {
  if (!s) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return s;
  const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  return (+m[3]) + " " + mois[+m[2] - 1] + " " + m[1];
}

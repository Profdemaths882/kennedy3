/* Kennedy 3.0 · contenus de la formation (programme, activités, atelier Claude, parcours) */

const FORMS = {
  entree: "https://docs.google.com/forms/d/e/1FAIpQLSe-yFV2IwTX8U1WCWdTbEVTp-Iul4fJBAOifuQoq4lnLRxGww/viewform",
  sortie: "https://docs.google.com/forms/d/e/1FAIpQLSfv2ckgr79aX32IhyOxJXPQcsNkuo3DObtW6jWwDf7MHOIjLg/viewform"
};

const CELLULES = ["A1 · Maths et sciences", "A2 · Français", "A3 · Langues vivantes", "A4 · Histoire-Géographie", "A5 · Arts, Musique, EPS", "Administration"];
const NIVEAUX = ["6e", "5e", "4e", "3e"];
const PRECEDENTE = { "6e": "CM2", "5e": "6e", "4e": "5e", "3e": "4e" };

/* ---------- auto-évaluation d'entrée et de sortie (dans l'application) ---------- */
const AUTOEVAL = {
  niveaux: ["Je ne sais pas faire", "Avec beaucoup d'aide", "Avec un peu d'aide", "Seul(e)"],
  objectifs: ["Prof automatisé", "Évaluations Google Forms", "Test de positionnement", "Application de cellule"],
  competences: [
    { o: 1, t: "Écrire une demande précise à Claude (rôle, contexte, tâche, format, contraintes)", c: "Écrire une demande précise" },
    { o: 1, t: "Créer un projet Claude et y déposer mes documents", c: "Créer mon projet Claude" },
    { o: 1, t: "Connecter Google Agenda et y placer mon emploi du temps", c: "Connecter Google Agenda" },
    { o: 1, t: "Produire résumés, cartes mentales et flashcards à partir de mes programmes", c: "Résumés, cartes, flashcards" },
    { o: 1, t: "Expliquer comment automatiser le cahier de textes dans PLANETE 3.0", c: "Automatiser PLANETE 3.0" },
    { o: 2, t: "Générer des questions à partir des compétences exigibles", c: "Générer des questions" },
    { o: 2, t: "Transformer des questions validées en Google Form avec Apps Script", c: "Google Form par Apps Script" },
    { o: 3, t: "Contribuer au test de positionnement de ma cellule", c: "Test de positionnement" },
    { o: 4, t: "Créer une mini-application avec Claude (ou une carte mentale, une BD avec ChatGPT)", c: "Créer une mini-appli" },
    { o: 4, t: "Rédiger le cahier des charges d'une application", c: "Cahier des charges" }
  ],
  ia: ["Jamais", "Parfois", "Souvent"],
  projet: ["Oui", "Pas encore, j'ai besoin d'aide", "Non"]
};

const JOUR = { date: "2026-10-20", label: "Mardi 20 octobre 2026", lieu: "Salle multimédia du CEM J.F. Kennedy" };
const PROGRAMME = [
  { h: "09:00", f: "09:20", t: "Accueil et auto-évaluation d'entrée", d: "Auto-évaluation à faire de préférence avant le jour J (sinon à l'accueil), s'installer, vérifier ses comptes", go: "evaluations" },
  { h: "09:20", f: "09:45", t: "Cérémonie d'ouverture", d: "Allocution de M. l'Inspecteur d'Académie, mot du Principal" },
  { h: "09:45", f: "10:15", t: "Du Google Forms à l'IA", d: "Bilan 2025-2026, les quatre objectifs, le kit de chaque prof", go: "objectifs" },
  { h: "10:15", f: "10:45", t: "Pause petit-déjeuner", pause: true },
  { h: "10:45", f: "11:15", t: "Démonstrations", d: "ProfDeMaths 2.0 et la journée d'un prof automatisé", go: "methode" },
  { h: "11:15", f: "12:15", t: "Activité 1 · Mon projet Claude", d: "Individuel", go: "act:a1" },
  { h: "12:15", f: "13:15", t: "Activité 2 · Le test de positionnement", d: "Par cellule, un prof par niveau", go: "act:a2" },
  { h: "13:15", f: "14:15", t: "Pause déjeuner", pause: true },
  { h: "14:15", f: "15:15", t: "Activité 3 · L'application de ma cellule", d: "Par cellule · Français, Langues et HG : carte mentale et bande dessinée avec ChatGPT (Mme Diop Aminata Mbaye)", go: "act:a3" },
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
      { t: "Se connecter à claude.ai", m: 5, d: "Avec son compte Google (Gmail) : « Continuer avec Google ».", go: "claudecompte" },
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
    objectif: "Une première mini-application aujourd'hui, puis le cahier des charges de l'application complète, sur le modèle de ProfDeMaths 2.0. Cellules Français, Langues et Histoire-Géographie : la première production est une carte mentale illustrée et un cours en bande dessinée, avec ChatGPT, atelier animé par Mme Diop Aminata Mbaye.",
    livrable: "La mini-application (ou la carte mentale et la BD en Français, Langues et HG) et son lien, le cahier des charges, le référent",
    etapes: [
      { t: "Désigner le rapporteur et le référent", m: 5, d: "Le référent coche « Je suis référent » dans Mon compte." },
      { t: "Rédiger ensemble la demande", m: 5, d: "Classe, contenu, règles, « utilisable sur tablette ».", tache: "miniapp", alt: { cellules: ["A2", "A3", "A4"], tache: "carte", label: "Carte mentale avec ChatGPT" } },
      { t: "Générer la mini-application", m: 10, d: "Sur le poste du référent, une seule conversation. Français, Langues et HG (avec Mme Diop) : dans ChatGPT, la carte mentale, puis la BD (scénario, personnages, planches).", tache: "miniapp", alt: { cellules: ["A2", "A3", "A4"], tache: "bd", label: "BD avec ChatGPT" } },
      { t: "Tester et demander 3 améliorations", m: 10, d: "Sur tablette, une amélioration à la fois. Carte mentale et BD : exactitude du contenu, lisibilité des bulles, cohérence des personnages." },
      { t: "Déposer le lien de partage", m: 5, d: "Dans « Ma cellule ». Carte mentale et BD : l'image ou le lien de la présentation Google Slides." },
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
  theme: { label: "Thème", ph: "Révision du chapitre Pythagore" },
  planches: { label: "Nombre de planches", type: "number", def: 4 }
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
  {
    id: "carte", g: "cours", t: "Ma carte mentale illustrée (avec ChatGPT)", court: "Carte mentale illustrée",
    d: "Toute la leçon sur une seule image : la notion au centre, les branches en couleurs, des exemples sénégalais et une illustration de la classe. Pour les cellules Français, Langues et Histoire-Géographie.",
    besoin: "Un compte ChatGPT (chatgpt.com) · création d'images limitée sur l'offre gratuite : une conversation par cellule",
    anim: "Mme Diop Aminata Mbaye",
    outil: { url: "https://chatgpt.com/", label: "Ouvrir ChatGPT" },
    exemple: { img: "ex_carte_mentale", legende: "Exemple réalisé avec ChatGPT par Mme Diop Aminata Mbaye : « La classe des mots », 6e, CEM J.F. Kennedy." },
    champs: ["discipline", "niveau", "lecon", "contenu"],
    prompts: v => [
      { titre: "Demande 1 · le contenu de la carte", texte:
`Tu es professeur de ${v.discipline} en ${v.niveau} au CEM J.F. Kennedy (Dakar). Prépare le contenu d'une carte mentale sur « ${v.lecon} ».
${v.contenu ? "Contenu de la leçon :\n" + v.contenu + "\n" : "Je colle ci-dessous le résumé de la leçon (manuel ou cahier de textes) :\n[coller ici]\n"}
Donne, en texte seulement :
- le titre central et un sous-titre court ;
- 6 à 9 branches numérotées : pour chacune, le titre, une définition d'une ligne, 3 à 5 exemples, un exemple en phrase avec l'explication entre parenthèses ;
- un encadré « Comment reconnaître… ? » (une méthode en questions) ;
- un encadré « À retenir » (3 points) ;
- une phrase d'exemple analysée, avec des noms et des lieux sénégalais (Dakar, Mariama, Fatou…).
Contenu exact, conforme au programme sénégalais, phrases courtes. N'image rien : attends ma validation.` },
      { titre: "Demande 2 · l'image, après validation", texte:
`Le contenu est validé. Crée la carte mentale en une seule image, format paysage, très lisible :
- au centre, le titre dans un nuage, et une illustration d'une professeure sénégalaise avec ses élèves en tenue scolaire, en classe ;
- autour, les branches numérotées, chacune dans un cadre de couleur différente relié au centre, avec une petite icône ;
- les encadrés « Comment reconnaître… ? », « À retenir » et la phrase d'exemple ;
- fond blanc, style illustration éducative, texte en français grand et net, sans faute ; reprends mot pour mot le contenu validé.` }
    ],
    etapes: ["Ouvrir chatgpt.com sur le poste du référent (une conversation pour la cellule).", "Envoyer la demande 1 et vérifier le contenu avec la cellule : définitions, exemples, analyse de la phrase.", "Envoyer la demande 2.", "Relire chaque mot de l'image ; si besoin : « Corrige la branche 4 : … ».", "Télécharger l'image : à projeter, à imprimer en A3 pour l'affichage, ou à envoyer aux élèves.", "Déposer l'image ou son lien dans « Ma cellule »."],
    verifier: ["Toutes les notions de la leçon sont présentes, sans erreur.", "Aucune faute d'orthographe dans l'image (relire lettre par lettre).", "Lisible projetée au tableau et imprimée.", "Aucune photo ni nom d'élève réel."]
  },
  {
    id: "bd", g: "cours", t: "Mon cours en bande dessinée (avec ChatGPT)", court: "Cours en BD",
    d: "La leçon racontée par des personnages sénégalais, en vraies images dessinées par ChatGPT, à projeter ou à imprimer. Pour les cellules Français, Langues et Histoire-Géographie.",
    besoin: "Un compte ChatGPT (chatgpt.com) · la création d'images est limitée sur l'offre gratuite : une conversation par cellule, sur le poste du référent",
    anim: "Mme Diop Aminata Mbaye",
    outil: { url: "https://chatgpt.com/", label: "Ouvrir ChatGPT" },
    exemple: { img: "ex_bd", legende: "Exemple réalisé avec ChatGPT par Mme Diop Aminata Mbaye : « La classe des mots : qui est qui dans la phrase ? », 6e, CEM J.F. Kennedy." },
    champs: ["discipline", "niveau", "lecon", "contenu", "planches"],
    prompts: v => [
      { titre: "Demande 1 · le scénario", texte:
`Tu es scénariste de bande dessinée éducative. Transforme ma leçon de ${v.discipline} en ${v.niveau} (collège, Sénégal) sur « ${v.lecon} » en bande dessinée.
${v.contenu ? "Contenu de la leçon :\n" + v.contenu + "\n" : "Je colle ci-dessous le résumé de la leçon (manuel ou cahier de textes) :\n[coller ici]\n"}
Personnages sénégalais, toujours les mêmes :
- Awa (13 ans, curieuse, tresses, tenue scolaire bleue) et Moussa (14 ans, blagueur, maillot vert des Lions) : deux élèves du CEM ;
- Mame Diarra : la grand-mère conteuse, en boubou jaune et foulard, qui relie la leçon à la vie d'autrefois ;
- Mme Sarr : la professeure, en ensemble wax, qui reprend l'essentiel.
Décors du Sénégal adaptés à la leçon : cour de l'école, quartier de Dakar, marché, car rapide, Gorée, village du Saloum…
Découpe la leçon en ${v.planches} planches de 4 cases. Pour chaque case : le décor, l'action, les dialogues (bulles de 12 mots maximum, français correct ; un mot de wolof possible, toujours traduit).
Chaque planche fait passer une notion ; la dernière case récapitule l'essentiel.
${/histoire|géo/i.test(v.discipline) ? "Les dates, les lieux et les personnages historiques doivent être exacts ; signale toute scène inventée pour le récit." : "Les règles et les exemples de la leçon doivent être exacts ; la BD illustre, elle ne simplifie pas jusqu'à l'erreur."}
Pas de caricature, des personnages valorisants. Termine par 5 questions de compréhension avec leurs réponses.
N'image rien pour l'instant : attends ma validation du scénario.` },
      { titre: "Demande 2 · la fiche des personnages", texte:
`Le scénario est validé. Crée d'abord une image « fiche des personnages » : Awa, Moussa, Mame Diarra et Mme Sarr, debout côte à côte, de face, avec leur nom écrit dessous.
Style : bande dessinée africaine contemporaine, traits nets, couleurs vives, fond blanc. Visages et vêtements bien reconnaissables : ce sont ces personnages qui apparaîtront dans toutes les planches.` },
      { titre: "Demande 3 · une planche à la fois", texte:
`Crée maintenant la planche 1 en une seule image, format portrait : 4 cases en grille, bordures noires, avec exactement les personnages de la fiche (mêmes visages, mêmes vêtements, mêmes couleurs).
Bulles blanches et texte en français, grand et lisible, sans faute ; reprends mot pour mot les dialogues validés.
(Puis : « Planche 2 », « Planche 3 »… jusqu'à la dernière, en recopiant chaque fois cette consigne.)` }
    ],
    etapes: ["Ouvrir chatgpt.com sur le poste du référent et se connecter (une conversation pour toute la cellule).", "Envoyer la demande 1 et relire le scénario avec la cellule : contenu juste, dialogues courts, personnages respectueux. Corriger si besoin.", "Envoyer la demande 2 : garder la fiche des personnages, c'est la référence pour toute la BD.", "Envoyer la demande 3, planche par planche. Si une bulle a une faute : « Corrige le texte de la case 3 : … ».", "Télécharger chaque image, puis les rassembler dans Google Slides (ou Canva) : une planche par diapo, à projeter et à imprimer en A4.", "Déposer le lien de la présentation dans « Ma cellule »."],
    verifier: ["Chaque notion de la leçon apparaît dans une planche, sans erreur.", "Les dates, lieux et règles sont exacts.", "Aucune faute dans les bulles (les images peuvent déformer les mots : relire lettre par lettre).", "Les personnages restent les mêmes d'une planche à l'autre.", "Aucune caricature, aucune photo ni nom d'élève réel."]
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
    { id: "m-comptes", t: "Créer mon compte Claude avec Gmail (vidéo)", go: "claudecompte" },
    { id: "m-kit", t: "Réunir mon kit en PDF", go: "kit" },
    { id: "m-entree", t: "Remplir l'auto-évaluation d'entrée (avant lundi 19 octobre)", go: "evaluations" } ] },
  { id: "p1", t: "Jour J · 20 octobre", missions: [
    { id: "m-a1", t: "Terminer l'activité 1 · Mon projet Claude", go: "act:a1" },
    { id: "m-a2", t: "Terminer l'activité 2 · Le test de positionnement", go: "act:a2" },
    { id: "m-a3", t: "Terminer l'activité 3 · L'application de ma cellule", go: "act:a3" },
    { id: "m-sortie", t: "Remplir l'évaluation de sortie", go: "evaluations" } ] },
  { id: "p2", t: "Semaine 1 · 21 – 27 octobre", missions: [
    { id: "m-semaine", t: "Utiliser « Ma semaine » lundi matin", tache: "semaine" },
    { id: "m-fiches", t: "Préparer une fiche et une carte mentale par classe", tache: "fiche" },
    { id: "m-bd", t: "Français, Langues et HG : une carte mentale et une BD avec ChatGPT, projetées en classe", tache: "bd" },
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

/* ---------- travaux à déposer, corrigés automatiquement (grille sur 20) ----------
   critère « coche » : la personne coche ; critère « auto » : calculé par l'application. */
const TRAVAUX = [
  { id: "a1", t: "Mon projet Claude", act: "Activité 1", qui: "Chacun dépose son travail",
    champs: [{ k: "docs", l: "Nombre de documents déposés dans mon projet", type: "number" }],
    criteres: [
      { t: "Mon projet est créé et nommé « Mon année 2026-2027 · [discipline] »", pts: 3, conseil: "Créez le projet et nommez-le avec votre discipline." },
      { auto: "docs", t: "Les documents du kit sont dans le projet", pts: 4, conseil: "Déposez au moins 5 documents : emploi du temps, classes, programmes, progression, manuels." },
      { t: "Les instructions du projet sont collées", pts: 3, conseil: "Collez les instructions (Atelier › Les instructions de mon projet)." },
      { t: "Google Agenda est connecté et mes cours sont placés", pts: 4, conseil: "Connectez Google Agenda et demandez à Claude de placer votre emploi du temps." },
      { t: "J'ai produit un résumé, une carte mentale et des flashcards", pts: 4, conseil: "Produisez les trois supports pour la leçon de la semaine." },
      { t: "J'ai vérifié ces productions avec le programme et le manuel", pts: 2, conseil: "Relisez avec le programme et le manuel avant d'utiliser en classe." }
    ] },
  { id: "a2", t: "Le test de positionnement", act: "Activité 2", qui: "Un dépôt par niveau",
    champs: [{ k: "niveau", l: "Niveau du test", type: "niveau" }, { k: "lien", l: "Lien élève du formulaire", type: "url", ph: "https://docs.google.com/forms/…/viewform" }, { k: "nbq", l: "Nombre de questions", type: "number" }],
    criteres: [
      { auto: "lienForms", t: "Le lien du formulaire est valide", pts: 3, conseil: "Collez le lien élève du formulaire (…/viewform ou forms.gle), pas le lien de modification." },
      { auto: "nbq", t: "Assez de questions pour couvrir les compétences", pts: 3, conseil: "Visez 20 questions : au moins 2 par compétence." },
      { t: "Les questions portent sur les compétences de la classe précédente", pts: 4, conseil: "Reprenez les compétences exigibles de la classe précédente (ex. 5e pour l'entrée en 4e)." },
      { t: "Chaque question a 4 choix, une bonne réponse et une explication", pts: 3, conseil: "Complétez les choix et ajoutez une explication courte à chaque question." },
      { t: "Le quiz est auto-corrigé (points et corrigé activés)", pts: 2, conseil: "Dans le script, activez le mode quiz avec 1 point par question." },
      { t: "Un collègue a vérifié et validé les questions", pts: 3, conseil: "Faites relire par un collègue de la cellule avant de faire passer le test." },
      { t: "Testé sur téléphone ou tablette, les réponses arrivent dans Sheets", pts: 2, conseil: "Répondez une fois au test et vérifiez la feuille des réponses." }
    ] },
  { id: "a3", t: "La production de ma cellule", act: "Activité 3", qui: "Le référent dépose pour la cellule",
    champs: [{ k: "type", l: "Production", type: "choix", opts: ["Mini-application", "Carte mentale", "Bande dessinée"] }, { k: "lien", l: "Lien de partage", type: "url", ph: "https://…" }],
    criteres: [
      { auto: "lien", t: "Le lien de partage est valide", pts: 3, conseil: "Collez un lien de partage qui commence par https://." },
      { t: "Le contenu est exact et conforme au programme", pts: 4, conseil: "Relisez chaque information avec le programme et le manuel." },
      { t: "Lisible : testée sur tablette ou projetée au tableau", pts: 3, conseil: "Testez sur tablette ou au vidéoprojecteur, du fond de la salle." },
      { t: "Au moins 3 améliorations demandées à l'IA", pts: 3, conseil: "Demandez 3 améliorations, une à la fois (texte, lisibilité, exercices)." },
      { t: "Utilisable seuls par les élèves de la classe visée", pts: 3, conseil: "Simplifiez les consignes pour que l'élève avance sans aide." },
      { auto: "cdc", t: "Le cahier des charges de l'application est rempli", pts: 4, conseil: "Complétez le cahier des charges dans « Ma cellule » (pour qui, pour quoi, modules, données, échéancier)." }
    ] }
];

/* ---------- créer son compte Claude avec Gmail ---------- */
const COMPTE_CLAUDE = {
  videos: [
    { t: "Sur téléphone", url: "https://www.youtube.com/watch?v=D0w_KCltMV4" },
    { t: "Sur ordinateur", url: "https://www.youtube.com/watch?v=MfgS0wEQqTw" }
  ],
  aide: "https://support.claude.com/fr/articles/13189465-connectez-vous-a-votre-compte-claude",
  apps: [
    { k: "ios", t: "iPhone / iPad", d: "App Store", url: "https://apps.apple.com/app/claude-by-anthropic/id6473753684" },
    { k: "android", t: "Android", d: "Google Play", url: "https://play.google.com/store/apps/details?id=com.anthropic.claude" },
    { k: "win", t: "PC Windows", d: "Téléchargement direct", url: "https://claude.ai/api/desktop/win32/x64/setup/latest/redirect" },
    { k: "mac", t: "Mac", d: "Téléchargement direct", url: "https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect" }
  ],
  page: "https://claude.com/download",
  etapes: [
    "Ouvrez claude.ai dans le navigateur (ou installez l'application Claude).",
    "Touchez « Continuer avec Google ».",
    "Choisissez votre adresse Gmail, celle que vous utiliserez aussi pour Google Agenda et Google Forms.",
    "Acceptez les conditions et indiquez votre nom.",
    "C'est prêt : le compte gratuit suffit pour commencer."
  ]
};

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

/* ---------- Banque de prompts (prêts à l'emploi, personnalisés avec le profil) ----------
   Variables : {discipline} {niveaux} {classes} {etab} {appli} {prenom} {nom}  */
const BANQUE = [
  { id: 'annee', t: "1 · Mon année", d: "À coller dans votre projet Claude, dans l'ordre. Chaque demande s'appuie sur les documents déposés dans le projet (emploi du temps, programmes, progression, manuels).", p: [
    { t: "Les instructions de mon projet", q: "Une seule fois, dans « Instructions » du projet Claude", x:
`Tu es mon assistant pédagogique pour l'année scolaire 2026-2027.
Je suis professeur {de_discipline} au {etab}, en {niveaux} (classes : {classes}).

Ce que tu dois savoir :
- Mon emploi du temps, les programmes officiels, la progression harmonisée de ma cellule et mes manuels sont dans les fichiers du projet. Appuie-toi d'abord sur eux.
- Mes élèves sont des collégiens sénégalais : exemples, prénoms et situations du Sénégal, français simple et correct.
- Respecte strictement le programme et la progression harmonisée ; si une demande en sort, dis-le.
- Présente toujours : objectifs, contenu, puis ce que je dois vérifier.
- Aucune donnée personnelle d'élève : j'utiliserai des codes ou des prénoms fictifs.
- Si une information te manque, pose-moi une question au lieu d'inventer.` },
    { t: "Mon emploi du temps dans Google Agenda", q: "Connecteur Google Agenda activé", x:
`À partir de mon emploi du temps (fichier du projet), crée dans mon Google Agenda tous mes cours {de_discipline} de la semaine type, du lundi au samedi, récurrents chaque semaine jusqu'au 30 juin 2027.
Pour chaque cours : titre « {discipline} · [classe] », salle si elle est indiquée, rappel 15 minutes avant.
Avant de créer quoi que ce soit, montre-moi le tableau des créneaux que tu as lus et attends ma validation.` },
    { t: "Ma progression de l'année, semaine par semaine", q: "Début d'année ou de trimestre", x:
`À partir du programme officiel et de la progression harmonisée de la cellule (fichiers du projet), établis ma progression annuelle {de_discipline} pour la classe de [NIVEAU].
Tableau : semaine (dates), chapitre, leçons, nombre d'heures, compétences exigibles, évaluation prévue.
Tiens compte des congés scolaires 2026-2027 et des évaluations harmonisées. Signale les semaines trop chargées.` },
    { t: "La fiche de préparation d'une leçon", q: "Chaque semaine, pour chaque leçon", x:
`Prépare la fiche de leçon {de_discipline} en [NIVEAU] : « [TITRE DE LA LEÇON] » (durée : [DURÉE] min).
Plan : objectifs spécifiques (verbes d'action), prérequis, matériel, déroulement minuté (rappel, découverte, trace écrite, application, évaluation), trace écrite complète pour le cahier de l'élève, exercices d'application avec corrigé, devoir de maison.
Utilise mon manuel (fichier du projet) et des exemples du contexte sénégalais.` },
    { t: "Résumé, carte mentale et flashcards", q: "Fin de chapitre, révisions", x:
`Pour le chapitre « [CHAPITRE] » {de_discipline} en [NIVEAU] :
1. Un résumé d'une page : définitions, propriétés ou règles, méthodes, un exemple pour chaque.
2. Une carte mentale en texte (thème central, branches, sous-branches) que je pourrai dessiner ou transformer en image.
3. 15 flashcards « question / réponse » courtes, de la plus facile à la plus difficile.
Tout doit respecter le programme de [NIVEAU] ; rien hors programme.` },
    { t: "Des exercices pour les trois groupes de besoin", q: "Après un test ou une évaluation", x:
`Sur la leçon « [LEÇON] » {de_discipline} en [NIVEAU], propose trois séries d'exercices :
- Groupe 1 · Remédiation : retour aux bases, exercices guidés pas à pas.
- Groupe 2 · Application : exercices du niveau attendu.
- Groupe 3 · Approfondissement : problèmes plus ouverts, situations de la vie courante au Sénégal.
5 exercices par série, avec le corrigé détaillé à la fin.` },
    { t: "Une évaluation à partir des compétences exigibles", q: "Devoir, interrogation, évaluation du mois", x:
`Rédige une évaluation {de_discipline} en [NIVEAU] sur « [CHAPITRE(S)] », durée [DURÉE], notée sur 20.
1. Liste d'abord les compétences exigibles évaluées (programme officiel).
2. Partie I : 10 questions à choix multiples (4 propositions, une seule bonne).
3. Partie II : exercices rédigés, du plus simple au plus complexe.
4. Le barème détaillé et le corrigé complet.
Présentation au format officiel du {etab} : en-tête, classe, durée, consignes.` },
    { t: "Mon évaluation dans Google Forms (Apps Script)", q: "Après avoir validé les questions", x:
`Voici mes questions validées (ci-dessous). Écris un script Google Apps Script qui crée un Google Form en mode quiz :
- titre « {discipline} · [NIVEAU] · [TITRE] », description avec les consignes ;
- une question à choix multiples par question, la bonne réponse et les points indiqués ;
- collecte du nom de l'élève et de la classe en début de formulaire ;
- les réponses enregistrées dans une feuille Google Sheets liée.
Explique-moi en 5 étapes simples où coller le script et comment l'exécuter.

[COLLER ICI MES QUESTIONS VALIDÉES]` },
    { t: "Le test de positionnement de ma classe", q: "Début d'année, par niveau", x:
`Construis le test de positionnement {de_discipline} pour l'entrée en [NIVEAU], sur les compétences de la classe précédente qui sont indispensables cette année.
- 25 questions courtes à choix multiples, classées par compétence (indique la compétence à chaque question) ;
- la grille de lecture : 0 à 12 = Remédiation, 13 à 19 = Application, 20 à 25 = Approfondissement ;
- pour chaque compétence ratée, une activité de remédiation de 15 minutes.` },
    { t: "Analyser les notes et former les groupes", q: "Connecteur Google Drive ou fichier des notes anonymisé", x:
`Analyse le fichier des résultats de ma classe de [CLASSE] (élèves identifiés par un code, sans nom).
1. Moyenne, note la plus haute, la plus basse, nombre d'élèves sous 10.
2. Les questions ou compétences les moins réussies.
3. Trois groupes de besoin (moins de 10, de 10 à 15, 16 et plus) avec la liste des codes.
4. Un plan de remédiation de 2 semaines pour le groupe 1 (2 heures par semaine).` },
    { t: "Le cahier de textes pour PLANETE 3.0", q: "Après chaque séance · saisie assistée", x:
`Rédige l'entrée du cahier de textes de la séance {de_discipline} en [CLASSE] du [DATE] : titre de la leçon, contenu traité (3 à 5 lignes), exercices faits en classe, travail à faire pour la prochaine séance.
Style sobre et administratif, prêt à être collé dans PLANETE 3.0.
Rappel : je me connecte moi-même à PLANETE, je colle et je valide ; je ne donne jamais mon mot de passe.` },
    { t: "Une composition au format officiel", q: "Fin de semestre", x:
`Prépare le sujet de composition du [1er/2nd] semestre {de_discipline} en [NIVEAU], durée [DURÉE], sur les chapitres : [CHAPITRES].
Respecte le format des compositions de l'IA de Dakar : en-tête, parties, barème par question, total sur 20.
Donne ensuite le corrigé détaillé et le barème de correction pour harmoniser la notation entre collègues.` }
  ] },
  { id: 'appli', t: "2 · L'appli de ma cellule", d: "Sur le modèle de ProfDeMaths 2.0. Une conversation Claude par étape, dans le projet de la cellule. Claude écrit le code ; la cellule valide chaque contenu.", p: [
    { t: "Le cahier des charges", q: "Étape 1 · en cellule", x:
`Nous sommes la cellule {de_discipline} du {etab}. Nous voulons une application éducative pour nos élèves de {niveaux}, sur le modèle de ProfDeMaths 2.0.
Rédige le cahier des charges : public, objectifs pédagogiques, modules (cours, entraînement, quiz, évaluation, test de positionnement, devoirs en photo, espace professeur), contraintes (téléphone, connexion faible, gratuit, sans données personnelles inutiles), priorités et échéancier sur 3 mois.
Pose-nous d'abord 5 questions pour préciser nos besoins.` },
    { t: "La structure de l'application", q: "Étape 2", x:
`À partir du cahier des charges validé, crée la première version de l'application « {appli} » :
- une seule page HTML autonome (HTML, CSS et JavaScript dans le même fichier), installable sur téléphone (PWA) ;
- accueil, choix du niveau ({niveaux}), liste des chapitres, et pour chaque chapitre 4 étapes : Cours → S'entraîner → Quiz → Évaluation ;
- grands boutons, lisible sur petit téléphone, bouton Retour sur chaque écran ;
- couleurs sobres et le nom du {etab}.
Mets un seul chapitre d'exemple ; nous ajouterons les autres ensuite.` },
    { t: "Le cours d'un chapitre", q: "Étape 3 · pour chaque chapitre", x:
`Rédige le cours du chapitre « [CHAPITRE] » {de_discipline} en [NIVEAU] pour l'application : leçon courte en paragraphes, encadrés « Définition », « À retenir », « Méthode », un exemple corrigé après chaque notion, conforme au programme et à la progression harmonisée.
Donne le contenu au format attendu par l'application (même structure que le chapitre d'exemple) pour que je n'aie qu'à le coller.` },
    { t: "Les exercices corrigés pas à pas", q: "Étape 4", x:
`Pour le chapitre « [CHAPITRE] » en [NIVEAU], écris 10 exercices de l'étape « S'entraîner » : énoncé, aide (un indice), correction pas à pas, de difficulté croissante. Contexte sénégalais.
Ajoute-les dans l'application, au même format que le chapitre d'exemple.` },
    { t: "Le quiz qui débloque l'évaluation", q: "Étape 5", x:
`Écris le quiz du chapitre « [CHAPITRE] » en [NIVEAU] : 20 questions à choix multiples (4 propositions, une seule bonne), avec une explication courte de la bonne réponse et la compétence visée.
Dans l'application : questions et propositions mélangées à chaque essai, score affiché à la fin, l'évaluation ne se débloque qu'avec 14/20 ou plus.` },
    { t: "L'évaluation et la fiche de résultats", q: "Étape 6", x:
`Ajoute l'évaluation notée sur 20 du chapitre « [CHAPITRE] » : questions variées, correction automatique, puis une fiche de résultats à l'en-tête du {etab} (nom, classe, chapitre, note, date, compétences à revoir) que l'élève peut envoyer au professeur par WhatsApp ou en capture d'écran.` },
    { t: "Le test de positionnement et les groupes de besoin", q: "Étape 7", x:
`Ajoute dans l'application le test de positionnement de chaque niveau ({niveaux}) : 25 questions sur les compétences de l'année précédente, obligatoire avant le reste.
Après le test : groupe Remédiation (0 à 12), Application (13 à 19) ou Approfondissement (20 à 25), affiché à l'élève avec son plan de révision. Le groupe se met à jour après chaque évaluation du mois.` },
    { t: "Les comptes élèves et le suivi des résultats", q: "Étape 8 · Google Apps Script + Google Sheets", x:
`Ajoute des comptes élèves : pseudo unique + code secret à 4 chiffres (jamais stocké en clair), prénom, nom, classe.
Écris aussi le serveur en Google Apps Script relié à une feuille Google Sheets : inscription, connexion, enregistrement de chaque quiz et évaluation (date, élève, classe, chapitre, note).
Explique-moi pas à pas comment déployer le script en « Application Web » et où coller son adresse dans l'application.` },
    { t: "L'espace professeur : listes, code de classe, élèves HK", q: "Étape 9", x:
`Ajoute un espace professeur protégé : chaque professeur a son compte et ne voit que ses classes ({classes}).
- Résultats par élève et par chapitre, export pour Excel ou Sheets.
- Listes de classe imprimables avec le groupe de besoin de chaque élève.
- Un code de classe à donner en classe : sans lui, on ne peut pas s'inscrire comme élève du {etab}.
- Les élèves venant d'autres établissements sont rangés à part, en classes « HK » (6e HK à 3e HK), avec leur école d'origine.` },
    { t: "Les devoirs à rendre en photo", q: "Étape 10", x:
`Ajoute les devoirs à rendre en photo : le professeur publie un devoir (énoncé, classe, date limite, barème) ; l'élève rédige sur son cahier et envoie jusqu'à 4 photos, compressées sur le téléphone avant l'envoi.
Les photos sont rangées dans un dossier Google Drive du professeur ; il corrige dans l'application (note + commentaire) et l'élève voit sa copie corrigée.` },
    { t: "La progression harmonisée et « À retenir cette semaine »", q: "Étape 11", x:
`Ajoute la progression harmonisée {de_discipline} ({niveaux}) : pour chaque chapitre, les semaines prévues.
- Côté professeur : boutons « Commencé » / « Terminé » et une alerte « à jour / léger retard / en retard ».
- Côté élève : un encadré « À retenir cette semaine » (définitions, règles, formules du chapitre en cours) et un compte à rebours avant chaque évaluation.
Voici notre progression : [COLLER LA PROGRESSION HARMONISÉE]` },
    { t: "Mettre l'application en ligne", q: "Étape 12 · GitHub Pages", x:
`Explique-moi pas à pas, pour un débutant sur téléphone ou ordinateur, comment mettre « {appli} » en ligne gratuitement avec GitHub Pages : créer le compte, le dépôt, déposer les fichiers, activer Pages, obtenir le lien.
Puis comment l'élève l'installe sur son téléphone (« Ajouter à l'écran d'accueil »), et comment je publie une mise à jour.` },
    { t: "Corriger un problème ou ajouter une fonction", q: "À tout moment", x:
`Voici le code actuel de « {appli} » (fichier joint).
Problème constaté : [DÉCRIRE CE QUI SE PASSE, SUR QUEL ÉCRAN, SUR QUEL TÉLÉPHONE].
Ce que je voudrais : [DÉCRIRE LE RÉSULTAT ATTENDU].
Corrige sans rien casser d'autre, explique en une phrase ce que tu as changé, et rends-moi le fichier complet.` },
    { t: "La vérification avant de publier", q: "Avant chaque mise en ligne", x:
`Relis l'application « {appli} » comme un inspecteur et un élève de {niveaux} :
1. erreurs de contenu ou hors programme ;
2. fautes d'orthographe ;
3. boutons qui ne marchent pas, écrans illisibles sur petit téléphone ;
4. données personnelles inutiles.
Fais la liste par ordre de gravité, puis propose les corrections.` }
  ] }
];

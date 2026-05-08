import type { Locale } from '~/i18n/config';

const projectBodies: Record<Exclude<Locale, 'ar'>, Record<string, string>> = {
  fr: {
    'ai-content-creation': `
<h2>Contexte du projet et problématique</h2>
<p>Le monde connaît une véritable révolution dans le domaine de l’intelligence artificielle générative (Generative AI), qui ne se limite plus à la programmation ou à la résolution d’équations, mais devient aussi un outil puissant entre les mains des créateurs et des artistes. La problématique traitée par ce projet consiste à savoir comment exploiter ces outils technologiques avancés pour produire un contenu utile qui aborde des questions sociales et scolaires.</p>
<p>Le projet de création de contenu par intelligence artificielle vise à mettre en évidence l’évolution remarquable de ces outils à travers la production d’histoires, de courts métrages et de vidéos de sensibilisation. Il montre ainsi que l’intelligence artificielle peut devenir un partenaire essentiel de la création artistique et de la diffusion de la conscience numérique.</p>
<h2>Composants techniques et outils de génération</h2>
<p>Le projet s’appuie sur un ensemble d’outils et de modèles d’intelligence artificielle parmi les plus récents afin de créer un contenu complet à partir de zéro :</p>
<ul>
<li><strong>Génération de textes et de scénarios :</strong> utilisation de grands modèles de langage (LLMs) comme ChatGPT, Gemini et Grok pour imaginer des idées, des dialogues et des scénarios précis pour des histoires de sensibilisation.</li>
<li><strong>Génération et conception d’images (Text-to-Image) :</strong> rédaction de prompts professionnels pour transformer les descriptions textuelles en scènes, personnages et arrière-plans visuels de haute qualité.</li>
<li><strong>Animation et génération vidéo (Image-to-Video) :</strong> recours à des plateformes avancées d’intelligence artificielle pour animer les images fixes et leur donner une dimension cinématographique réaliste.</li>
<li><strong>Génération audio et montage :</strong> ajout d’une voix off générée automatiquement avec des voix naturelles, puis intégration des effets sonores pour produire la vidéo finale.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le processus de production suit une chaîne intégrée connue sous le nom d’AI Pipeline Workflow :</p>
<ol>
<li><strong>Brainstorming et ingénierie des prompts :</strong> le travail commence par la formulation de l’idée et l’orientation des modèles linguistiques pour écrire un scénario découpé en scènes.</li>
<li><strong>Création visuelle :</strong> une image indépendante est générée pour chaque scène à partir d’une description précise, en veillant à garder la cohérence des personnages et de l’identité visuelle.</li>
<li><strong>Animation :</strong> les images générées sont importées dans des plateformes d’animation intelligente afin de produire des mouvements fluides de caméra et de personnages.</li>
<li><strong>Montage intelligent :</strong> les séquences visuelles sont assemblées avec les voix générées par l’IA pour obtenir un film de sensibilisation prêt à être publié.</li>
</ol>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet artistique et technique contribue aux Objectifs de Développement Durable à travers :</p>
<ul>
<li><strong>Éducation de qualité :</strong> produire un contenu de sensibilisation utile qui aide à informer les élèves d’une manière visuelle, moderne et attractive.</li>
<li><strong>Industrie et innovation :</strong> intégrer les technologies créatives les plus récentes dans le milieu scolaire et développer les compétences d’avenir, notamment l’ingénierie des prompts.</li>
</ul>
<h2>Galerie des vidéos et réalisations</h2>
<p>Ce projet a permis de produire un ensemble de vidéos et d’histoires entièrement générées par intelligence artificielle. Vous pouvez découvrir les créations des deux élèves et explorer les possibilités de l’IA générative à travers notre galerie numérique :</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../ai-gallery.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🎬</span> Explorer la galerie des vidéos IA
  </a>
</div>
<h2>Équipe de travail et répartition des missions</h2>
<p>Ces créations ont été réalisées grâce à une complémentarité totale entre les deux élèves :</p>
<ul>
<li><strong>Ingénierie des prompts et écriture du scénario :</strong> assurée par l’élève Alaa Zarouq, qui s’est concentrée sur l’interaction avec les modèles linguistiques (ChatGPT, Gemini) pour rédiger des histoires utiles et concevoir les prompts nécessaires à la génération des images et des personnages.</li>
<li><strong>Conception vidéo et montage intelligent :</strong> assurée par l’élève Asmahan Zarouq, qui s’est chargée d’animer les images générées, de les transformer en séquences vidéo, de générer la voix off et de réunir tous les éléments pour obtenir un film final de qualité.</li>
</ul>`,
    'autonomous-vehicle': `
<h2>Contexte du projet et problématique</h2>
<p>Les véhicules guidés automatiquement (AGVs) constituent l’un des piliers de la logistique moderne et des usines intelligentes, car ils transportent les matériaux avec précision sans intervention humaine.</p>
<p>Ce projet traite la problématique de la navigation autonome à travers la conception d’un véhicule capable de suivre avec précision un trajet prédéfini et de corriger ses écarts en temps réel. Il met ainsi en valeur le rôle de l’intelligence de navigation dans la simplification et la sécurisation des opérations de transport industriel.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Pour obtenir un suivi précis du trajet, le projet s’appuie sur une structure mécanique robuste et un système de détection réactif :</p>
<ul>
<li><strong>Châssis et système de mouvement (4WD) :</strong> châssis solide équipé de quatre roues motrices reliées à quatre moteurs à courant continu (DC Motors), afin d’assurer une bonne stabilité et une force de traction adaptée à différentes surfaces.</li>
<li><strong>Système de détection optique :</strong> capteurs infrarouges de suivi de ligne (IR Line Tracking Sensors) installés à l’avant du véhicule pour lire le contraste entre le trajet, représenté par une ligne noire, et l’arrière-plan blanc.</li>
<li><strong>Unité de contrôle et gestion de l’énergie :</strong> carte Arduino utilisée comme cerveau central, reliée à un contrôleur de moteurs (Motor Driver) pour répartir l’énergie et contrôler séparément la vitesse et le sens de chaque roue.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système repose sur un algorithme de contrôle continu (Feedback Loop) pour maintenir le véhicule sur le trajet :</p>
<ol>
<li><strong>Lecture continue :</strong> les capteurs IR émettent des rayons infrarouges ; ces rayons se réfléchissent sur le blanc et sont absorbés par le noir, ce qui permet de déterminer la position du trajet.</li>
<li><strong>Analyse des données :</strong> l’unité de contrôle reçoit ces lectures en quelques fractions de seconde.</li>
<li><strong>Correction du mouvement (intelligence de navigation) :</strong> si le robot est centré, les quatre moteurs continuent à avancer ; s’il dévie vers la droite, les roues du côté gauche ralentissent ou s’arrêtent pour le ramener sur la ligne, et inversement.</li>
</ol>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet soutient les Objectifs de Développement Durable à travers :</p>
<ul>
<li><strong>Industrie, innovation et infrastructure (Objectif 9) :</strong> présenter un modèle réduit de techniques d’automatisation qui améliorent l’efficacité des usines et réduisent les accidents logistiques.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Le projet a été réalisé grâce à une coopération technique complète afin d’assurer la cohérence entre la mécanique du véhicule et l’algorithme de suivi :</p>
<ul>
<li><strong>Ingénierie de vision et intelligence de navigation :</strong> assurée par l’élève Loukman El Addouti, qui s’est concentré sur la programmation des capteurs infrarouges et le développement de l’algorithme de contrôle pour maintenir le véhicule sur la ligne sans déviation.</li>
<li><strong>Ingénierie du mouvement et suivi de ligne :</strong> assurée par l’élève Mohamed Amine Safiyati, qui s’est occupé de l’assemblage du châssis 4WD, du câblage des moteurs avec le module de commande et de la programmation de la réponse des roues pour garantir un déplacement fluide et des virages précis.</li>
</ul>`,
    'digital-absence-management': `
<h2>Contexte du projet et problématique</h2>
<p>Le suivi quotidien des absences et des retards des élèves est l’un des piliers de l’administration éducative. Cependant, les méthodes papier traditionnelles consomment beaucoup de temps et d’efforts. La difficulté majeure réside aussi dans le retard de communication avec les parents lorsque leurs enfants sont absents, ce qui réduit l’efficacité de l’intervention préventive.</p>
<p>Le système numérique de gestion des absences est conçu comme une solution logicielle complète pour accélérer et faciliter cette opération. Il relie le surveillant général, le directeur de l’établissement et les parents dans un réseau numérique unifié, capable d’informer les familles en très peu de temps via WhatsApp.</p>
<h2>Composants techniques et conception logicielle</h2>
<p>Le système a été développé sous forme d’application web interactive et fluide, composée de trois modules principaux :</p>
<ul>
<li><strong>Plateforme de la surveillance générale :</strong> interface intelligente permettant au surveillant général d’importer directement les listes d’élèves depuis Massar (fichiers Excel), d’enregistrer les absences ou les retards en un clic, et d’imprimer des fiches de suivi individuelles.</li>
<li><strong>Tableau de bord de l’administration éducative :</strong> écran de pilotage réservé au directeur, affichant des statistiques en temps réel et des graphiques linéaires ou circulaires sur les indicateurs d’absence et de retard par classe et par jour, afin d’appuyer les décisions éducatives par les données.</li>
<li><strong>Système de notifications automatiques (WhatsApp Bot) :</strong> module logiciel fonctionnant en arrière-plan et chargé d’envoyer automatiquement des messages textes ou vocaux aux numéros des parents dès l’enregistrement d’une absence ou d’un retard.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système suit un enchaînement numérique organisé et précis afin de garantir la rapidité du traitement de l’information :</p>
<ul>
<li><strong>Préparation de la base de données :</strong> le système analyse automatiquement les données des élèves provenant des fichiers Massar et associe chaque élève au numéro de téléphone de son tuteur. Il empêche aussi l’enregistrement des absences pendant les jours fériés afin d’éviter les erreurs.</li>
<li><strong>Enregistrement et suivi des cas :</strong> le surveillant général choisit la classe et la séance, puis marque les élèves absents ou en retard. Le système fournit des indicateurs visuels pour l’alerter si un élève dépasse un nombre déterminé d’absences.</li>
<li><strong>Synchronisation et notification instantanée :</strong> dès que les modifications sont enregistrées, les données sont synchronisées avec le tableau de bord du directeur et le système d’automatisation lance en même temps l’envoi des notifications WhatsApp aux parents dans un délai très court.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette transformation numérique soutient les Objectifs de Développement Durable à travers :</p>
<ul>
<li><strong>Éducation de qualité :</strong> renforcer une communication continue et efficace entre la famille et l’école afin de limiter le décrochage scolaire.</li>
<li><strong>Industrie, innovation et infrastructure :</strong> numériser l’administration publique et développer des infrastructures technologiques qui facilitent le travail des équipes éducatives et améliorent la qualité des services administratifs.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Le système a été conçu et développé grâce à la coopération des jeunes développeurs du club :</p>
<ul>
<li><strong>Ingénierie des interfaces et expérience utilisateur (Front-end) :</strong> assurée par [nom du premier élève], avec un travail centré sur la conception et le développement de la plateforme de la surveillance générale et du tableau de bord du directeur à l’aide des technologies web, tout en garantissant une circulation fluide des données entre les interfaces.</li>
<li><strong>Ingénierie de l’automatisation et connexion WhatsApp (Back-end/Automation) :</strong> assurée par [nom du deuxième élève], avec le développement des algorithmes de lecture des fichiers Massar (Excel) et la programmation du système de notifications automatiques pour assurer l’envoi correct des messages textes et vocaux aux parents.</li>
</ul>`,
    'digital-textbook': `
<h2>Contexte du projet et problématique</h2>
<p>Le manuel scolaire est un support fondamental dans le processus d’apprentissage. Toutefois, les versions papier manquent d’interactivité, de mise à jour continue et de mécanismes d’évaluation immédiate. Le coût des documents imprimés peut également constituer un obstacle pour certaines familles.</p>
<p>En cohérence avec la vision stratégique d’intégration des technologies de l’information et de la communication dans l’enseignement, ce projet propose une solution pédagogique innovante qui dépasse le simple concept de livre numérique. Il vise à offrir le programme d’informatique sous forme de plateforme numérique interactive gratuite, réunissant explication théorique, exercices pratiques et tests interactifs, afin de renforcer l’autonomie de l’élève et de le libérer à terme de l’achat des supports papier.</p>
<h2>Composants techniques et conception logicielle</h2>
<p>La plateforme a été développée pour garantir la continuité de l’apprentissage et offrir un environnement d’évaluation complet :</p>
<ul>
<li><strong>Interface responsive :</strong> conception parfaitement compatible avec les téléphones, tablettes et ordinateurs afin de faciliter l’accès à tous les utilisateurs.</li>
<li><strong>Module d’exercices et d’évaluation interactive :</strong> système intégré permettant de programmer et de passer des tests d’informatique ainsi que des exercices interactifs (QCM, textes à trous, associations), avec correction automatique et évaluation immédiate des acquis.</li>
<li><strong>Organisation pédagogique structurée :</strong> navigation numérique qui facilite la consultation progressive des leçons et des activités pratiques en tenant compte des différences entre les apprenants.</li>
<li><strong>Hébergement cloud rapide :</strong> plateforme hébergée sur GitHub Pages pour garantir un accès rapide et une mise à jour immédiate du contenu.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le projet a été construit à partir des compétences ciblées dans la matière informatique au cycle collégial :</p>
<ul>
<li><strong>Apprentissage autonome actif :</strong> la plateforme permet à l’élève de réviser les cours et de réaliser les exercices à tout moment, avec un feedback immédiat qui l’encourage à améliorer son niveau.</li>
<li><strong>Numérisation des évaluations :</strong> le système offre à l’enseignant un environnement sécurisé et fluide pour passer les devoirs et les tests de manière entièrement interactive, ce qui réduit l’usage du papier, accélère la correction et facilite le suivi des notes.</li>
<li><strong>Mise à jour continue :</strong> le système permet d’ajouter de nouvelles leçons, des exercices innovants ou de mettre à jour la banque de questions instantanément pour tous les élèves.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette innovation pédagogique soutient le développement durable à travers :</p>
<ul>
<li><strong>Éducation de qualité :</strong> garantir l’égalité des chances dans l’accès aux ressources interactives et aux outils d’évaluation modernes pour tous les élèves.</li>
<li><strong>Consommation et production responsables :</strong> réduire la dépendance à l’impression papier dans les cours et les tests, contribuant ainsi à la protection de l’environnement.</li>
</ul>
<h2>Accès à la plateforme interactive et au manuel numérique</h2>
<p>Vous pouvez consulter la version numérique interactive du manuel d’informatique et découvrir le module d’exercices via le lien direct :</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="https://elrhaouat.github.io/cours/" target="_blank" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>💻</span> Accéder à la plateforme interactive d’informatique
  </a>
</div>
<h2>Développeur et encadrant général</h2>
<ul>
<li><strong>Développement et encadrement pédagogique :</strong> cette plateforme a été conçue et développée individuellement par le professeur Mohamed El Rhaouat, enseignant d’informatique, comme initiative visant à moderniser les méthodes d’enseignement et d’évaluation. En tant que président du Club de Robotique et d’Intelligence Artificielle, il assure également l’encadrement général et l’orientation technique de l’ensemble des projets réalisés par les élèves de l’établissement.</li>
</ul>`,
    'explorer-car': `
<h2>Contexte du projet et problématique</h2>
<p>Dans le monde de la robotique, de l’exploration spatiale et des zones dangereuses, les véhicules explorateurs (Rovers) sont parmi les outils les plus importants pour collecter des données sans exposer la vie humaine au danger.</p>
<p>Ce projet traite la problématique de la navigation autonome dans des environnements inconnus ou remplis d’obstacles. Il vise à concevoir un robot capable d’explorer son environnement, de détecter les barrières et de prendre des décisions immédiates pour changer de direction de manière automatique et indépendante.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Ce robot explorateur a été construit en combinant une structure mécanique solide et un système de détection intelligent. Il se compose de :</p>
<ul>
<li><strong>Châssis et systèmes de mouvement :</strong> châssis de voiture 2WD équipé de deux roues reliées à des moteurs à courant continu (DC Motors) et d’une roue libre (Castor wheel) pour faciliter les rotations et les manœuvres.</li>
<li><strong>Système de vision et de détection :</strong> capteur ultrasonique HC-SR04 qui joue le rôle des « yeux » du robot pour mesurer les distances avec précision.</li>
<li><strong>Système de balayage :</strong> servomoteur portant le capteur de distance et tournant à 180 degrés pour explorer l’environnement à droite et à gauche afin de choisir le meilleur trajet.</li>
<li><strong>Unité de contrôle centrale :</strong> carte Arduino programmée pour analyser les données du capteur et piloter les moteurs via un module de commande (Motor Driver).</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le robot explorateur fonctionne selon un algorithme intelligent de contournement des obstacles :</p>
<ol>
<li><strong>Avance directe :</strong> le robot avance tant que le chemin est dégagé.</li>
<li><strong>Détection du danger :</strong> lorsqu’il s’approche d’un obstacle à une distance donnée, il s’arrête immédiatement pour éviter la collision.</li>
<li><strong>Balayage et décision :</strong> le servomoteur oriente le capteur ultrasonique à droite et à gauche pour mesurer les distances disponibles dans les deux directions.</li>
<li><strong>Changement de trajectoire :</strong> l’unité de contrôle compare les deux distances et commande les moteurs pour tourner vers la direction la plus ouverte afin de poursuivre l’exploration.</li>
</ol>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet contribue aux Objectifs de Développement Durable à travers :</p>
<ul>
<li><strong>Industrie et innovation (Objectif 9) :</strong> développer des algorithmes de navigation autonome et concevoir des robots capables de s’adapter à leur environnement.</li>
<li><strong>Villes et communautés durables (Objectif 11) :</strong> l’idée peut être développée plus tard pour être utilisée dans des opérations de recherche et de sauvetage dans des lieux étroits ou effondrés.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Pour assurer l’intégration entre la structure mécanique et la programmation, les missions ont été réparties avec précision :</p>
<ul>
<li><strong>Ingénierie de vision et d’exploration :</strong> assurée par l’élève Rmissa Aarab, qui s’est concentrée sur la programmation du capteur ultrasonique et sa liaison avec le servomoteur pour créer un algorithme de balayage et de décision.</li>
<li><strong>Ingénierie du mouvement et du châssis :</strong> assurée par l’élève Hiba Mellouki, qui s’est occupée de l’assemblage du châssis mécanique 2WD et de la programmation de la commande des moteurs afin d’obtenir une réponse rapide et des rotations précises en fonction des ordres du système de détection.</li>
</ul>`,
    'informatics-olympiad': `
<h2>Contexte de l’olympiade et problématique</h2>
<p>Le monde connaît une évolution technologique rapide qui exige une mise à jour constante des connaissances. Partant de notre conviction dans les capacités de nos élèves et dans le rôle des notions technologiques modernes pour faciliter leur parcours scolaire et professionnel, l’Olympiade de la culture informatique a été lancée.</p>
<p>Ce défi culturel et technique n’est pas un simple test traditionnel ; il représente une occasion d’explorer et de développer les connaissances des élèves dans des domaines précis et avancés, tels que les bases de la programmation, l’histoire de l’intelligence artificielle et les outils de création de contenu et de vidéo, afin de dépasser la peur des technologies avancées.</p>
<h2>Composants techniques de la plateforme</h2>
<p>Pour garantir la transparence et accompagner la transformation numérique, cette compétition ne repose ni sur des feuilles ni sur des questions orales, mais se déroule entièrement dans un environnement numérique intégré :</p>
<ul>
<li><strong>Plateforme numérique de l’olympiade :</strong> application web dédiée au passage des tests interactifs, conçue avec une interface fluide adaptée à tous les élèves.</li>
<li><strong>Système de correction automatique :</strong> algorithmes intelligents qui corrigent instantanément les réponses des élèves et calculent le temps de réponse afin de départager les gagnants en cas d’égalité.</li>
<li><strong>Banque de questions renouvelée :</strong> base de données comprenant des questions variées, allant des notions de base aux concepts avancés en intelligence artificielle et en technologie.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Les étapes de l’olympiade suivent une série de procédures organisationnelles précises :</p>
<ul>
<li><strong>Participation ouverte et accès numérique :</strong> tous les élèves du Collège pionnier Al Wahda peuvent participer sans exception. Les participants accèdent à la plateforme numérique à un moment déterminé pour passer le test interactif.</li>
<li><strong>Compétition et évaluation :</strong> les élèves répondent à des questions techniques variées dans un temps limité, ce qui exige précision, concentration et culture générale en informatique.</li>
<li><strong>Récompense et motivation :</strong> après le classement automatique des résultats, les trois premiers gagnants au niveau de l’établissement sont identifiés et récompensés par des certificats et des prix symboliques afin d’encourager leur excellence numérique.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette olympiade numérique contribue à :</p>
<ul>
<li><strong>Éducation de qualité :</strong> encourager l’autoformation et diffuser une culture numérique avancée parmi les apprenants.</li>
<li><strong>Réduction des inégalités :</strong> ouvrir la participation à tous et offrir une plateforme numérique unifiée garantissant l’égalité des chances pour montrer les talents.</li>
</ul>
<h2>Accès à la plateforme numérique de l’olympiade</h2>
<p>Nous invitons tous les élèves à se préparer et à tester leurs connaissances en accédant à la plateforme officielle de l’Olympiade de la culture informatique via le lien suivant :</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../olympiad-platform.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🏆</span> Accéder à la plateforme numérique de l’olympiade
  </a>
</div>
<h2>Participants au défi</h2>
<p>Cet événement technique appartient à tous les élèves de l’établissement. Les participants sont les élèves du Collège pionnier Al Wahda qui souhaitent tester leurs capacités et prouver leur excellence dans les domaines de l’intelligence artificielle et de la programmation pour gagner les trois premières places.</p>`,
    'robotic-arm': `
<h2>Contexte du projet et problématique</h2>
<p>Le secteur industriel et logistique connaît une transformation importante vers l’automatisation afin de réduire les erreurs humaines. C’est dans ce contexte qu’est né le projet du bras robotique et du tri intelligent, comme modèle réduit simulant les systèmes industriels.</p>
<p>La problématique traitée par le projet est la suivante : comment trier et classer automatiquement les objets selon leurs couleurs avec précision, afin d’économiser l’effort humain et de garantir une grande exactitude dans le tri des matériaux, comme dans les lignes de production avancées.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Ce projet a été réalisé grâce à une intégration mécanique et logicielle précise. Il se compose de deux parties principales :</p>
<ul>
<li><strong>Plateforme rotative :</strong> support mobile sur lequel les objets colorés tournent pour passer de façon organisée devant le système de détection.</li>
<li><strong>Système de détection :</strong> capteur de couleurs précis qui lit et identifie la couleur de chaque objet passant devant lui.</li>
<li><strong>Bras robotique et servomoteurs :</strong> dès que la couleur est identifiée, le bras robotique se déplace avec précision pour saisir l’objet et le déposer à l’emplacement prévu et programmé pour cette couleur.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système fonctionne selon une séquence programmable automatique :</p>
<ol>
<li><strong>Rotation et inspection :</strong> la plateforme fait avancer les objets colorés vers le capteur de couleur.</li>
<li><strong>Reconnaissance :</strong> le capteur lit précisément la couleur de l’objet et envoie un signal à l’unité de contrôle.</li>
<li><strong>Saisie et orientation :</strong> à partir de la couleur reconnue, les articulations du bras robotique se déplacent pour saisir l’objet et le trier vers l’angle ou le bac qui lui est réservé.</li>
</ol>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet contribue aux Objectifs de Développement Durable, notamment :</p>
<ul>
<li><strong>Industrie et innovation (Objectif 9) :</strong> renforcer la fabrication durable et encourager l’innovation technologique par la conception de mécanismes intelligents.</li>
<li><strong>Consommation et production responsables (Objectif 12) :</strong> le principe de ce système peut être appliqué au tri précis des matériaux, ce qui soutient des opérations de recyclage organisées.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Les missions ont été réparties efficacement pour garantir la cohérence entre la plateforme et le bras :</p>
<ul>
<li><strong>Ingénierie du bras robotique :</strong> assurée par l’élève Hiba Troukouti, qui s’est concentrée sur la programmation des mouvements des articulations du bras afin de saisir les objets et de les déposer au bon emplacement selon chaque couleur.</li>
<li><strong>Ingénierie de la plateforme rotative et de la détection :</strong> assurée par l’élève Khadija El Kherbaoui, qui s’est concentrée sur la conception de la plateforme rotative et la programmation du capteur de couleur pour assurer une lecture précise et une synchronisation parfaite avec le mouvement du bras.</li>
</ul>`,
    'smart-assistant': `
<h2>Contexte du projet et problématique</h2>
<p>La communication efficace et la mise à disposition d’informations fiables pour les élèves et les parents comptent parmi les grands défis de l’administration éducative moderne. Les réponses aux questions répétées, comme les horaires, les dates d’examens ou la disponibilité des cadres administratifs, consomment souvent beaucoup de temps.</p>
<p>Pour répondre à ce défi, l’assistant intelligent du Collège Al Wahda a été conçu. Il s’agit d’un projet pionnier au niveau national dans les établissements publics, visant à numériser la communication institutionnelle grâce à un chatbot disponible en permanence pour répondre immédiatement et précisément aux questions des usagers.</p>
<h2>Composants techniques et conception logicielle</h2>
<p>L’assistant intelligent a été construit sur une infrastructure logicielle avancée combinant interfaces web et systèmes d’automatisation :</p>
<ul>
<li><strong>Interface utilisateur interactive :</strong> interface de discussion moderne basée sur l’effet Glassmorphism, garantissant une expérience fluide et confortable sur téléphones, tablettes et ordinateurs.</li>
<li><strong>Base de connaissances :</strong> l’équipe a collecté et organisé une vaste base de données contenant plus de 300 questions-réponses couvrant les aspects organisationnels, administratifs et géographiques de l’établissement.</li>
<li><strong>Moteur d’automatisation et de connexion (n8n) :</strong> cœur du système, il relie l’interface de discussion à la base de données et analyse les questions des utilisateurs afin de fournir la réponse la plus précise en quelques fractions de seconde.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>L’assistant intelligent fonctionne selon un algorithme de réponse instantanée :</p>
<ul>
<li><strong>Réception de la question :</strong> l’utilisateur pose sa question en langage naturel dans l’interface de discussion.</li>
<li><strong>Analyse et traitement :</strong> la demande est envoyée via Webhook vers les serveurs n8n, qui analysent les mots-clés et les comparent à la base de connaissances.</li>
<li><strong>Réponse automatique :</strong> la réponse appropriée est générée et envoyée immédiatement à l’utilisateur, avec possibilité de l’orienter vers des liens externes si nécessaire.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet pionnier soutient le développement durable à travers :</p>
<ul>
<li><strong>Éducation de qualité :</strong> faciliter l’accès à l’information éducative et renforcer les ponts de communication directe entre l’établissement et son environnement.</li>
<li><strong>Industrie, innovation et infrastructure :</strong> proposer un modèle d’intégration de l’intelligence artificielle et des technologies d’automatisation dans la numérisation du secteur public.</li>
</ul>
<h2>Tester l’assistant intelligent</h2>
<p>Vous pouvez interagir avec l’assistant intelligent et poser vos questions sur le Collège Al Wahda via le lien suivant :</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../bot.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🤖</span> Parler maintenant avec l’assistant intelligent
  </a>
</div>
<h2>Équipe de travail et répartition des missions</h2>
<p>Ce système pionnier a été conçu et développé grâce aux efforts exceptionnels des membres du club :</p>
<ul>
<li><strong>Ingénierie des données et contenu de connaissance :</strong> assurée par l’élève Hicham Oussroud, qui a collecté, classé et structuré une base de données de plus de 300 questions-réponses couvrant tous les détails liés à l’établissement.</li>
<li><strong>Ingénierie logicielle et automatisation (n8n) :</strong> assurée par l’élève Abdellah Lmou, qui a développé l’interface de discussion interactive, l’a reliée au système n8n et a conçu les algorithmes de réponse automatique pour garantir rapidité et précision.</li>
</ul>`,
    'smart-bell': `
<h2>Contexte du projet et problématique</h2>
<p>Les établissements scolaires dépendent souvent de l’intervention humaine pour faire sonner la cloche aux heures d’entrée, de sortie et de récréation, ce qui peut parfois entraîner des imprécisions ou des oublis. En plus, plusieurs bâtiments scolaires ne disposent pas de systèmes d’alerte précoce contre les incendies ou les fuites de gaz.</p>
<p>Ce projet, réellement appliqué au Collège pionnier Al Wahda, propose une solution radicale et double : automatiser entièrement et précisément le temps scolaire, tout en assurant un système de protection préventif garantissant la sécurité des élèves et du personnel de l’établissement.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Le système a été conçu pour être stable, précis et fonctionnel en continu sans intervention humaine, grâce à :</p>
<ul>
<li><strong>Unité de contrôle centrale :</strong> carte Arduino chargée de lire l’heure et d’analyser les données des capteurs.</li>
<li><strong>Système de temps réel :</strong> module RTC qui conserve l’heure avec une très grande précision et de manière autonome, même en cas de coupure d’électricité.</li>
<li><strong>Relais de puissance :</strong> interrupteur électronique sécurisé permettant à l’Arduino de contrôler le courant de la cloche scolaire avec une très basse tension.</li>
<li><strong>Système de gardien de sécurité :</strong> capteurs de gaz et de fumée fonctionnant en permanence, reliés à une alarme indépendante réservée aux situations d’urgence.</li>
<li><strong>Boutons de contrôle et d’adaptation horaire :</strong> boutons programmés pour une intervention manuelle rapide afin de modifier l’horaire sans reprogrammer entièrement le système.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système fonctionne avec des tâches parallèles et indépendantes pour garantir l’efficacité et faciliter le travail de l’administration :</p>
<ul>
<li><strong>Automatisation de la cloche et gestion du temps :</strong> l’Arduino compare l’heure actuelle avec l’emploi du temps programmé. Quand l’heure correspond, le système active la cloche pendant quelques secondes puis l’arrête automatiquement.</li>
<li><strong>Adaptation flexible au temps scolaire :</strong> le système dispose d’une fonction pratique permettant à l’administration d’ajouter ou de retirer une heure d’un simple bouton pour s’adapter à l’heure d’été ou d’hiver. Il comprend aussi un bouton dédié à l’activation ou à la désactivation de l’horaire du mois de Ramadan, évitant l’intervention des programmeurs à chaque changement officiel.</li>
<li><strong>Protocole d’urgence :</strong> les capteurs de gaz et de fumée analysent continuellement la qualité de l’air. En cas de fuite ou d’incendie, le système dépasse le programme horaire et déclenche immédiatement l’alarme d’urgence pour alerter l’administration et faciliter l’évacuation.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette réalisation pratique contribue à :</p>
<ul>
<li><strong>Éducation de qualité :</strong> améliorer l’infrastructure de l’établissement et garantir une gestion précise du temps d’apprentissage.</li>
<li><strong>Villes et communautés durables :</strong> offrir un environnement éducatif sécurisé et équipé de systèmes préventifs contre les risques tels que les incendies et les fuites.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Pour réussir ce projet et l’appliquer sur le terrain, les membres du club ont uni leurs efforts et réparti les missions selon les besoins du système :</p>
<ul>
<li><strong>Ingénierie de conception et de construction :</strong> assurée par l’élève Taha Lmou, qui a supervisé la conception du boîtier externe contenant les composants électroniques et son installation sécurisée dans l’établissement.</li>
<li><strong>Ingénierie de sécurité et protection de l’établissement :</strong> assurée par l’élève Salma Aqjoua, qui s’est concentrée sur l’intégration des capteurs de fumée et de gaz et le test des protocoles d’alarme conformément aux exigences de sécurité.</li>
<li><strong>Ingénierie du temps et de la cloche :</strong> assurée par l’élève Adam Ahwid, qui a programmé le module RTC, écrit les algorithmes des horaires ordinaires et ramadaniens, et relié le système au relais commandant la cloche principale.</li>
</ul>`,
    'smart-driouch': `
<h2>Contexte du projet et problématique</h2>
<p>Le projet Smart Driouch est une réponse technologique aux défis de l’expansion urbaine que connaît la ville de Driouch. Cette ville fait face à des problématiques locales précises que l’on peut résumer ainsi :</p>
<ul>
<li><strong>Embouteillage saisonnier :</strong> forte pression sur l’infrastructure routière pendant l’été à cause de l’arrivée massive des Marocains résidant à l’étranger, ce qui perturbe la circulation et retarde les interventions d’urgence.</li>
<li><strong>Risque de catastrophes naturelles :</strong> menace permanente de l’oued Kert qui traverse la ville et qui a déjà causé de lourdes pertes lors de fortes crues, en plus de la localisation de la ville et de la région dans la zone du Rif connue pour son activité sismique.</li>
</ul>
<p><strong>Question de recherche :</strong> comment intégrer les systèmes embarqués et les technologies d’intelligence artificielle pour créer un système préventif et intelligent capable de réduire l’isolement routier, d’assurer une alerte précoce contre les catastrophes naturelles et de protéger les habitants de Driouch ?</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Les solutions proposées ont été concrétisées dans une maquette d’ingénierie précise simulant l’infrastructure de la ville. Le système repose sur des cartes Arduino comme cerveau de traitement des données, reliées à un réseau de capteurs :</p>
<ul>
<li><strong>Gestion du trafic et du stationnement :</strong> module RFID pour identifier les véhicules, servomoteurs pour contrôler les barrières et relais 12V pour gérer le réseau de feux de signalisation.</li>
<li><strong>Surveillance des catastrophes naturelles :</strong> capteurs de niveau d’eau pour suivre l’oued Kert et capteurs de vibration MPU6050 pour détecter les premières secousses sismiques.</li>
<li><strong>Gestion environnementale et logistique :</strong> capteurs d’humidité du sol pour l’irrigation intelligente et capteur de couleurs pour le tri des déchets ou l’orientation des parcours.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système fonctionne de manière automatique et connectée pour répondre aux problématiques proposées à travers plusieurs axes :</p>
<ul>
<li><strong>Système d’alerte précoce et gestion des crises :</strong> lorsqu’un danger est détecté, le système change automatiquement l’état des feux, ouvre les barrières pour faciliter l’évacuation, éclaire les chemins de fuite sécurisés et alerte les véhicules de secours.</li>
<li><strong>Trafic intelligent et situations d’urgence :</strong> le système réagit immédiatement à l’approche d’une ambulance en ouvrant un « couloir vert » qui garantit son passage sans retard.</li>
<li><strong>Parking intelligent :</strong> l’accès au stationnement est organisé grâce à la technologie RFID pour les véhicules autorisés seulement, ce qui limite l’anarchie.</li>
</ul>
<h2>Intégration de l’intelligence artificielle et des services cloud</h2>
<p>Pour renforcer l’aspect sécuritaire et pratique de la ville, l’intelligence artificielle a été intégrée comme couche supérieure de gestion des données à travers un assistant intelligent pour les citoyens (Chatbots). Ce système interactif fournit aux habitants des mises à jour immédiates pour éviter les embouteillages ou des alertes urgentes en cas de risque d’inondation de l’oued Kert.</p>
<h2>Touche créative et culturelle</h2>
<p>Le projet ne se limite pas aux solutions techniques ; il intègre aussi l’identité locale à travers l’arbre numérique de l’olivier. Cette maquette représente un symbole culturel de la région de Driouch et met en avant le thème principal du projet : lorsque la technologie avancée rencontre l’identité et la culture locales.</p>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet contribue directement au développement durable à travers :</p>
<ul>
<li><strong>Sauver des vies :</strong> grâce à l’alerte précoce contre les inondations et les séismes.</li>
<li><strong>Durabilité environnementale :</strong> rationalisation de la consommation d’eau grâce à l’irrigation intelligente.</li>
<li><strong>Réduction des émissions :</strong> diminution de la pollution causée par les embouteillages.</li>
</ul>`,
    'smart-farm': `
<h2>Contexte du projet et problématique</h2>
<p>Le secteur agricole fait face à de grands défis, notamment la rareté de l’eau, le gaspillage des ressources à cause des méthodes d’irrigation traditionnelles, ainsi que les pertes matérielles causées par la destruction des cultures par les oiseaux et les animaux intrus.</p>
<p>Le projet de ferme intelligente se présente comme un modèle réduit de la ferme du futur. Il propose une solution technologique intégrée basée sur l’Internet des objets et les systèmes embarqués afin de rationaliser la consommation d’eau et de protéger les cultures de manière automatique et durable.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Pour garantir l’autonomie de la ferme, la maquette a été équipée d’un ensemble de capteurs et de systèmes connectés :</p>
<ul>
<li><strong>Unité de contrôle centrale :</strong> carte Arduino jouant le rôle de cerveau, collectant les données et prenant les décisions.</li>
<li><strong>Système d’irrigation durable :</strong> réservoir de collecte des eaux de pluie relié à une petite pompe, avec capteur de mesure de l’humidité du sol.</li>
<li><strong>Système de protection périphérique (clôture intelligente) :</strong> clôture équipée de capteurs de contact ou d’un circuit électrique fermé détectant toute tentative d’intrusion physique par des animaux.</li>
<li><strong>Système d’éloignement des oiseaux :</strong> capteur sonore sensible aux hautes fréquences, comme les sons d’oiseaux, relié à une alarme sonore qui agit comme un épouvantail électronique.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système fonctionne selon trois mécanismes intelligents et indépendants :</p>
<ul>
<li><strong>Rationalisation de l’eau (irrigation intelligente) :</strong> le capteur de sol mesure continuellement le taux d’humidité. La pompe ne s’active que si le système détecte une sécheresse réelle, en utilisant l’eau de pluie stockée, puis s’arrête automatiquement lorsque le sol atteint le niveau d’humidité souhaité.</li>
<li><strong>Épouvantail électronique :</strong> le capteur sonore reste en mode écoute. Lorsqu’il détecte les sons d’un rassemblement d’oiseaux près des cultures, le système déclenche immédiatement une alarme sonore pendant quelques secondes afin de les éloigner sans les blesser.</li>
<li><strong>Clôture de sécurité interactive :</strong> lorsqu’un animal touche la clôture entourant la ferme, le circuit électrique se ferme et déclenche une alarme de protection des cultures.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet contribue aux Objectifs de Développement Durable, notamment :</p>
<ul>
<li><strong>Faim zéro :</strong> encourager des pratiques agricoles durables et intelligentes qui protègent les cultures.</li>
<li><strong>Eau propre et assainissement :</strong> exploiter les eaux de pluie et réduire le gaspillage des eaux souterraines grâce à une irrigation ciblée.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Ce projet a été réalisé grâce à la coopération des membres du club afin d’assurer le bon fonctionnement coordonné des systèmes agricoles et de sécurité :</p>
<ul>
<li><strong>Ingénierie de l’irrigation et de l’agriculture durable :</strong> assurée par l’élève Mohamed Amine Zkagh, qui s’est concentré sur la programmation du capteur d’humidité du sol, sa connexion à la pompe et le développement de l’algorithme d’irrigation automatique basé sur la réserve d’eaux de pluie.</li>
<li><strong>Ingénierie des systèmes de protection et de détection :</strong> assurée par l’élève Daoud, qui s’est occupé de la programmation du capteur sonore et de la clôture intelligente afin d’obtenir une réponse rapide aux alertes et de protéger les cultures des animaux et des oiseaux.</li>
</ul>`,
    'smart-helmet': `
<h2>Contexte du projet et problématique</h2>
<p>Les statistiques officielles de l’Agence nationale de la sécurité routière (NARSA) au Maroc indiquent que les usagers de motocyclettes sont la catégorie la plus exposée au danger sur la route. Leur part dépasse 40 % du total des victimes décédées dans les accidents de la circulation, et la cause principale est souvent le non-port du casque de protection.</p>
<p>À partir de cette réalité préoccupante, le projet de casque intelligent a été imaginé comme une solution technologique préventive. Il traite la problématique du relâchement dans les mesures de sécurité en imposant le port du casque comme condition obligatoire pour démarrer le moteur de la moto, ce qui garantit automatiquement la protection du conducteur.</p>
<h2>Composants techniques et conception d’ingénierie</h2>
<p>Ce système embarqué est divisé en deux unités séparées qui communiquent sans fil pour garantir la sécurité :</p>
<ul>
<li><strong>Unité du casque (émettrice) :</strong> basée sur une petite carte Arduino, équipée d’un capteur infrarouge ou d’un bouton poussoir pour vérifier que le conducteur porte réellement le casque, ainsi que d’un module d’émission sans fil.</li>
<li><strong>Unité de la moto (réceptrice) :</strong> contenant une carte Arduino reliée à un module de réception sans fil et à un relais de puissance qui contrôle le circuit de démarrage du moteur.</li>
<li><strong>Système de détection d’accident :</strong> capteur de vibration ou d’inclinaison intégré au casque pour détecter un choc ou une chute soudaine du conducteur.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>Le système fonctionne comme une boucle de sécurité fermée difficile à contourner, selon la séquence suivante :</p>
<ul>
<li><strong>Condition obligatoire de démarrage :</strong> lorsque le conducteur monte sur la moto, le circuit de démarrage reste bloqué. Dès que le casque est porté, le capteur interne détecte le signal et l’Arduino envoie une commande sans fil codée à l’unité de la moto pour autoriser le démarrage.</li>
<li><strong>Blocage automatique :</strong> si le conducteur retire le casque à l’arrêt ou avant le départ, la communication sans fil est interrompue, ce qui arrête immédiatement le moteur pour éviter une conduite dangereuse.</li>
<li><strong>Détection de collision :</strong> en cas d’accident, le capteur de vibration détecte le choc violent, ce qui permet au système de déclencher une alerte.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette innovation préventive soutient les Objectifs de Développement Durable à travers :</p>
<ul>
<li><strong>Bonne santé et bien-être :</strong> réduire concrètement le nombre de décès et de blessures graves liés aux accidents de moto.</li>
<li><strong>Industrie, innovation et infrastructure :</strong> encourager l’innovation de systèmes de protection embarqués et intelligents pouvant être adoptés à l’avenir dans le transport et la fabrication des motos.</li>
</ul>
<h2>Équipe de travail et répartition des missions</h2>
<p>Pour assurer une communication efficace entre le casque et la moto, le travail a été réparti comme suit :</p>
<ul>
<li><strong>Ingénierie de détection du casque et communication sans fil :</strong> assurée par [nom du premier élève], avec un travail centré sur la programmation du capteur de vérification du port du casque et la configuration du module d’émission sans fil afin d’envoyer un signal précis et stable.</li>
<li><strong>Ingénierie du contrôle de la moto et de la réception :</strong> assurée par [nom du deuxième élève], chargée de programmer l’unité réceptrice intégrée à la moto et de la relier au relais de puissance pour contrôler réellement le démarrage et l’arrêt du moteur selon l’état du casque.</li>
</ul>`,
    'typing-speed-challenge': `
<h2>Contexte de la compétition et problématique</h2>
<p>La vitesse de frappe au clavier et la maîtrise de son utilisation font partie des compétences essentielles que l’élève doit acquérir à l’ère numérique. Cependant, de nombreux apprenants rencontrent des difficultés à mémoriser l’emplacement des lettres et à utiliser les deux mains pendant la saisie.</p>
<p>C’est ainsi qu’est née l’idée du Défi de vitesse numérique, une compétition périodique organisée par le club pour motiver les élèves à développer leurs compétences de saisie sur ordinateur. Ce défi vise à créer une atmosphère de compétition positive et à transformer l’apprentissage routinier en un challenge stimulant qui valorise les compétences des élèves et les encourage à progresser.</p>
<h2>Outil technique et logiciel utilisé</h2>
<p>Pour garantir la transparence, la précision de l’entraînement et l’évaluation professionnelle du niveau des participants, la compétition repose sur un logiciel spécialisé :</p>
<ul>
<li><strong>RapidTyping :</strong> logiciel éducatif avancé conçu spécialement pour apprendre la frappe au clavier de manière méthodique et interactive, adaptée à tous les niveaux.</li>
<li><strong>Critères d’évaluation :</strong> le programme calcule avec précision la vitesse de frappe, en nombre de mots ou de caractères par minute, tout en suivant le taux de précision et les fautes. Ce système fournit des statistiques détaillées pour chaque élève et permet de déterminer automatiquement et équitablement le participant le plus rapide et le plus précis.</li>
</ul>
<h2>Réalisation et mode de fonctionnement</h2>
<p>La compétition passe par des étapes organisationnelles précises afin de garantir la participation de toutes les classes de l’établissement :</p>
<ul>
<li><strong>Formation et sélection :</strong> une formation est organisée avant la compétition pour toutes les classes afin de s’entraîner sur RapidTyping. Pendant cette phase, les trois meilleurs élèves de chaque classe sont sélectionnés, pour un total de 24 qualifiés.</li>
<li><strong>Éliminatoires directes :</strong> la compétition se déroule sous forme de tours opposant les trois représentants de chaque classe. Des rendez-vous sont fixés pour réunir les concurrents et organiser les défis devant le public.</li>
<li><strong>Finales :</strong> à chaque tour, le tiers le moins rapide est éliminé, jusqu’à atteindre la phase finale et couronner l’élève le plus rapide du Collège Al Wahda.</li>
</ul>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Cette compétition interactive contribue à :</p>
<ul>
<li><strong>Éducation de qualité :</strong> développer les compétences numériques de base des élèves à travers des méthodes pédagogiques modernes et motivantes.</li>
<li><strong>Réduction des inégalités :</strong> offrir une chance équitable à tous les élèves des huit classes pour participer et montrer leurs capacités techniques dans un climat de transparence et de compétition positive.</li>
</ul>
<h2>Participants au défi</h2>
<p>Cet événement ne repose pas sur des ingénieurs ou des développeurs ; c’est une célébration technique participative. L’équipe des concurrents est composée de <strong>24 participants</strong> représentant l’élite des huit classes de l’établissement, avec trois participants par classe. Ils concourent dans un esprit sportif pour représenter leurs classes et gagner le titre de meilleur dactylographe numérique.</p>`,
    'video-games-awareness': `
<h2>Contexte du projet et problématique</h2>
<p>Les jeux vidéo font partie des formes de divertissement les plus répandues chez les adolescents, et ils sont souvent accusés d’être la seule cause principale de l’échec scolaire. Mais est-ce vraiment toute la vérité ?</p>
<p>Pour éclairer cette problématique, le club a organisé une présentation interactive innovante qui dépasse les conseils traditionnels directs pour devenir une séance d’analyse critique et de confrontation sincère. L’objectif principal est de comprendre la vraie relation entre les jeux et les résultats scolaires, et de diffuser une prise de conscience sur la manière de gérer le monde numérique avec rationalité tout en évitant le piège de l’addiction.</p>
<h2>Méthodologie de la présentation : la règle du panel interactif</h2>
<p>Le président du club a animé cette séance devant le public avec une approche inspirée d’un tribunal de la vérité, selon des règles strictes et innovantes garantissant une transparence totale :</p>
<ul>
<li><strong>Règle de la vérité complète :</strong> la question est posée au participant, qui doit répondre avec une sincérité totale sans esquiver.</li>
<li><strong>Carte rouge (pour l’animateur) :</strong> elle est levée lorsqu’un élève semble éviter la réponse ou cacher une partie de la vérité.</li>
<li><strong>Carte verte (pour l’animateur) :</strong> elle est levée pour reconnaître le courage d’un élève qui admet son erreur ou révèle une vérité difficile avec franchise.</li>
<li><strong>Carte noire (pour l’élève) :</strong> carte de contestation que l’élève peut lever s’il estime que l’animateur a été injuste avec la carte rouge.</li>
<li><strong>Jugement du public :</strong> lorsque la carte noire est levée, toute la salle intervient pour résoudre le désaccord par un vote direct, pour ou contre la décision de l’animateur, ce qui rend le public pleinement partie prenante du débat.</li>
</ul>
<h2>Modèles participant à l’analyse critique</h2>
<p>Pour assurer une analyse complète et objective, cinq élèves représentant des profils différents et réalistes de l’établissement ont été choisis :</p>
<ul>
<li><strong>Modèle d’équilibre (Hicham Oussroud) :</strong> élève parmi les premiers, qui joue aux jeux vidéo pendant son temps libre, pour montrer au public que l’organisation est la clé.</li>
<li><strong>Modèle d’aveu et d’addiction (Bilal Lakhal) :</strong> élève qui reconnaît avec un courage rare que l’addiction a eu un impact négatif direct sur ses résultats scolaires.</li>
<li><strong>Modèle de rétablissement (Soufiane Saqqar) :</strong> ancien addict en voie de traitement, qui a remplacé le monde virtuel par une passion concrète pour occuper son temps libre.</li>
<li><strong>Modèle d’isolement positif (Meryem Bouaouda) :</strong> élève parmi les premières, qui ne connaît pas les jeux vidéo et n’a jamais entendu les noms des jeux célèbres, consacrant son temps à l’apprentissage et à la réserve.</li>
<li><strong>Modèle qui casse la règle :</strong> élève qui ne joue pas du tout aux jeux vidéo, mais qui rencontre malgré tout des difficultés scolaires, prouvant que les jeux ne sont pas l’unique explication de l’échec et que d’autres facteurs existent.</li>
</ul>
<h2>Objectifs éducatifs et synthèse de la séance</h2>
<p>Cette séance interactive a permis de briser les images stéréotypées. Le public a compris que le problème n’est pas dans les jeux vidéo en eux-mêmes, mais dans l’absence de conscience, la mauvaise gestion du temps et la fuite du réel. La séance a atteint plusieurs objectifs profonds :</p>
<ul>
<li>Sensibiliser aux risques de l’addiction numérique et encourager les élèves à s’engager dans des loisirs réels.</li>
<li>Diffuser la culture du dialogue, de l’autocritique et du courage d’admettre ses erreurs comme première étape vers le traitement et la correction.</li>
</ul>
<h2>Consulter la présentation interactive</h2>
<p>Nous vous invitons à découvrir la présentation dédiée à cette séance de débat, qui comprend les axes d’analyse critique et les orientations éducatives, via le lien direct :</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="https://elrhaouat.github.io/u/" target="_blank" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🎮</span> Présentation sur la face cachée des jeux vidéo
  </a>
</div>
<h2>Lien avec les Objectifs de Développement Durable</h2>
<p>Ce projet contribue à :</p>
<ul>
<li><strong>Bonne santé et bien-être :</strong> renforcer la santé mentale des élèves et les protéger des effets de l’addiction numérique.</li>
<li><strong>Éducation de qualité :</strong> traiter les causes de l’échec scolaire par des méthodes éducatives innovantes basées sur la persuasion et l’interaction directe.</li>
</ul>`,
  },
  en: {
    'ai-content-creation': `
<h2>Project Context and Problem Statement</h2>
<p>The world is witnessing a real revolution in generative artificial intelligence, which is no longer limited to programming or solving equations, but has become a powerful tool for creators and artists. This project addresses how advanced technological tools can be used to produce meaningful content that deals with social and school-related issues.</p>
<p>The AI content creation project highlights the remarkable development of these tools by producing stories, short films and awareness videos, showing that artificial intelligence can become an essential partner in artistic creativity and awareness building.</p>
<h2>Technical Components and Generation Tools</h2>
<p>The project relies on a set of modern AI tools and models to create complete content from scratch:</p>
<ul>
<li><strong>Text and scenario generation:</strong> using large language models such as ChatGPT, Gemini and Grok to generate ideas, dialogues and accurate scripts for awareness stories.</li>
<li><strong>Image generation and design (Text-to-Image):</strong> writing professional prompts to transform textual descriptions into high-quality scenes, characters and backgrounds.</li>
<li><strong>Animation and video generation (Image-to-Video):</strong> using advanced AI platforms to animate still images and give them a realistic cinematic feeling.</li>
<li><strong>Audio generation and editing:</strong> adding automatically generated voice-over with natural voices and integrating sound effects to produce the final video.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The production process follows an integrated AI Pipeline Workflow:</p>
<ol>
<li><strong>Brainstorming and prompt engineering:</strong> the process starts by shaping the idea and guiding language models to write a script divided into scenes.</li>
<li><strong>Visual creation:</strong> an independent image is generated for each scene based on a precise description, while preserving character consistency and visual identity.</li>
<li><strong>Animation:</strong> generated images are uploaded to smart video animation platforms to create smooth camera and character movements.</li>
<li><strong>Smart editing:</strong> visual clips are combined with AI-generated audio to produce a ready-to-publish awareness film.</li>
</ol>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This artistic and technical project supports the Sustainable Development Goals through:</p>
<ul>
<li><strong>Quality education:</strong> producing meaningful awareness content that helps educate students in a modern, attractive and visual way.</li>
<li><strong>Industry and innovation:</strong> integrating the latest creative technologies into the school environment and developing future skills, especially prompt engineering.</li>
</ul>
<h2>Video Gallery and Achievements</h2>
<p>This project resulted in a set of videos and stories fully generated with artificial intelligence. You can watch the two students’ creations and explore the potential of generative AI through our digital gallery:</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../ai-gallery.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🎬</span> Explore the AI Video Gallery
  </a>
</div>
<h2>Team and Task Distribution</h2>
<p>These creative works were completed through full complementarity between the two students:</p>
<ul>
<li><strong>Prompt engineering and script writing:</strong> carried out by Alaa Zarouq, who focused on interacting with language models (ChatGPT, Gemini) to write meaningful stories and design the descriptive prompts needed to generate images and characters.</li>
<li><strong>Video design and smart editing:</strong> carried out by Asmahan Zarouq, who animated the generated images, turned them into video clips, generated voice-over and combined all elements to produce the final film in its best form.</li>
</ul>`,
    'autonomous-vehicle': `
<h2>Project Context and Problem Statement</h2>
<p>Automated Guided Vehicles (AGVs) are a backbone of modern logistics and smart factories, as they transport materials accurately without human intervention.</p>
<p>This project addresses autonomous navigation by designing a vehicle capable of following a predefined path with high precision and correcting its deviations in real time. It highlights the role of navigation intelligence in simplifying and securing industrial transport operations.</p>
<h2>Technical Components and Engineering Design</h2>
<p>To achieve accurate path tracking, the project uses a strong mechanical structure and a responsive sensing system:</p>
<ul>
<li><strong>Chassis and motion system (4WD):</strong> a solid chassis equipped with four driving wheels connected to four DC motors, ensuring high stability and traction suitable for different surfaces.</li>
<li><strong>Optical sensing system:</strong> IR line tracking sensors placed at the front of the vehicle to read the color contrast between the black line and the white background.</li>
<li><strong>Control unit and power management:</strong> an Arduino board used as the central brain, connected to a motor driver to distribute power and control the speed and direction of each wheel separately.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system uses a continuous feedback loop to keep the vehicle on track:</p>
<ol>
<li><strong>Continuous reading:</strong> the IR sensors emit infrared rays; the rays reflect on white and are absorbed by black, allowing the system to determine the path position.</li>
<li><strong>Data analysis:</strong> the control unit receives these readings in fractions of a second.</li>
<li><strong>Movement correction (navigation intelligence):</strong> if the robot is centered, all four motors keep moving forward. If it deviates to the right, the left wheels slow down or stop to bring it back to the path, and the opposite happens when it deviates left.</li>
</ol>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project supports the Sustainable Development Goals through:</p>
<ul>
<li><strong>Industry, innovation and infrastructure (Goal 9):</strong> presenting a small-scale model of automation technologies that improve factory efficiency and reduce logistics accidents.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>The project was completed through integrated technical cooperation to ensure harmony between the vehicle mechanics and the tracking algorithm:</p>
<ul>
<li><strong>Vision engineering and navigation intelligence:</strong> handled by Loukman El Addouti, who focused on programming the infrared sensors and developing the control algorithm to keep the vehicle on the path without deviation.</li>
<li><strong>Motion engineering and path tracking:</strong> handled by Mohamed Amine Safiyati, who assembled the 4WD chassis, connected the motors to the driver module and programmed the wheel response to ensure smooth movement and accurate turns.</li>
</ul>`,
    'digital-absence-management': `
<h2>Project Context and Problem Statement</h2>
<p>Daily monitoring of student absences and lateness is a key pillar of school administration, yet traditional paper-based methods consume a lot of time and effort. The larger issue is the delay in informing parents about their children’s absence, which reduces the effectiveness of preventive intervention.</p>
<p>The digital absence management system was created as an integrated software solution to speed up and simplify this process. It connects the general supervisor, the school principal and parents in one digital network, ensuring that families are informed very quickly through WhatsApp.</p>
<h2>Technical Components and Software Design</h2>
<p>The system was developed as a smooth and interactive web application composed of three main modules:</p>
<ul>
<li><strong>General supervision platform:</strong> a smart interface allowing the supervisor to import student lists directly from Massar Excel files, record absences or lateness with one click and print personal follow-up cards for each student.</li>
<li><strong>Educational administration dashboard:</strong> a control screen for the principal showing live statistics and charts on absence and lateness indicators by class and day, supporting data-based educational decisions.</li>
<li><strong>Automatic notification system (WhatsApp Bot):</strong> a background software module responsible for automatically sending text or voice messages to parents as soon as an absence or lateness case is recorded.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system follows an organized digital sequence to ensure rapid information processing:</p>
<ul>
<li><strong>Database preparation:</strong> the system automatically analyzes student data from Massar files and links each student to the phone number of their guardian. It also prevents absence registration on official holidays to avoid errors.</li>
<li><strong>Case registration and monitoring:</strong> the supervisor selects the class and session, then marks absent or late students. The system provides color indicators to alert the supervisor when a student exceeds a defined number of absences.</li>
<li><strong>Synchronization and instant notification:</strong> once changes are saved, the data is immediately synchronized with the principal’s dashboard, while the automation system sends WhatsApp notifications to parents within a short time.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This digital transformation supports the Sustainable Development Goals through:</p>
<ul>
<li><strong>Quality education:</strong> strengthening continuous and effective communication between families and school to reduce dropout risks.</li>
<li><strong>Industry, innovation and infrastructure:</strong> digitizing public administration and building technological infrastructure that supports educational staff and improves administrative services.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>This software system was built through cooperation between young developers in the club:</p>
<ul>
<li><strong>Interface engineering and user experience (Front-end):</strong> handled by [first student name], focusing on designing and developing the supervision platform and the principal’s dashboard using web technologies, while ensuring smooth data transfer between interfaces.</li>
<li><strong>Automation and WhatsApp integration engineering (Back-end/Automation):</strong> handled by [second student name], focusing on algorithms for reading Massar Excel files and programming the automatic notification system to ensure successful delivery of text and voice messages to parents.</li>
</ul>`,
    'digital-textbook': `
<h2>Project Context and Problem Statement</h2>
<p>The textbook is a fundamental support in the learning process, but paper versions lack interactivity, continuous updates and instant assessment mechanisms. The cost of printed materials can also be an obstacle for some families.</p>
<p>In line with the strategic vision of integrating information and communication technologies into education, this project offers an innovative pedagogical solution that goes beyond the simple idea of a digital book. It aims to provide the informatics curriculum as a free interactive digital platform combining theoretical explanations, practical exercises and interactive tests, strengthening learner autonomy and eventually reducing the need to buy paper copies.</p>
<h2>Technical Components and Software Design</h2>
<p>The platform was developed to ensure learning continuity and provide a complete assessment environment:</p>
<ul>
<li><strong>Responsive user interface:</strong> a design fully compatible with phones, tablets and computers to ensure easy access for everyone.</li>
<li><strong>Interactive exercises and assessment module:</strong> an integrated system for programming and passing informatics tests and interactive exercises such as multiple choice questions, gap filling and matching, with automatic correction and immediate evaluation.</li>
<li><strong>Structured pedagogical organization:</strong> digital navigation that makes lessons and practical activities easy to browse progressively while respecting learner differences.</li>
<li><strong>Fast cloud hosting:</strong> the platform is hosted on GitHub Pages to ensure fast access and instant content updates.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The project was built based on the targeted competencies of the informatics subject at middle school level:</p>
<ul>
<li><strong>Active self-learning:</strong> the platform allows students to review lessons and complete related exercises at any time, providing instant feedback and encouraging improvement.</li>
<li><strong>Digital assessment:</strong> the system gives the teacher a safe and smooth environment to conduct assignments and tests fully interactively, reducing paper use, accelerating correction and simplifying grade tracking.</li>
<li><strong>Continuous updating:</strong> the system allows new lessons, innovative exercises or question bank updates to appear instantly for all students.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This pedagogical innovation supports sustainable development through:</p>
<ul>
<li><strong>Quality education:</strong> ensuring equal access to interactive learning resources and modern assessment tools for all students.</li>
<li><strong>Responsible consumption and production:</strong> reducing reliance on paper printing in lessons and tests, contributing to environmental protection.</li>
</ul>
<h2>Access the Interactive Platform and Digital Textbook</h2>
<p>You can browse the interactive digital version of the informatics textbook and discover the exercise module through the direct link:</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="https://elrhaouat.github.io/cours/" target="_blank" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>💻</span> Access the Interactive Informatics Platform
  </a>
</div>
<h2>Developer and General Supervisor</h2>
<ul>
<li><strong>Development and pedagogical supervision:</strong> this educational platform was individually designed and developed by Professor Mohamed El Rhaouat, informatics teacher, as an initiative to modernize teaching and assessment methods. As president of the Robotics and Artificial Intelligence Club, he also provides general supervision and technical guidance for all projects carried out by the students of the school.</li>
</ul>`,
    'explorer-car': `
<h2>Project Context and Problem Statement</h2>
<p>In robotics, space exploration and dangerous areas, rovers are among the most important tools for collecting data without exposing human lives to danger.</p>
<p>This project addresses autonomous navigation in unknown or obstacle-filled environments. It aims to design a robot capable of exploring its surroundings, detecting barriers and making immediate decisions to change direction automatically and independently.</p>
<h2>Technical Components and Engineering Design</h2>
<p>This explorer robot was built by combining a solid mechanical structure with a smart sensing system. It consists of:</p>
<ul>
<li><strong>Chassis and motion systems:</strong> a 2WD car chassis equipped with two wheels connected to DC motors and a castor wheel for easy turning and maneuvering.</li>
<li><strong>Vision and sensing system:</strong> an HC-SR04 ultrasonic sensor that acts as the robot’s eyes to measure distances accurately.</li>
<li><strong>Scanning system:</strong> a servo motor carrying the distance sensor and rotating 180 degrees to scan left and right and determine the best route.</li>
<li><strong>Central control unit:</strong> an Arduino board programmed to analyze incoming sensor data and control the car motors through a motor driver.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The explorer robot follows a smart obstacle-avoidance algorithm:</p>
<ol>
<li><strong>Direct movement:</strong> the robot moves forward as long as the path is clear.</li>
<li><strong>Danger detection:</strong> when it approaches an obstacle at a defined distance, it stops immediately to avoid collision.</li>
<li><strong>Scanning and decision-making:</strong> the servo turns the ultrasonic sensor right and left to measure available distances in both directions.</li>
<li><strong>Path change:</strong> the control unit compares the two distances and directs the motors to turn toward the wider direction to continue exploration.</li>
</ol>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project supports the Sustainable Development Goals through:</p>
<ul>
<li><strong>Industry and innovation (Goal 9):</strong> developing autonomous navigation algorithms and designing robots that can adapt to their environment.</li>
<li><strong>Sustainable cities and communities (Goal 11):</strong> the idea can later be developed for search and rescue operations in narrow or collapsed places.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>To ensure integration between the mechanical structure and programming, tasks were carefully distributed:</p>
<ul>
<li><strong>Vision and exploration engineering:</strong> handled by Rmissa Aarab, who focused on programming the ultrasonic sensor and linking it to the servo motor to create an environment scanning and decision-making algorithm.</li>
<li><strong>Motion and chassis engineering:</strong> handled by Hiba Mellouki, who assembled the 2WD mechanical chassis and programmed the motor control unit to ensure fast response and accurate turns based on the sensing system commands.</li>
</ul>`,
    'informatics-olympiad': `
<h2>Olympiad Context and Problem Statement</h2>
<p>The world is experiencing rapid technological development that requires continuous knowledge updating. Based on our strong belief in our students’ abilities and in the role of modern technological concepts in supporting their academic and professional future, the Informatics Knowledge Olympiad was launched.</p>
<p>This cultural and technical challenge is not a traditional test. It is an opportunity to explore and develop students’ knowledge in precise and advanced fields including programming basics, the history of artificial intelligence and tools for creating content and videos, helping them overcome fear of advanced technology.</p>
<h2>Technical Components of the Platform</h2>
<p>To ensure transparency and support digital transformation, the competition does not rely on paper or oral questions. It takes place entirely through an integrated digital environment:</p>
<ul>
<li><strong>Digital Olympiad platform:</strong> a web application dedicated to interactive tests, designed with a smooth interface suitable for all students.</li>
<li><strong>Automatic evaluation system:</strong> smart algorithms that instantly correct students’ answers and calculate response time to accurately determine winners in case of equal scores.</li>
<li><strong>Renewed question bank:</strong> a database containing varied questions ranging from fundamentals to advanced concepts in artificial intelligence and technology.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The Olympiad stages follow a series of well-organized procedures:</p>
<ul>
<li><strong>Open participation and digital access:</strong> all students of Al Wahda Pioneer Middle School are allowed to participate. They access the digital platform at a scheduled time to take the interactive test.</li>
<li><strong>Competition and assessment:</strong> students answer a range of technical questions within a limited time, requiring precision, focus and general knowledge in informatics.</li>
<li><strong>Awarding and motivation:</strong> after automatic sorting of the results, the top three winners at school level are selected and awarded certificates and symbolic prizes to encourage digital excellence.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This digital Olympiad contributes to:</p>
<ul>
<li><strong>Quality education:</strong> encouraging self-learning and spreading advanced digital culture among learners.</li>
<li><strong>Reduced inequalities:</strong> opening participation to everyone and providing a unified digital platform that guarantees equal opportunities to showcase talents.</li>
</ul>
<h2>Access the Digital Olympiad Platform</h2>
<p>We invite all students to prepare and test their knowledge by accessing the official Informatics Knowledge Olympiad platform through the link below:</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../olympiad-platform.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🏆</span> Enter the Digital Olympiad Platform
  </a>
</div>
<h2>Participants in the Challenge</h2>
<p>This technical event belongs to all students of the school. The participants are the students of Al Wahda Pioneer Middle School who aim to test their abilities and prove their excellence in artificial intelligence and programming in order to win the top three places.</p>`,
    'robotic-arm': `
<h2>Project Context and Problem Statement</h2>
<p>The industrial and logistics sectors are moving strongly toward automation in order to reduce human errors. From this idea came the robotic arm and smart sorting project, a small-scale model that simulates industrial systems.</p>
<p>The problem addressed by the project is how to automatically and accurately sort objects according to their colors, saving effort and ensuring high precision in material sorting, similar to what happens in advanced production lines.</p>
<h2>Technical Components and Engineering Design</h2>
<p>The project was built through careful mechanical and software integration and consists of two main parts:</p>
<ul>
<li><strong>Rotating platform:</strong> a moving platform on which colored objects rotate to pass regularly in front of the sensing system.</li>
<li><strong>Sensing system:</strong> an accurate color sensor that reads and identifies the color of each object passing in front of it.</li>
<li><strong>Robotic arm and servo motors:</strong> once the color is identified, the robotic arm moves precisely to pick up the object and place it in the location programmed for that specific color.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system works according to an automatic programmed sequence:</p>
<ol>
<li><strong>Rotation and inspection:</strong> the platform rotates the colored objects toward the color sensor.</li>
<li><strong>Recognition:</strong> the sensor reads the object color accurately and sends a signal to the control unit.</li>
<li><strong>Picking and directing:</strong> based on the recognized color, the robotic arm joints move to pick up the object and sort it into its assigned corner or container.</li>
</ol>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project contributes to the Sustainable Development Goals, especially:</p>
<ul>
<li><strong>Industry and innovation (Goal 9):</strong> strengthening sustainable manufacturing and encouraging technological innovation through smart mechanisms.</li>
<li><strong>Responsible consumption and production (Goal 12):</strong> the logic of this system can be applied to accurate material sorting, supporting organized recycling operations.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>Tasks were distributed effectively to ensure that the platform and arm work together properly:</p>
<ul>
<li><strong>Robotic arm engineering:</strong> handled by Hiba Troukouti, who focused on programming the movement of the robotic arm joints to pick up objects and place them correctly according to each color.</li>
<li><strong>Rotating platform and sensing engineering:</strong> handled by Khadija El Kherbaoui, who focused on designing the rotating platform and programming the color sensor to ensure accurate reading and perfect synchronization with the arm movement.</li>
</ul>`,
    'smart-assistant': `
<h2>Project Context and Problem Statement</h2>
<p>Effective communication and accurate information access for students and parents are among the main challenges of modern school administration. Answering repeated questions, such as working hours, exam dates or the presence of administrative staff, often consumes a lot of time.</p>
<p>To respond to this challenge, the Al Wahda smart assistant was created. It is a pioneering project at national level inside public schools, aiming to digitize institutional communication through a chatbot available around the clock to provide immediate and accurate answers to users’ questions.</p>
<h2>Technical Components and Software Design</h2>
<p>The smart assistant was built on an advanced software infrastructure combining web interfaces and automation systems:</p>
<ul>
<li><strong>Interactive user interface:</strong> a modern chat interface based on Glassmorphism, ensuring a smooth and comfortable experience on mobile devices and computers.</li>
<li><strong>Knowledge database:</strong> the team collected and built a large database of more than 300 questions and answers covering organizational, administrative and geographic aspects of the school.</li>
<li><strong>Automation and connection engine (n8n):</strong> the heart of the system, linking the chat interface to the database and analyzing user questions to provide the most accurate answer in fractions of a second.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The smart assistant follows an instant-response algorithm:</p>
<ul>
<li><strong>Receiving the question:</strong> the user asks a question in natural language through the chat interface.</li>
<li><strong>Analysis and processing:</strong> the request is sent through a Webhook to n8n servers, which analyze keywords and match them with the knowledge database.</li>
<li><strong>Automatic response:</strong> the appropriate answer is generated and sent immediately to the user, with the possibility of directing them to external links when needed.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This pioneering project supports sustainable development through:</p>
<ul>
<li><strong>Quality education:</strong> facilitating access to educational information and strengthening direct communication between the school and its community.</li>
<li><strong>Industry, innovation and infrastructure:</strong> providing a model for integrating artificial intelligence and automation technologies into public sector digitization.</li>
</ul>
<h2>Try the Smart Assistant</h2>
<p>You can interact with the smart assistant and ask questions about Al Wahda Middle School through the following link:</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="../../bot.html" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🤖</span> Talk to the Smart Assistant Now
  </a>
</div>
<h2>Team and Task Distribution</h2>
<p>This pioneering system was designed and developed thanks to the exceptional efforts of club members:</p>
<ul>
<li><strong>Data engineering and knowledge content:</strong> handled by Hicham Oussroud, who collected, classified and organized a database of more than 300 questions and answers covering every detail related to the school.</li>
<li><strong>Software engineering and automation (n8n):</strong> handled by Abdellah Lmou, who developed the interactive chat interface, connected it to n8n and designed automatic response algorithms to ensure fast and accurate answers.</li>
</ul>`,
    'smart-bell': `
<h2>Project Context and Problem Statement</h2>
<p>Schools often depend on human intervention to ring the bell at entry, exit and break times, which may sometimes lead to inaccurate timing or forgotten schedules. In addition, many school buildings lack early warning systems against fire or gas leaks.</p>
<p>This project, actually implemented at Al Wahda Pioneer Middle School, provides a radical dual solution: full and accurate automation of school time and a preventive protection system that ensures the safety of students and staff.</p>
<h2>Technical Components and Engineering Design</h2>
<p>The system was designed to be stable, accurate and able to operate continuously without human intervention, using:</p>
<ul>
<li><strong>Central control unit:</strong> an Arduino board that reads time and analyzes sensor data.</li>
<li><strong>Precise time system:</strong> a real-time clock module that keeps time very accurately and independently, even during power cuts.</li>
<li><strong>Power relay:</strong> a safe electronic switch allowing the Arduino to control the school bell current using very low voltage.</li>
<li><strong>Safety guard system:</strong> gas and smoke sensors operating continuously and connected to an independent alarm dedicated to emergency situations.</li>
<li><strong>Control and time adjustment buttons:</strong> programmed buttons for quick manual intervention to modify timing without fully reprogramming the system.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system runs parallel and independent functions to ensure maximum efficiency and support school administration:</p>
<ul>
<li><strong>Bell automation and time management:</strong> the Arduino compares the current time with the programmed timetable. When the time matches, the system activates the bell for a few seconds and then stops it automatically.</li>
<li><strong>Flexible adaptation to school time:</strong> the system includes a very practical feature allowing administration to add or subtract one hour with a single button to adapt to summer or winter time. It also includes a dedicated button for activating or deactivating Ramadan timing, removing the need for programmers at every official change.</li>
<li><strong>Emergency protocol:</strong> gas and smoke sensors continuously analyze air quality. If a leak or fire is detected, the system overrides the timetable and immediately triggers the emergency alarm to alert administration and support evacuation.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This practical achievement contributes to:</p>
<ul>
<li><strong>Quality education:</strong> improving school infrastructure and ensuring precise management of learning time.</li>
<li><strong>Sustainable cities and communities:</strong> providing a safe educational environment equipped with preventive systems against risks such as fires and leaks.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>To ensure the success and real-world implementation of this project, club members combined their efforts and distributed tasks across all aspects of the system:</p>
<ul>
<li><strong>Design and construction engineering:</strong> handled by Taha Lmou, who supervised the design of the external box containing the electronic components and its safe practical installation inside the school.</li>
<li><strong>Safety engineering and school protection:</strong> handled by Salma Aqjoua, who focused on integrating smoke and gas sensors and testing alarm protocols to meet safety standards.</li>
<li><strong>Time and bell engineering:</strong> handled by Adam Ahwid, who programmed the time module, wrote algorithms for regular and Ramadan schedules and electronically linked them to the relay controlling the main bell.</li>
</ul>`,
    'smart-driouch': `
<h2>Project Context and Problem Statement</h2>
<p>The Smart Driouch project comes as a technological response to the challenges of urban expansion in the city of Driouch, which faces precise local issues that can be summarized as follows:</p>
<ul>
<li><strong>Seasonal traffic congestion:</strong> heavy pressure on the city’s road infrastructure during summer because of the large arrival of Moroccans living abroad, which slows traffic and delays emergency interventions.</li>
<li><strong>Risk of natural disasters:</strong> the continuous threat of Oued Kert, which crosses the city and has already caused major losses during strong floods, in addition to the fact that the city and region are located in the Rif area known for seismic activity.</li>
</ul>
<p><strong>Research question:</strong> how can embedded systems and artificial intelligence technologies be integrated to create a proactive and smart system that reduces traffic isolation, provides early warning against natural disasters and protects the residents of Driouch?</p>
<h2>Technical Components and Engineering Design</h2>
<p>The proposed solutions were represented through a precise engineering model simulating the city’s infrastructure. The system relies on Arduino boards as a central brain for data processing, connected to a network of precise sensors:</p>
<ul>
<li><strong>Traffic and parking management:</strong> RFID module for vehicle identification, servo motors for barrier control and 12V relays for controlling the traffic light network.</li>
<li><strong>Natural disaster monitoring:</strong> water level sensors to monitor Oued Kert and MPU6050 vibration sensors to detect early ground tremors.</li>
<li><strong>Environmental and logistics management:</strong> soil moisture sensors for smart irrigation and a color sensor for waste sorting or routing vehicles.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system works automatically and in an interconnected way to solve the proposed problems through the following axes:</p>
<ul>
<li><strong>Early warning and crisis management system:</strong> when danger is detected, the system automatically changes traffic light states, opens road barriers to facilitate evacuation, lights safe escape routes and alerts emergency vehicles.</li>
<li><strong>Smart traffic and emergencies:</strong> the system reacts immediately when an ambulance approaches by opening a “green path” that ensures its passage without delay.</li>
<li><strong>Smart parking:</strong> parking is organized using RFID technology for authorized vehicles only, reducing disorder.</li>
</ul>
<h2>Integration of Artificial Intelligence and Cloud Services</h2>
<p>To strengthen the city’s security and practical side, artificial intelligence was integrated as a higher layer for data management through a smart assistant for citizens (Chatbots). This interactive system provides residents with real-time updates to avoid congestion or urgent alerts in case of flood risk from Oued Kert.</p>
<h2>Creative and Cultural Touch</h2>
<p>The project is not limited to purely technical solutions; it also integrates local identity through the digital olive tree. This model represents a cultural landmark of the Driouch region and highlights the project’s main theme: when advanced technology meets local identity and culture.</p>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project directly contributes to sustainable development through:</p>
<ul>
<li><strong>Saving lives:</strong> through early warning against floods and earthquakes.</li>
<li><strong>Environmental sustainability:</strong> rationalizing water consumption through smart irrigation.</li>
<li><strong>Reducing emissions:</strong> limiting pollution caused by traffic congestion.</li>
</ul>`,
    'smart-farm': `
<h2>Project Context and Problem Statement</h2>
<p>The agricultural sector faces major challenges such as water scarcity, resource waste caused by traditional irrigation methods and financial losses resulting from crop damage by birds and intruding animals.</p>
<p>The smart farm project is a small-scale model of the farm of the future. It offers an integrated technological solution based on the Internet of Things and embedded systems to rationalize water consumption and protect crops automatically and sustainably.</p>
<h2>Technical Components and Engineering Design</h2>
<p>To achieve full autonomy, the model was equipped with a set of connected sensors and systems:</p>
<ul>
<li><strong>Central control unit:</strong> an Arduino board acting as the brain that collects data and makes decisions.</li>
<li><strong>Sustainable irrigation system:</strong> a rainwater collection tank connected to a small water pump and a soil moisture sensor.</li>
<li><strong>Perimeter protection system (smart fence):</strong> a fence equipped with touch sensors or a closed electric circuit to detect any physical intrusion attempt by animals.</li>
<li><strong>Bird repelling system:</strong> a sound sensor sensitive to high frequencies such as bird sounds, connected to an audio alarm that acts as an electronic scarecrow.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system operates through three smart and independent mechanisms:</p>
<ul>
<li><strong>Water rationalization (smart irrigation):</strong> the soil sensor continuously measures humidity. The pump is activated only when the system detects real dryness in the soil, using stored rainwater, and stops automatically once the required moisture level is reached.</li>
<li><strong>Electronic scarecrow:</strong> the sound sensor remains in listening mode. When it detects sounds of birds gathering near crops, the system immediately triggers an unpleasant sound for a few seconds to drive them away without harming them.</li>
<li><strong>Interactive safety fence:</strong> when any animal touches the fence around the farm, the electric circuit closes and triggers an alert to protect the crops from damage.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project contributes to the Sustainable Development Goals, especially:</p>
<ul>
<li><strong>Zero hunger:</strong> encouraging sustainable and smart agricultural practices that protect crops.</li>
<li><strong>Clean water and sanitation:</strong> using rainwater and reducing groundwater waste through targeted irrigation.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>The project was completed through cooperation between club members to ensure the agricultural and security systems work in harmony:</p>
<ul>
<li><strong>Irrigation and sustainable agriculture engineering:</strong> handled by Mohamed Amine Zkagh, who focused on programming the soil moisture sensor, connecting it to the water pump and developing the automatic irrigation algorithm based on stored rainwater.</li>
<li><strong>Protection and sensing systems engineering:</strong> handled by Daoud, who programmed the sound sensor and smart fence to ensure fast alarm response and protect crops from animals and birds.</li>
</ul>`,
    'smart-helmet': `
<h2>Project Context and Problem Statement</h2>
<p>Official statistics from Morocco’s National Road Safety Agency (NARSA) show that motorcycle users are the most vulnerable category on the road, representing more than 40% of total road accident deaths. The main cause is often failure to wear a protective helmet.</p>
<p>Based on this alarming reality, the smart helmet project was created as a preventive technological solution. It addresses negligence in safety measures by making helmet wearing a mandatory condition for starting the motorcycle engine, automatically protecting the rider.</p>
<h2>Technical Components and Engineering Design</h2>
<p>This embedded system is divided into two separate units that communicate wirelessly to ensure safety:</p>
<ul>
<li><strong>Helmet unit (transmitter):</strong> based on a small Arduino board, equipped with an infrared sensor or push button to verify that the rider is actually wearing the helmet, plus a wireless transmitter module.</li>
<li><strong>Motorcycle unit (receiver):</strong> contains an Arduino board connected to a wireless receiver and a power relay controlling the engine ignition circuit.</li>
<li><strong>Accident detection system:</strong> a vibration or tilt sensor integrated into the helmet to detect a collision or sudden fall.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The system works as a closed safety loop that cannot be easily bypassed:</p>
<ul>
<li><strong>Mandatory start condition:</strong> when the rider gets on the motorcycle, the engine start circuit remains locked. Once the helmet is worn, the internal sensor detects the signal and the Arduino sends an encrypted wireless command to the motorcycle unit to allow the engine to start.</li>
<li><strong>Automatic blocking:</strong> if the rider removes the helmet while stopped or before moving, wireless communication is interrupted, causing the engine to stop immediately and preventing unsafe riding.</li>
<li><strong>Collision detection:</strong> in case of an accident, the vibration sensor detects the strong shock, allowing the system to trigger an alert.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This preventive innovation supports the Sustainable Development Goals through:</p>
<ul>
<li><strong>Good health and well-being:</strong> reducing deaths and serious injuries caused by motorcycle accidents.</li>
<li><strong>Industry, innovation and infrastructure:</strong> encouraging the development of smart embedded protection systems that could be adopted in future transportation and motorcycle manufacturing.</li>
</ul>
<h2>Team and Task Distribution</h2>
<p>To ensure effective communication between the helmet and the motorcycle, the work was divided as follows:</p>
<ul>
<li><strong>Helmet sensing and wireless communication engineering:</strong> handled by [first student name], focusing on programming the helmet-wearing verification sensor and configuring the wireless transmitter to send a precise and stable signal.</li>
<li><strong>Motorcycle control and receiver engineering:</strong> handled by [second student name], focusing on programming the receiver unit integrated into the motorcycle and connecting it to the power relay to actually control engine start and stop according to the helmet state.</li>
</ul>`,
    'typing-speed-challenge': `
<h2>Competition Context and Problem Statement</h2>
<p>Keyboard typing speed and control are among the essential skills that students need in the digital age. However, many learners struggle to memorize key positions and use both hands while typing.</p>
<p>This is how the Digital Speed Challenge was created: a periodic competition organized by the club to motivate students to develop their computer typing skills. It aims to create a positive competitive atmosphere and transform routine learning into an exciting challenge that highlights students’ abilities and encourages excellence.</p>
<h2>Technical Tool and Adopted Software</h2>
<p>To guarantee transparency, accurate training and professional assessment of participants’ level, the competition relies on specialized software:</p>
<ul>
<li><strong>RapidTyping:</strong> an advanced educational program designed specifically to teach touch typing in a structured and interactive way suitable for all levels.</li>
<li><strong>Evaluation criteria:</strong> the program accurately calculates typing speed, in words or characters per minute, while tracking accuracy and spelling errors. It provides detailed statistics for each student and allows the fastest and most accurate competitor to be identified automatically and fairly.</li>
</ul>
<h2>Implementation and Methodology</h2>
<p>The competition follows precise organizational stages to ensure participation from all eight classes of the school:</p>
<ul>
<li><strong>Training and selection:</strong> a training session is held for all classes before the competition to practice with RapidTyping. During this stage, the best three students from each class are selected, for a total of 24 qualified participants.</li>
<li><strong>Direct elimination rounds:</strong> the competition is organized as direct rounds between the three representatives of each class. Meetings are scheduled to gather competitors and hold the challenges in front of the audience.</li>
<li><strong>Final rounds:</strong> in each challenge round, the slowest third is eliminated, and the competition continues among the best until the fastest student of Al Wahda Middle School is crowned.</li>
</ul>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This interactive competition contributes to:</p>
<ul>
<li><strong>Quality education:</strong> developing students’ basic digital skills through modern and motivating pedagogical methods.</li>
<li><strong>Reduced inequalities:</strong> giving students from all eight classes an equal chance to participate and showcase their technical abilities in a fair and positive competitive environment.</li>
</ul>
<h2>Participants in the Challenge</h2>
<p>This event is not based on engineers or developers; it is a participatory technical celebration. The competitors include <strong>24 participants</strong> representing the best students from the eight classes of the school, with three participants from each class. They compete in a strong sportsmanship spirit to represent their classes and win the title of fastest digital typist.</p>`,
    'video-games-awareness': `
<h2>Project Context and Problem Statement</h2>
<p>Video games are among the most widespread forms of entertainment among teenagers, and they are often accused of being the single main cause of poor academic performance. But is that the whole truth?</p>
<p>To shed light on this issue, the club organized an innovative interactive presentation that goes beyond direct traditional advice and becomes a session of critical analysis and honest confrontation. The main goal is to understand the real relationship between games and academic achievement, and to raise awareness about dealing with the digital world rationally while avoiding the trap of addiction.</p>
<h2>Presentation Methodology: The Interactive Panel Rule</h2>
<p>The club president led this session in front of the audience using a truth-court style, according to strict and innovative rules that guarantee full transparency:</p>
<ul>
<li><strong>Full truth rule:</strong> the participant is asked a question and must answer with complete honesty without avoiding it.</li>
<li><strong>Red card (for the moderator):</strong> raised when the moderator notices that a student is avoiding the answer or hiding part of the truth.</li>
<li><strong>Green card (for the moderator):</strong> raised as appreciation for the student’s courage when they admit a mistake or reveal an embarrassing truth with confidence.</li>
<li><strong>Black card (for the student):</strong> a challenge card raised by the student if they feel the moderator was unfair in using the red card.</li>
<li><strong>Audience judgment:</strong> when the black card is raised, the entire room intervenes to settle the dispute through a direct vote for or against the moderator’s decision, making the audience an essential interactive part of the discussion.</li>
</ul>
<h2>Models Participating in the Critical Analysis</h2>
<p>To ensure a comprehensive and objective analysis, five students representing different realistic profiles from the school were selected:</p>
<ul>
<li><strong>Balance model (Hicham Oussroud):</strong> a top student who plays video games in his free time, showing the audience that organization is the key.</li>
<li><strong>Confession and addiction model (Bilal Lakhal):</strong> a student who bravely admits that addiction had a direct negative effect on his school results.</li>
<li><strong>Recovery model (Soufiane Saqqar):</strong> a former addict currently on a recovery path, who replaced the virtual world with a concrete hobby to fill his free time.</li>
<li><strong>Positive isolation model (Meryem Bouaouda):</strong> a top student who does not know video games and has never heard the names of famous games, devoting her time to learning and modesty.</li>
<li><strong>Rule-breaking model:</strong> a student who does not play video games at all, yet still struggles academically, proving that games are not the only excuse for failure and that other factors can also cause academic difficulty.</li>
</ul>
<h2>Educational Goals and Session Summary</h2>
<p>This interactive session broke common stereotypes. The audience understood that the problem is not video games themselves, but lack of awareness, poor time management and escaping from reality. The session achieved deep goals, including:</p>
<ul>
<li>Raising awareness about the risks of digital addiction and encouraging students to engage in real hobbies.</li>
<li>Spreading a culture of dialogue, self-criticism and courage to admit mistakes as a first step toward treatment and correction.</li>
</ul>
<h2>Browse the Interactive Presentation</h2>
<p>We invite you to discover the presentation prepared for this discussion session, which includes critical analysis axes and educational guidance, through the direct link:</p>
<div style="text-align: center; margin: 30px 0;">
  <a href="https://elrhaouat.github.io/u/" target="_blank" style="background-color: #1a365d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2); transition: all 0.3s ease;">
    <span>🎮</span> Presentation: The Hidden Side of Video Games
  </a>
</div>
<h2>Connection to the Sustainable Development Goals</h2>
<p>This project supports:</p>
<ul>
<li><strong>Good health and well-being:</strong> strengthening students’ mental health and protecting them from the harms of digital addiction.</li>
<li><strong>Quality education:</strong> addressing the causes of academic difficulty through innovative educational methods based on persuasion and direct interaction.</li>
</ul>`,
  },
};

export const getProjectBodyTranslation = (slug: string, locale: Locale): string | undefined => {
  if (locale === 'ar') return undefined;
  return projectBodies[locale]?.[slug];
};

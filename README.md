# Test nexus : Bibliothèque de composant React + Tailwind CSS

```
src/
├── components/          # Dossier principal des composants
│   ├── ui/             # Composants UI de base
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── Input/
│   │       ├── Input.tsx
│   │       ├── Input.test.tsx
│   │       └── index.ts
│   └── composite/      # Composants plus complexes
├── types/              # Types et interfaces TypeScript
│   └── index.ts
├── utils/              # Fonctions utilitaires
│   └── index.ts
├── hooks/              # Custom hooks React
│   └── index.ts
└── index.ts           # Point d'entrée principal
```

> Intégré l'IA pour que les users puissent modifier directement le code d'un composant selon leur desir sur la plateforme

> Next Component

----------------------------------------------- LOW LEVEL 
🌟 Les 20 Composants d’Exception

🔢	Composant	Description rapide
1.	**MagicButton**	: Bouton avec particules animées au hover, gradient mouvant, icône dynamique.
2.	**GlassModal**	: Modal avec effet verre dépoli, flou arrière et animations Framer Motion.
3.	**NeonTabs**	: Onglets lumineux avec effets de néon, transitions glissantes et icônes.
4.	**CommandPalette**	: Cmd+K style palette, clavier-first, recherche rapide d’actions.
5.	**3DFlipCard**	: Carte rotative 3D au hover, pour profils ou détails produits.
6.	**MosaicGallery**	: Grille d’images responsive en Masonry, zoom fluide et overlays.
7.	**NoiseCard**	: Carte avec effet de bruit et grain stylé, moderne et soft-glass.
8.	**FloatingActionButton**	: Menu radial déclenché par un bouton flottant en bas de l’écran.
9.	**HeroParallax**	: Section Hero avec effet Parallax basé sur scroll et souris.
10.	**GradientText**	: Texte avec fond dégradé animé, effet lumineux progressif.
11.	**DraggableCard**	: Carte draggable avec drag & drop, idéal pour dashboard UX.
12.	**ProgressTracker**	: Suivi d’étapes avec animation fluide et état dynamique.
13.	**ToastNotification**	: Notification toast stylée (rounded, animée, avec icône).
14.	**AccordionGlow**	: Accordéon fluide avec effets de lumière en ouverture.
15.	**StatCard**	: Carte de statistiques avec icône, animation de compteur et design clean.
16.	**SwitchMorph**	: Switch toggle avec morphing d’icônes (ex : lune ↔️ soleil).
17.	**ChatBubble**	: Composant de messagerie avec bulles animées, avatar, timestamps.
18.	**UploadDropzone**	: Zone de dépôt de fichier avec animation de survol, drag-drop friendly.
19.	**EmojiReactions**	: Réactions emoji animées type Facebook, avec hover + vibration.
20.	**LiveTypingIndicator**	: Indicateur de frappe en temps réel pour chat ("quelqu’un écrit...")
21.	**EditableText**	- Texte inline éditable avec sauvegarde automatique.
22.	**DataTable** - Pro	Tableau interactif avec tri, filtre, pagination, et sélection multiple.
23.	**KanbanBoard**	- Tableau Kanban avec drag & drop, statuts, customisation complète.
24.	**CalendarScheduler**	- Calendrier avec drag de créneaux, événements cliquables, vues dynamiques.
25.	**ResizablePanels**	- Panneaux redimensionnables, type IDE (gauche/droite, haut/bas).
26.	**SmartSearchInput**	- Input avec autocomplétion, suggestions via API, clavier-first UX.
27.	**NotificationCenter**	- Centre de notifications avec regroupement, actions rapides, statuts.
28.	**DarkModeToggle**	- Bouton animé pour basculer en thème sombre/clair, avec icônes morphing.
29.	**MultiStepForm**	- Formulaire en étapes avec validation, animation entre les écrans.
30.	**PaywallSection**	- Zone protégée par paiement ou abonnement, affichage conditionnel stylé.
31.	**MarkdownEditor**	- Éditeur markdown avec preview live, toolbar personnalisée.
32.	**AudioVisualizer**	- Lecteur audio avec visualisation dynamique (barres ou forme d’onde).
33.	**ImageCropUploader**	- Uploader d’image avec recadrage, zoom et prévisualisation.
34.	**ThemeSwitcher**	- Sélecteur de thème complet (couleurs, mode, style UI).
35.	**PasswordStrengthMeter**	- Input mot de passe avec indicateur de sécurité, checklist en live.
36.	**QuickFilterBar**	- Barre de filtres avec tags sélectionnables, réactif, UX simplifiée.
37.	**FloatingTooltip**	- Tooltip animé avec flèche fluide, responsive et contextuel.
38.	**SwipeableCardStack**	- Stack de cartes swipe à la Tinder, mobile friendly.
39.	**StepperForm**	- Étapes verticales ou horizontales avec validation conditionnelle.
40.	**CreditCardInput**	- Formulaire de carte de crédit animé, avec détection de type (Visa, etc).
41.	**ConfettiButton**	- Bouton déclencheur de confettis ou feu d’artifice 🎉
42.	**ActivityFeed**	- Timeline d’activités avec timestamps relatifs, avatars, filtres.
43.	**EmojiPicker**	- Sélecteur d’emojis stylé avec recherche rapide, utilisé dans les chats.
44.	**QRGenerator**	- Générateur de QR code avec options de style et download.
45.	**LoadingSkeleton**	- Composants skeleton pour loading avec animation wave/shimmer.
46.	**FileManagerGrid**	- Explorateur de fichiers (icônes, preview, actions rapides).
47.	**ScrollProgressBar**	- Barre de progression de lecture en haut de l’écran.
48.	**ContextMenu**	- Menu contextuel clic-droit, personnalisé avec actions et icônes.
49.	**VideoPlayerCustom**	- Lecteur vidéo stylisé avec contrôle complet, overlay info, thumbnails.
50.	**AIChatWidget**	- Widget de chat type ChatGPT miniature, pour intégration support IA.
----------------------------------------------------------------

Voici une liste de composants fondamentaux avec des fonctionnalités avancées que vous pourriez ajouter à votre bibliothèque :

## Composants d'Interface Utilisateur Fondamentaux avec Fonctionnalités Avancées

- 

```tsx
/***
 * AJOUT
 */
```

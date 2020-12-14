# Projet Société des alcools de Nexapp

## Explication des packages

Components : Contient les différents components React. J'ai tout gardé au premier niveau (flat) pour simplifier la lecture, mais évidemment, si le projet allait en grandissant, une arborescence bien planifiée serait de mise.

Infrastructure : La gestion des appels rest est dans ce package. 
rest.tsx contient l'appel de axios et les précisions, comme l'url utilisé et le retour attendu pour créer des fonctions plus explicites.

Model : Le projet est fait en Typescript, étant donné que je préfère les langages typés et que j'aime bien avoir du feedback à l'écriture sur les types utilisés et retournés par les fonctions. Ce dossier contient les objets frontend pour rendre encore plus explicite les objets utilisés avec l'aide de Typescript.

Le fichier utils.tsx est tout seul pour le moment et ne contient que la fonction round que j'utilise simplement pour faciliter la lecture. Sa logique me semblait assez réutilisable pour être à part, au lieu d'être dans tous les fichiers qui vont en avoir besoin.

## Idée générale

Mon but premier était de respecter le plus possible l'idée de la séparation smart-dumb component.
La WineMainPage va être l'élément principal (smart) qui va englober les deux vues possibles et s'occuper d'appeler le fichier rest.tsx pour avoir l'information du backend et l'envoyer à ses enfants (dumb) qui vont gérer la logique d'affichage. Dans sa conception "smart", la page principale va avoir un state (assez petit) qui va consister en les informations du backend (appelées dans son componentDidMount) et d'un booléen pour savoir laquelle des deux vues est visible. Les deux enfants vont simplement recevoir l'information du parent et présenter l'information reçue (dans les props), d'une manière assez unidirectionnelle (ou en franglais, assez straightforward).

## Fonctionnement des components enfants

WineList : Celui-ci va recevoir la liste de vins et mettre chacun d'eux dans une carte qui va éclater les informations et les afficher. La critique a été extraite dans un component pour une éventualité de réutilisation.

WineStats : Celui-ci va recevoir la liste de vins et appliquer quelques fonctions pour gérer les logiques administratives demandées. J'ai pensé faire un objet carte qui recevrait les informations, mais étant donné que celle du milieu (le nombre de vins de chaque couleur) était assez différente, je me suis dit que ça ne serait pas nécessaire. Par contre, si plusieurs demandes supplémentaires pointent dans cette direction, ça pourrait être une possibilité. La plupart des fonctions du component sont là pour simplifier la lecture de la fonction render.

## Autres

J'ai mis des objets Wine dans le fichier rest pour simplement avoir un peu de feedback visuel en codant. Ça aurait pu être intéressant de faire un feature flag pour "mocker le retour du backend", mais j'avoue que je n'ai pas beaucoup fait de ce genre de chose. Je l'ai laissé pour vous montrer l'idée.